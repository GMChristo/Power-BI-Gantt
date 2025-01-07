"use strict";

import "./../style/visual.less";
import * as iconsBase from "./icons";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import DataView = powerbi.DataView;
import DataViewMatrix = powerbi.DataViewMatrix;

import * as d3 from "d3";
type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;

// Constants
const MARGIN_TOP = 20;
var CHART_WIDTH = 1200;
var CHART_HEIGHT = 640;
var DATA_INICIAL = new Date("3000-01-01");
var DATA_FINAL = new Date("1500-01-01");
var DATA_INICIAL_SF = new Date("3000-01-01");
var DATA_FINAL_SF = new Date("1500-01-01");
var dataMap = [];
var estruturaDados = [];
var exibir = [];
var dadosEstruturais = [];
var svgRoot;
var fixedScale;
var svgBase;
var nomesEventoTdHTML;
var dadosEventoTdHTML;
var dadosEventoScaleTdHTML;
var tipoEscalaGrafico = "Mês";
var escalaTickSize;
var tickEspacamento = 0;
var posDataFinal;
var alturaRolagem;
var larguraRolagem = [];
var dataHoje;
var formatoEscala = d3.utcFormat("%b %Y")

var corLinha = ["#F1F3F5", "#DEE2E6"]

var tamanhoScalaExib = 100
var corPrimaria = { "1": "006432", "2": "93A100", "3": "00867F" }

var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "#f9f9f9")
    .style("border", "1px solid #d3d3d3")
    .style("padding", "5px")
    .style("border-radius", "5px")
    .style("box-shadow", "0px 0px 5px 0px #000000")
    .style("width", "fit-content")
    .html(`tooltip inicial do visual de gantt`)

export class Visual implements IVisual {
    private svgRootHTML: Selection<any>;

    constructor(options: VisualConstructorOptions) {
        this.svgRootHTML = d3.select(options.element).append("div").classed("card", true);
        svgBase = this.svgRootHTML
        console.log("version: " + "1.4.1.3")
    }

    public update(options: VisualUpdateOptions) {
        // console.log("dataMap0: " + dataMap);
        dataMap = [];
        estruturaDados = [];
        dadosEstruturais = [];
        dataHoje = d3.timeMinute(new Date());
        DATA_INICIAL = new Date("3000-01-01");
        DATA_FINAL = new Date("1500-01-01");
        // console.log("dataMap1: " + dataMap);

        const dataView: DataView = options.dataViews[0];
        // console.log("dados iniciais dataView: " + JSON.stringify(options));
        CHART_HEIGHT = options.viewport.height
        CHART_WIDTH = options.viewport.width

        const matrixDataView: DataViewMatrix = dataView.matrix;
        // console.log("matrixDataView: " + JSON.stringify(matrixDataView));

        const categorias = matrixDataView.rows.root.children;
        // console.log("dados iniciais categorias: " + JSON.stringify(categorias));
        const estrutura = matrixDataView.rows.levels;
        const dadoEstrutura = estrutura[estrutura.length - 1].sources;
        const tipoDeEscala = options.dataViews[0].metadata.columns;

        estruturaEscala(tipoDeEscala)
        // console.log("estruturaEscala tipoEscalaGrafico: " + tipoEscalaGrafico);

        estruturaHierarquia(dadoEstrutura, estruturaDados) //retorna quais campos no visual foram preenchidos
        dadosEstruturais = estruturaDados;

        hierarquiaTree(categorias, 0, dataMap)
        // console.log("hierarquiaTree depois: " + JSON.stringify(dataMap));
        preencheDataInicioFim(dataMap)

        defineEscala()
        // console.log("tamanhoScalaExib: " + tamanhoScalaExib);

        agrupamentoHierarquia(dataMap, dataAgrupado)
        // console.log("dataMap: " + JSON.stringify(dataMap));

        const tagMainDiv = d3.selectAll(".main-div");
        tagMainDiv.remove();

        const tagMainSvg = d3.selectAll(".main-svg");
        tagMainSvg.remove();

        var mainDivTable = svgBase.append("div")
            .attr("class", "main-div")
            .style("position", "absolute")
            .style("height", CHART_HEIGHT + "px")
            .style("min-height", CHART_HEIGHT + "px")
            .style("width", CHART_WIDTH + "px")
            .style("overflow-y", "auto")
            .style("overflow-x", "hidden")
            .append("table")
            .attr("class", "main-table")

        var mainTableTr = mainDivTable.append("tr")

        nomesEventoTdHTML = mainTableTr.append("td")
            .attr("class", "mainTdNomes")
            .style("width", "600px")
            .style("background-color", "white")
            .style("max-width", "325px")
            .style("height", "-webkit-fill-available")
            .style("margin-top", "21px")
            .style("vertical-align", "top")
            .style("position", "fixed")
            .style("overflow-x", "overlay")
            .style("overflow-y", "auto")
            .style("border", "1px solid")
            .style("padding-right", "25px")

        dadosEventoTdHTML = mainTableTr.append("td")
            .attr("class", "mainTdEventos")
            .style("width", tamanhoScalaExib + "px")
            .style("height", "-webkit-fill-available")
            .style("background-color", "white")
            .style("margin-top", "21px")
            .style("vertical-align", "top")
            .style("overflow-y", "auto")
            .style("position", "fixed")
            .style("max-width", "-webkit-fill-available")
            .style("border", "1px solid")
            .style("left", "310px")

        var testeRegulagemAltura = dadosEventoTdHTML.append("div")
            .attr("class", "divMainTdEventos")
            .style("max-width", CHART_WIDTH - 300 + "px")

        //necessario para criar as escalas

        svgRoot = testeRegulagemAltura
            .append("svg")
            .attr("class", "main-svg")
            .style("width", tamanhoScalaExib + "px")
            .style("height", "-webkit-fill-available")
            .style("position", "absolute")
            .style("top", "-40px")
            .style("left", "0px")
            .style("z-index", "0")

        dadosEventoScaleTdHTML = mainTableTr.append("td")
            .attr("class", "mainTdScale")
            .style("height", "30px")
            .style("width", CHART_WIDTH + "px")
            .style("max-width", CHART_WIDTH + "px")
            .style("vertical-align", "top")
            .style("overflow-x", "hidden")
            .style("left", "310px")
            .style("padding-left", "7px")

        var testeRegulagemScala2 = dadosEventoScaleTdHTML.append("div")
            .style("width", "310px")
            .style("height", "20px")
            .style("left", "00px")
            .style("position", "absolute")
            .style("background-color", "white")

        var testeRegulagemScala = dadosEventoScaleTdHTML.append("div")
            .attr("class", "divMainTdScala")
            .style("max-width", CHART_WIDTH - 300 + "px")

        //necessario para criar as escalas
        fixedScale = testeRegulagemScala
            .append("svg")
            .attr("class", "fixed-scale")
            .style("width", tamanhoScalaExib + "px")
            .style("height", "30px")
            .style("margin-left", "302px")
            .style("padding-right", "50px")
            .style("top", "0px")
            .style("left", "0px")


        // console.log("tamanhoScalaExib main-eventos: " + tamanhoScalaExib)
        var dadosEventoHTML = testeRegulagemAltura.append("div")
            .attr("class", "main-eventos")
            .style("width", tamanhoScalaExib + "px")

        const tagsetupScales = d3.selectAll(".grid");
        tagsetupScales.remove();
        const tagmilestone = d3.selectAll(".milestone");
        tagmilestone.remove();
        const tagtreeModulos = d3.selectAll('[class^="row-modulo-nome-"]');
        tagtreeModulos.remove();

        const tagfixedScales = d3.selectAll(".grid2");
        tagfixedScales.remove();

        posDataFinal = timeScale(DATA_FINAL)

        setupScales(svgRoot);
        fixedScales(fixedScale);
        //verificar se a data hoje esta entre DATA_INICIAL e DATA_FINAL 
        if (dataHoje >= DATA_INICIAL && dataHoje <= DATA_FINAL) {
            milestone(svgRoot);
        }

        treeModulos2(dataMap, nomesEventoTdHTML, dadosEventoHTML);
        dadosExpandidos(nomesEventoTdHTML, dadosEventoHTML) // mantem as linhas em exibição apos atualizar o visual
        alternaCores()

        //seleciona as td que tem os nomes e os eventos e cria um listener para caso seja feita a rolagem em uma o evento tb ser executada na outra
        const mainTdNomes = document.querySelector(".mainTdNomes")
        const mainTdEventos = document.querySelector(".mainTdEventos")
        const mainTdScale = document.querySelector(".mainTdScale")
        mainTdNomes.addEventListener('scroll', function () {
            // Define a posição de rolagem da segunda tabela para a posição de rolagem da primeira
            mainTdEventos.scrollTop = mainTdNomes.scrollTop;
        });

        // Adiciona um listener de evento para o evento de rolagem na segunda tabela
        mainTdEventos.addEventListener('scroll', function () {
            // Define a posição de rolagem da primeira tabela para a posição de rolagem da segunda
            mainTdNomes.scrollTop = mainTdEventos.scrollTop;
        });

        const td = document.querySelector('.mainTdNomes') as HTMLTableCellElement;
        alturaRolagem = td.scrollWidth;

        // Adiciona um listener de evento para o evento de rolagem na segunda tabela
        mainTdScale.addEventListener('scroll', function () {
            // Define a posição de rolagem da primeira tabela para a posição de rolagem da segunda
            mainTdEventos.scrollLeft = mainTdScale.scrollLeft;
        });

        // Adiciona um listener de evento para o evento de rolagem na segunda tabela
        mainTdEventos.addEventListener('scroll', function () {
            // Define a posição de rolagem da primeira tabela para a posição de rolagem da segunda
            mainTdScale.scrollLeft = mainTdEventos.scrollLeft;
        });
        atualizaLarguraMainTdNomes("comprime", "", -1, 0)
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function defineEscala() {

    const inicio = new Date(DATA_INICIAL)
    const fim = new Date(DATA_FINAL)
    var resultadoTamanhoEscala

    if (tipoEscalaGrafico == "Ano") {
        resultadoTamanhoEscala = fim.getFullYear() - inicio.getFullYear();
        if (resultadoTamanhoEscala > 12) {
            tamanhoScalaExib = resultadoTamanhoEscala * (CHART_WIDTH / 12)
        } else {
            tamanhoScalaExib = CHART_WIDTH - 304
        }
        escalaTickSize = d3.utcYear.every(1)
    }
    if (tipoEscalaGrafico == "Trimestre") {
        resultadoTamanhoEscala = (fim.getFullYear() - inicio.getFullYear()) * 12 + fim.getMonth() - inicio.getMonth();
        if (resultadoTamanhoEscala > 12) {
            tamanhoScalaExib = resultadoTamanhoEscala * ((CHART_WIDTH / 12) / 3)
        } else {
            tamanhoScalaExib = CHART_WIDTH - 304
        }
        escalaTickSize = d3.utcMonth.every(3)
    }
    if (tipoEscalaGrafico == "Mês") {
        resultadoTamanhoEscala = (fim.getFullYear() - inicio.getFullYear()) * 12 + fim.getMonth() - inicio.getMonth();
        if (resultadoTamanhoEscala > 12) {
            tamanhoScalaExib = resultadoTamanhoEscala * (CHART_WIDTH / 12)
        } else {
            tamanhoScalaExib = CHART_WIDTH - 304
        }
        escalaTickSize = d3.utcMonth.every(1)
    }
    if (tipoEscalaGrafico == "Dia") {
        resultadoTamanhoEscala = Math.floor((fim.getTime() - inicio.getTime()) / (1000 * 3600 * 24));
        if (resultadoTamanhoEscala > 12) {
            tamanhoScalaExib = resultadoTamanhoEscala * 80
        } else {
            tamanhoScalaExib = CHART_WIDTH - 304
        }
        formatoEscala = d3.utcFormat("%d %b %Y")
        escalaTickSize = d3.utcDay.every(1)
    }
}

function dadosExpandidos(svgHierarquiaNomes, svgHierarquiaEventos) {
    exibir.forEach((e) => {

        var categoriaExibirNomes = svgHierarquiaNomes.selectAll('[class^="' + e + '"]')
        if (categoriaExibirNomes.nodes().length > 0) {
            var eventoHide = categoriaExibirNomes.select('[class^="iconPlus-div"]')
            if (eventoHide) {
                eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
            }
            var eventoShow = categoriaExibirNomes.select('[class^="iconMinus-div"]')
            if (eventoShow) {
                eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
            }

            //!TODO rgb(204,0,0) verificar a logica abaixo pois pode ser otimizada para uso parecido do else .querySelectorAll(`.${e} > [class*="row-modulo2-"]`).length > 0) 
            var segundaHierarquia = categoriaExibirNomes.selectAll('[class^="row-modulo2-"]')

            if (segundaHierarquia) {
                if (!categoriaExibirNomes.selectAll('[class^="ocultar"]').empty()) {

                    var segundaHierarquia2 = categoriaExibirNomes.selectAll('[class^="row-modulo2-null"]')
                    if (segundaHierarquia2) {
                        segundaHierarquia2.style("display", segundaHierarquia2.style("display") === "none" ? "contents" : "none");
                    }
                    var segundaHierarquia2 = categoriaExibirNomes.selectAll('[class^="ocultar"]')
                    if (segundaHierarquia2.size() > 0) {
                        segundaHierarquia2.style('display', 'none');
                    }

                    var terceiraHierarquia = categoriaExibirNomes.selectAll('[class^="row-linhaEvento-"]')
                    if (terceiraHierarquia) {
                        terceiraHierarquia.style("display", terceiraHierarquia.style("display") === "none" ? "contents" : "none");
                    }
                }
                else {
                    try {
                        if (categoriaExibirNomes.nodes()[0].querySelectorAll(`.${e} > [class*="row-modulo2-"]`).length > 0) {
                            var filhos = categoriaExibirNomes.nodes()[0].querySelectorAll(`.${e} > [class*="row-modulo2-"]`);
                            filhos.forEach(function (filho) {
                                filho.style.display = 'contents';
                            });
                        }
                        if (categoriaExibirNomes.nodes()[0].querySelectorAll(`.${e} > [class*="row-linhaEvento-"]`).length > 0) {
                            var filhos = categoriaExibirNomes.nodes()[0].querySelectorAll(`.${e} > [class*="row-linhaEvento-"]`);
                            filhos.forEach(function (filho) {
                                filho.style.display = 'contents';
                            });
                        }
                    } catch (error) {
                        // console.log("catch: ");
                    }
                }
            }
        }

        var categoriaExibirEventos = svgHierarquiaEventos.selectAll('[class^="' + e + '"]')
        if (categoriaExibirEventos.nodes().length > 0) {
            var eventoDivEvento = categoriaExibirEventos.select('[class^="evento-div"]')
            if (eventoDivEvento) {
                eventoDivEvento.style("display", eventoDivEvento.style("display") === "none" ? "block" : "none");
            }

            //!TODO rgb(204,0,0) verificar a logica abaixo pois pode ser otimizada para uso parecido do else .querySelectorAll(`.${e} > [class*="row-modulo2-"]`).length > 0) 
            var segundaHierarquiaEvento = categoriaExibirEventos.selectAll('[class^="row-modulo2-"]')

            if (segundaHierarquiaEvento) {
                if (!categoriaExibirEventos.selectAll('[class^="ocultar"]').empty()) {

                    var segundaHierarquia2Evento = categoriaExibirEventos.selectAll('[class^="row-modulo2-null"]')
                    if (segundaHierarquia2Evento) {
                        segundaHierarquia2Evento.style("display", segundaHierarquia2Evento.style("display") === "none" ? "contents" : "none");
                    }

                    var segundaHierarquia2Evento = categoriaExibirEventos.selectAll('[class^="ocultar"]')
                    if (segundaHierarquia2Evento.size() > 0) {
                        segundaHierarquia2Evento.style('display', 'none');
                    }

                    var terceiraHierarquiaEvento = categoriaExibirEventos.selectAll('[class^="row-linhaEvento-"]')
                    if (terceiraHierarquiaEvento) {
                        terceiraHierarquiaEvento.style("display", terceiraHierarquiaEvento.style("display") === "none" ? "contents" : "none");
                    }
                }
                else {
                    try {
                        if (categoriaExibirEventos.nodes()[0].querySelectorAll(`.${e} > [class*="row-modulo2-"]`).length > 0) {
                            var filhosEvento = categoriaExibirEventos.nodes()[0].querySelectorAll(`.${e} > [class*="row-modulo2-"]`);
                            filhosEvento.forEach(function (filho) {
                                filho.style.display = 'contents';
                            });
                        }
                        if (categoriaExibirEventos.nodes()[0].querySelectorAll(`.${e} > [class*="row-linhaEvento-"]`).length > 0) {
                            var filhosEvento = categoriaExibirEventos.nodes()[0].querySelectorAll(`.${e} > [class*="row-linhaEvento-"]`);
                            filhosEvento.forEach(function (filho) {
                                filho.style.display = 'contents';
                            });
                        }
                    } catch (error) {
                        // console.log("catch: ");
                    }
                }
            }
        }
    })
}

var dataAgrupado = []

function agrupamentoHierarquia(dataMap, dataAgrupado) {
    dataMap.forEach((data, i) => {
        if (data.dados) {
            dataAgrupado.push({
                level: data.level,
                nome: data.nome,
                qtdSub: data.qtdSub,
                dados: []
            })
            agrupamentoHierarquia(data.dados, dataAgrupado[i].dados)
        }
        else if (data.levelValues) {
            agrupamentoHierarquia(data.levelValues, dataAgrupado)
        }
        else {
            dataAgrupado.push({
                evento: data.evento,
                ...(data.subTipo && { subTipo: data.subTipo }),
                dataInicio: data.dataInicio,
                dataFim: data.dataFim,
                ...(data.rot && { rot: data.rot }),
                ...(data.icon && { icon: data.icon }),
                ...(data.cor && { cor: data.cor }),
            })
        }
    })
}

function estruturaEscala(element) {
    var key = "escala"

    for (var i = 0; i < element.length; i++) {
        if (key in element[i].roles) {
            tipoEscalaGrafico = element[i].displayName
        }
    }
}

function estruturaHierarquia(element, estruturaDados) {
    var roleName = ""
    var displayName = ""

    for (var i = 0; i < element.length; i++) {
        for (const key in element[i].roles) {
            roleName = key;
            break;
        }
        displayName = element[i].displayName;
        estruturaDados.push({
            index: i,
            roleName: roleName,
            displayName: displayName
        })
    }
}

//monta a estrutura do Json que sera usada no resto do ccodigo
function hierarquiaTree(element, lvl, dataMap) {
    for (var i = 0; i < element.length; i++) {

        if ("children" in element[i]) {
            dataMap.push({
                level: lvl,
                nome: element[i].value,
                qtdSub: element[i].children.length,
                dados: [],
                marcosEventos: []
            })
            hierarquiaTree(element[i].children, lvl + 1, dataMap[i].dados)
            // var retorno = hierarquiaTree(element[i].children, lvl + 1, dataMap[i].dados)
            // dataMap[dataMap.length - 1].marcosEventos = dataMap[dataMap.length - 1].marcosEventos.concat(retorno);
        }
        else if ("levelValues" in element[i]) {
            dataMap.push({
                level: lvl,
                levelValues: []
            })
            var retorno = hierarquiaTree(element[i].levelValues, lvl + 1, dataMap[i].levelValues)
            // return retorno
        }
        else if ("levelSourceIndex" in element[i]) {

            var cat = null; //categoria
            var sTipo = null; //subTipo = Agrupamento
            var dIni = null; //dataInicial
            var dFim = null; //dataFim
            var rot = []; //rotulo
            var icon = null; //icone
            var cor = null; //cor

            dadosEstruturais.forEach((e) => {

                if (e.roleName == "category") {
                    cat = e.index
                } else if (e.roleName == "subTipo") {
                    sTipo = e.index
                } else if (e.roleName == "dataInicial") {
                    dIni = e.index
                } else if (e.roleName == "dataFinal") {
                    dFim = e.index
                } else if (e.roleName == "rotulo") {
                    rot.push(e.index)
                } else if (e.roleName == "icone") {
                    icon = e.index
                } else if (e.roleName == "cor") {
                    cor = e.index
                }
            })

            if (dataMap.length == 0) {
                dataMap.push({
                    evento: element[cat].value,
                    ...(element[sTipo] && { subTipo: element[sTipo].value }),
                    dataInicio: element[dIni].value,
                    dataFim: element[dFim].value,
                    ...(rot.map(r => element[r].value).filter(v => v !== null && v !== undefined && v !== "null").join(' - ') !== '' && { rot: rot.map(r => element[r].value).filter(v => v !== null && v !== undefined && v !== "null").join(' - ') }),
                    ...(element[icon] && { icon: element[icon].value }),
                    ...(element[cor] && { cor: element[cor].value }),
                })
                return dataMap
            }
            else {
                return ""
            }
        }
        else {
            return ""
        }
    }
}

function preencheDataInicioFim(jsonData) {
    DATA_INICIAL = new Date("3000-01-01");
    DATA_FINAL = new Date("1500-01-01");

    calculaDatasInicioFim(jsonData)
    var nextMonthInicio = DATA_INICIAL.getMonth();
    var nextYearInicio = DATA_INICIAL.getFullYear();
    if (nextMonthInicio > 11) {
        nextMonthInicio = 0;
        nextYearInicio++;
    }
    const lastDayOfNextMonthInicio = new Date(nextYearInicio, nextMonthInicio + 1, 0).getDate();
    DATA_INICIAL_SF = new Date(nextYearInicio, nextMonthInicio, 1);
    DATA_INICIAL = DATA_INICIAL_SF


    const year = DATA_FINAL.getFullYear();
    const month = DATA_FINAL.getMonth() + 1; // +1 because getMonth() is zero-based
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    const lastDayOfMonthString = `${year}-${month.toString().padStart(2, "0")}-${lastDayOfMonth.toString().padStart(2, "0")}`;
    //faz com que a data final seja o ultimo dia do mes
    DATA_FINAL = new Date(lastDayOfMonthString)

    var nextMonthFinal = DATA_FINAL.getMonth() + 1;
    var nextYearFinal = DATA_FINAL.getFullYear();
    if (nextMonthFinal > 11) {
        nextMonthFinal = 0;
        nextYearFinal++;
    }
    const lastDayOfNextMonthFinal = new Date(nextYearFinal, nextMonthFinal + 1, 0).getDate();
    DATA_FINAL_SF = new Date(nextYearFinal, nextMonthFinal, 1);
    DATA_FINAL = DATA_FINAL_SF
}


function calculaDatasInicioFim(jsonData) {
    jsonData.forEach((d) => {
        if (d.dados) {
            calculaDatasInicioFim(d.dados)
        }
        else if (d.levelValues) {
            let currentDate = new Date(d.levelValues[0].dataInicio);
            if (currentDate < DATA_INICIAL) {
                DATA_INICIAL = currentDate;
            }
            if (currentDate > DATA_FINAL) {
                DATA_FINAL = currentDate;
            }
        }
        else {
            console.log("não erra pra vc estar aqui O.õ")
        }
    })
}

function timeScaleAxis() {
    var tamanhoData = (d3.scaleUtc()
        .domain([
            DATA_INICIAL,
            DATA_FINAL
        ])
        .clamp(true)
        .range([0, tamanhoScalaExib])
    );
    return tamanhoData;
}

function timeScaleAxisNice() {
    var tamanhoData = (d3.scaleUtc()
        .domain([
            DATA_INICIAL,
            DATA_FINAL
        ])
        .nice()
        .clamp(true)
        .range([0, tamanhoScalaExib])
    );
    return tamanhoData;
}

const xScale = d3.scaleTime()
    .domain([DATA_INICIAL, DATA_FINAL])
    .range([0, tamanhoScalaExib]);


function timeScale(data) {

    var parser = d3.timeParse("%d/%m/%Y");
    var parsedData = parser(data);

    var tamanhoData = (d3.scaleUtc()
        .domain([
            DATA_INICIAL,
            DATA_FINAL,
        ])
        .clamp(true)
        .range([0, tamanhoScalaExib]));
    if (!parsedData) {
        return tamanhoData(new Date(data));
    }
    else {
        return tamanhoData(parsedData);
    }
}

function setupScales(svg) {
    var grid = svg.append("g")
        .attr("class", "grid")
        .style("height", "1200px")
        .attr("transform", `translate(0, ${MARGIN_TOP})`)
        .call(d3.axisTop(timeScaleAxis())
            .ticks(escalaTickSize)
            .tickFormat(formatoEscala)
            .tickSize(-12000)
        )

        /// O bloco abaixo faz com que a linha de divisão de data mude de cor e fique tracejada (item 11)
        .selectAll("line") // Seleciona os elementos <line> gerados pelo axis
        .attr("stroke-dasharray", "5,5") // Define a linha como tracejada
        .attr("stroke", "#CED4DA")

        .selectAll("text")
        .style("text-anchor", "middle")
        .attr("y", "-15")
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("font-size", 10)
        .attr("dy", "1em")
}

function fixedScales(svg) {
    const anoInicial = DATA_INICIAL.getFullYear();
    const mesInicial = DATA_INICIAL.getMonth(); // Lembre-se que os meses começam em 0 (Janeiro)

    const anoFinal = DATA_FINAL.getFullYear();
    const mesFinal = DATA_FINAL.getMonth();

    // Verifica se o ano é o mesmo e se o mês é o seguinte
    if (anoFinal === anoInicial && mesFinal === mesInicial + 1) {
        var grid = svg.append("g")
            .attr("class", "grid2")
            .style("height", "30px")
            .attr("transform", `translate(0, ${MARGIN_TOP})`)
            .call(d3.axisTop(timeScaleAxisNice())
                .ticks(escalaTickSize)
                .tickFormat(formatoEscala)
            )
    } else if (anoFinal === anoInicial + 1 && mesFinal === 0 && mesInicial === 11) {
        var grid = svg.append("g")
            .attr("class", "grid2")
            .style("height", "30px")
            .attr("transform", `translate(0, ${MARGIN_TOP})`)
            .call(d3.axisTop(timeScaleAxisNice())
                .ticks(escalaTickSize)
                .tickFormat(formatoEscala)
            )
    }
    else {
        var grid = svg.append("g")
            .attr("class", "grid2")
            .style("height", "30px")
            .attr("transform", `translate(0, ${MARGIN_TOP})`)
            .call(d3.axisTop(timeScaleAxis())
                .ticks(escalaTickSize)
                .tickFormat(formatoEscala)
            )
    }
}

function milestone(svg) {
    var mile = svg.append("g")
        .attr("transform", function () {
            var hoje = timeScale(dataHoje);
            return `translate(${hoje})`;
        })
        .attr("class", "milestone")
        .append("line")
        .attr("y2", 9995 + 20)
        .attr("stroke", "#ED1D29")
}

function atualizaAlturaMainTdNomes() {
    const td = document.querySelector('.mainTdNomes') as HTMLTableCellElement;
    alturaRolagem = td.scrollHeight;
    svgRoot.style("height", alturaRolagem + "px");
}

function atualizaLarguraMainTdNomes(tipo, hierarquia, index, level) {
    const queryMainTdNomes = document.querySelector('.mainTdNomes') as HTMLTableCellElement;
    const tds = queryMainTdNomes.querySelectorAll(`[class^="row-modulo-"][class*="-0-"]`) as unknown as HTMLTableCellElement[];

    if (tipo == "expande") {
        var valorAdd = queryMainTdNomes.scrollWidth
        larguraRolagem.push(
            {
                nomeHierarquia: hierarquia,
                tamanho: valorAdd
            }
        );
        const maior = Math.max(...larguraRolagem.map(item => item.tamanho));
        tds.forEach((td) => {
            td.style.width = maior + 'px';
        });
    }
    else if (tipo == "comprime") {
        larguraRolagem = larguraRolagem.filter(item => item.nomeHierarquia !== hierarquia);
        if (larguraRolagem.length === 0) {
            tds.forEach((td) => {
                // td.style.width = "-webkit-fill-available";
                td.style.width = "305px";
            });
        } else {
            const maior = Math.max(...larguraRolagem.map(item => item.tamanho));
            tds.forEach((td) => {
                td.style.width = maior + 'px';
            });
        }
    }
    else if (tipo == "update") {
        if (larguraRolagem.length === 0) {
            tds.forEach((td) => {
                // td.style.width = "-webkit-fill-available";
                td.style.width = "max-content";
            });
        } else {
            const maior = Math.max(...larguraRolagem.map(item => item.tamanho));
            tds.forEach((td) => {
                td.style.width = maior + 'px';
            });
        }
    }
}


function treeModulos2(data, svgHierarquiaNomes, svgHierarquiaEventos) {
    data.forEach((d, index) => {
        var fineNivelHiera = defineNivelHierarquico(d, svgHierarquiaNomes, svgHierarquiaEventos, index)
    })
}

// esssa funçao deve ser chamada quando é passado somente um array de itens
function recursividadeHierarquiaArray(data, svgHierarquiaNomes, svgHierarquiaEventos, index) {
    var dadosRetornar = []
    data.forEach((d) => {
        var recursividadeHierarquiaNull = defineNivelHierarquico(d, svgHierarquiaNomes, svgHierarquiaEventos, index)
        dadosRetornar.push(recursividadeHierarquiaNull)
    })
    return dadosRetornar
}

// esssa funçao deve ser chamada quando é passado somente um unico item
function defineNivelHierarquico(d, svgHierarquiaNomes, svgHierarquiaEventos, index) {
    if (d.level == 0) {
        if (index != 0) {
            var espacamentoNomes = svgHierarquiaNomes.append("table")
                .attr("class", "row-modulo-espacamentoNomes")
                .style("height", "5px")

            var espacamentoEventos = svgHierarquiaEventos.append("table")
                .attr("class", "row-modulo-espacamentoEventos")
                .style("height", "5px")
        }
        var barrasEvento = hierarquiaPrimeiroNivel(d, svgHierarquiaNomes, svgHierarquiaEventos, index)
    }
    else if (d.level !== 0 && d.dados) {
        if (d.nome == "null" || d.nome == null) {
            var hierarquiaNull = recursividadeHierarquiaArray(d.dados, svgHierarquiaNomes, svgHierarquiaEventos, index)
            return hierarquiaNull
        }
        else {
            var hierarquiaNotNull = hierarquiaPrimeiroNivel(d, svgHierarquiaNomes, svgHierarquiaEventos, index)
            return hierarquiaNotNull
        }
    }
    else if (d) {
        var eventoLinhaHierarquia = hierarquiaEvento(d.levelValues, svgHierarquiaNomes, svgHierarquiaEventos, index)
        return eventoLinhaHierarquia[0]
    }
}

// criar uma variavel ou array de listaMarcosEvento

function hierarquiaPrimeiroNivel(data, svgHierarquiaNomes, svgHierarquiaEventos, index) {
    // adiciona a estrutura inicial da parte de eventos (direita)

    var tableModulosHierarquiaEventos = svgHierarquiaEventos.append("table")
        .attr("class", "row-modulo-" + index + "-" + data.level + "-" + data.nome)
        .style("height", "20px")

        //! adiciona as linhas de cores alternadas no primeiro nivel de hierarquia
        // .style("background-color", function () {
        //     return corLinha[index % 2]
        // })

        .style("display", function () {
            if (data.level != 0) {
                return "none"
            }
        })

    var rowEventos = tableModulosHierarquiaEventos.append("tr")
        .attr("class", "tr-modulo-" + index + "-" + data.level + "-" + data.nome)
        .classed("showLinhaAlternada", function(){
            if(data.level == 0){
                return true
            }
        })
        .style("display", "flex")
        .style("height", "25px")
        .style("width", tamanhoScalaExib + "px")

    // fim da adição da estrutura inicial da parte de eventos (direita)

    // adiciona a estrutura da primeira hierarquia(esquerda), juntamente com os botoes e nomes
    var tableModulosHierarquiaNomes = svgHierarquiaNomes.append("table")
        .attr("class", "row-modulo-" + index + "-" + data.level + "-" + data.nome)
        .style("width", "305px")
        .style("height", "20px")
        .style("background-color", "#" + Object.values(corPrimaria)[index % Object.keys(corPrimaria).length])
        .style("padding-left", function () {
            if (data.level != 0) {
                return "15px"
            }
            else {
                return "0px"
            }
        })
        .style("display", function () {
            if (data.level != 0) {
                return "none"
            }
        })

    var rowHierarquia = tableModulosHierarquiaNomes.append("tr")
        .style("display", "flex")
        .style("height", "20px")
        .style("width", "290px")
        .style("margin-bottom", "5px")
        .style("margin-left", function () {
            if (data.level != 0) {
                return "30px"
            }
        })

    var buttonPlus = rowHierarquia.append("button")
        .attr("class", "iconPlus-div")
        .style("padding-left", "0px")
        .style("width", "36px")
        .style("background-color", "transparent")
        .style("border", "none")
        .on("click", function () {
            const td = document.querySelector('.mainTdNomes') as HTMLTableCellElement;
            var larguraRolagem = td.scrollWidth;

            exibir.push("row-modulo-" + index + "-" + data.level + "-" + data.nome)

            var eventoHide = rowHierarquia.select(".iconPlus-div")
            if (eventoHide) {
                eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
            }
            var eventoShow = rowHierarquia.select(".iconMinus-div")
            if (eventoShow) {
                eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
            }

            try {
                var alteraLinhaEvento = tableModulosHierarquiaNomes.selectAll(`:scope > [class^="row-linhaEvento-${index}"]`);

                // Altera o estilo apenas dos filhos diretos
                alteraLinhaEvento.style("display", function () {
                    return d3.select(this).style("display") === "none" ? "contents" : "none";
                });
            } catch (error) {
            }

            try {
                var segundaHierarquia = tableModulosHierarquiaNomes.selectAll(`:scope > [class^="row-modulo-${index}"]`);
                if (segundaHierarquia) {
                    segundaHierarquia.style("display", segundaHierarquia.style("display") === "none" ? "contents" : "none");
                }
            } catch (error) {
            }
            try {
                var segundaHierarquia2 = tableModulosHierarquiaNomes.selectAll('[class^="ocultar"]')
                if (segundaHierarquia2) {
                    segundaHierarquia2.style("display", segundaHierarquia2.style("display") === "none" ? "contents" : "none");
                }

                var terceiraHierarquia = tableModulosHierarquiaNomes.selectAll(`[class^="row-linhaEvento-${index}"]`)
                if (terceiraHierarquia) {
                    terceiraHierarquia.style("display", terceiraHierarquia.style("display") === "none" ? "contents" : "none");
                }
            } catch (error) {
            }

            // altera a propriedade de exibição na parte de eventos
            try {
                var eventoDiv = rowEventos.select(".evento-div")
                if (eventoDiv) {
                    eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
                }
            } catch (error) {
            }

            try {
                var eventoDiv2 = rowEventos.select(".evento-div2")
                if (eventoDiv2) {
                    eventoDiv2.style("display", eventoDiv2.style("display") === "none" ? "block" : "none");
                }
            } catch (error) {
            }

            try {
                var alteraLinhaEvento = tableModulosHierarquiaEventos.selectAll(`:scope > [class^="row-linhaEvento-${index}"]`);
                // Altera o estilo apenas dos filhos diretos
                alteraLinhaEvento.style("display", function () {
                    return d3.select(this).style("display") === "none" ? "contents" : "none";
                });


                // var alternadoLinhaEvento = alteraLinhaEvento.selectAll(`:scope > [class^="linha-evento"]`);
                var alternadoLinhaEvento = alteraLinhaEvento.selectAll('.linha-evento');
                alternadoLinhaEvento
                    .classed("showLinhaAlternada", true)
            } catch (error) {
            }

            try {
                var segundaHierarquiaEventos = tableModulosHierarquiaEventos.selectAll(`[class^="row-modulo-${index}"]`)
                if (segundaHierarquiaEventos) {
                    segundaHierarquiaEventos.style("display", segundaHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                }

            } catch (error) {
            }

            try {
                var segundaHierarquiaEventos2 = tableModulosHierarquiaEventos.selectAll(`[class^="tr-modulo-${index}"]`)
                if (segundaHierarquiaEventos2) {
                    segundaHierarquiaEventos2.classed("showLinhaAlternada", true)
                }

            } catch (error) {
            }

            //! verificar essa classe ocultar
            try {
                var segundaHierarquia2Eventos = tableModulosHierarquiaEventos.selectAll('[class^="ocultar"]')
                if (segundaHierarquia2Eventos) {
                    segundaHierarquia2Eventos.style("display", segundaHierarquia2Eventos.style("display") === "none" ? "contents" : "none");
                }
                var terceiraHierarquiaEventos = tableModulosHierarquiaEventos.selectAll(`[class^="row-linhaEvento-${index}"]`)
                if (terceiraHierarquiaEventos) {
                    terceiraHierarquiaEventos.style("display", terceiraHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                }
            } catch (error) {
            }

            atualizaAlturaMainTdNomes()
            atualizaLarguraMainTdNomes("expande", data.nome, index, data.level)
            alternaCores()
        })
        .append("svg")
        .attr("viewBox", [0, 0, 590, 670])
        .attr("height", 11)
        .attr("width", 25)
        .append("path")
        .attr("d", iconsBase.arrow_down)
        .style("fill", "white")

    var buttonMinus = rowHierarquia.append("button")
        .style("display", "none")
        .style("padding-left", "0px")
        .style("width", "36px")
        .style("background-color", "transparent")
        .style("border", "none")
        .attr("class", "iconMinus-div")
        .on("click", function () {
            exibir = exibir.filter(elemento => elemento !== "row-modulo-" + index + "-" + data.level + "-" + data.nome);
            // exibir = exibir.filter(elemento => elemento !== "row-modulo-" + data.level + "-" + index + "-" + data.nome);

            atualizaLarguraMainTdNomes("comprime", data.nome, index, data.level)

            var eventoHide = rowHierarquia.select(".iconPlus-div")
            if (eventoHide) {
                eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
            }
            var eventoShow = rowHierarquia.select(".iconMinus-div")
            if (eventoShow) {
                eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
            }

            try {
                var alteraLinhaEvento = tableModulosHierarquiaNomes.selectAll(`:scope > [class^="row-linhaEvento-${index}"]`);
                // Altera o estilo apenas dos filhos diretos
                alteraLinhaEvento.style("display", function () {
                    return d3.select(this).style("display") === "none" ? "contents" : "none";
                });
            } catch (error) {
            }

            try {
                // var segundaHierarquia = tableModulosHierarquiaNomes.selectAll(`[class^="row-modulo-${index}"]`)
                var segundaHierarquia = tableModulosHierarquiaNomes.selectAll(`:scope > [class^="row-modulo-${index}"]`);
                if (segundaHierarquia) {
                    segundaHierarquia.style("display", segundaHierarquia.style("display") === "none" ? "contents" : "none");
                }

            } catch (error) {
            }

            try {
                var segundaHierarquia2 = tableModulosHierarquiaNomes.selectAll('[class^="ocultar"]')
                if (segundaHierarquia2) {
                    segundaHierarquia2.style("display", segundaHierarquia2.style("display") === "none" ? "contents" : "none");
                }

                var terceiraHierarquia = tableModulosHierarquiaNomes.selectAll(`[class^="row-linhaEvento-${index}"]`)
                // var terceiraHierarquia = tableModulosHierarquiaNomes.selectAll('[class^="row-linhaEvento-"]')
                if (terceiraHierarquia) {
                    terceiraHierarquia.style("display", terceiraHierarquia.style("display") === "none" ? "contents" : "none");
                }
            } catch (error) {
            }

            // altera a propriedade de exibição na parte de eventos
            try {
                var eventoDiv = rowEventos.select(".evento-div")
                if (eventoDiv) {
                    eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
                }
            } catch (error) {
            }

            try {
                var eventoDiv2 = rowEventos.select(".evento-div2")
                if (eventoDiv2) {
                    eventoDiv2.style("display", eventoDiv2.style("display") === "none" ? "block" : "none");
                }
            } catch (error) {
            }

            try {
                var alteraLinhaEvento = tableModulosHierarquiaEventos.selectAll(`:scope > [class^="row-linhaEvento-${index}"]`);
                // Altera o estilo apenas dos filhos diretos
                alteraLinhaEvento.style("display", function () {
                    return d3.select(this).style("display") === "none" ? "contents" : "none";
                });

                var alternadoLinhaEvento = alteraLinhaEvento.selectAll('.linha-evento');
                alternadoLinhaEvento
                    .classed("showLinhaAlternada", false)
            } catch (error) {
            }

            try {
                var segundaHierarquiaEventos = tableModulosHierarquiaEventos.selectAll(`[class^="row-modulo-${index}"]`)
                if (segundaHierarquiaEventos) {
                    segundaHierarquiaEventos.style("display", segundaHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                    segundaHierarquiaEventos.classed("showLinhaAlternada", false)
                }
            } catch (error) {
            }

            try {
                var segundaHierarquiaEventos2 = tableModulosHierarquiaEventos.selectAll(`[class^="row-modulo-${index}"]`)
                if (segundaHierarquiaEventos2) {
                    segundaHierarquiaEventos2.classed("showLinhaAlternada", false)
                }
            } catch (error) {
            }

            try {
                var segundaHierarquia2Eventos = tableModulosHierarquiaEventos.selectAll('[class^="ocultar"]')
                if (segundaHierarquia2Eventos) {
                    segundaHierarquia2Eventos.style("display", segundaHierarquia2Eventos.style("display") === "none" ? "contents" : "none");
                }

                var terceiraHierarquiaEventos = tableModulosHierarquiaEventos.selectAll(`[class^="row-linhaEvento-${index}"]`)
                if (terceiraHierarquiaEventos) {
                    terceiraHierarquiaEventos.style("display", terceiraHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                }
            } catch (error) {
            }
            atualizaAlturaMainTdNomes()
            alternaCores()
        })
        .append("svg")
        .attr("viewBox", [0, 0, 590, 670])
        .attr("height", 11)
        .attr("width", 25)
        .append("path")
        .attr("d", iconsBase.arrow_right)
        .style("fill", "white")

    rowHierarquia.append("div")
        .style("padding-left", "5px")
        .attr("class", "text-div")
        .append("text")
        .attr("x", 10)
        .attr("height", 20)
        .attr("font-size", "12px")
        .text(function () {
            if (data.level == 0) {
                return data.nome.toUpperCase()
            }
            else {
                return data.nome
            }
        })
        .style("color", "#FFFFFF")
        .style("font-weight", "bold")

    var jaNemSei = recursividadeHierarquiaArray(data.dados, tableModulosHierarquiaNomes, tableModulosHierarquiaEventos, index)
    // console.log("jaNemSei: " + JSON.stringify(jaNemSei))

    //o bloco abaixo eh usado para transformar o array, foi verificado que em alguns casos ele vinha como Array de arrays [[]] com isso os marcos nao sao exibidos
    const arrayTransformado = Array.isArray(jaNemSei) && jaNemSei.length > 0 && Array.isArray(jaNemSei[0])
        ? jaNemSei.flat() : jaNemSei;

    eventoColapsado(arrayTransformado, rowEventos)
    return arrayTransformado
}


function hierarquiaEvento(data, svgHierarquiaNomes, svgHierarquiaEventos, index) {
    var dadosEventoSubTipo = []
    var tipoEventoBar = []

    var tamanhoBarraEvento = timeScale(data[0].dataInicio);
    var dataInicio = timeScale(data[0].dataInicio) + tickEspacamento;

    var posicaoTextoEvento;
    var dataFimTeste = "null";
    if (data[0].dataFim != "null" && data[0].dataFim != null) {
        dataFimTeste = data[0].dataFim
    }
    if (dataFimTeste != "null") {
        if (new Date(DATA_FINAL).getTime() < new Date(data[0].dataFim).getTime()) {
            data[0].dataFim = DATA_FINAL
        }
        var dataFim = timeScale(data[0].dataFim)
        tamanhoBarraEvento = dataFim - dataInicio
        posicaoTextoEvento = dataInicio
    }
    else {
        posicaoTextoEvento = dataInicio
        tamanhoBarraEvento = 0
    }
    if (data[0].subTipo) {
        if (data[0].subTipo == "null") {
            dadosEventoSubTipo.push({
                [data[0].evento]: [
                    {
                        posInin: dataInicio,
                        width: tamanhoBarraEvento,
                        group: false,
                        cor: data[0].cor,
                        rot: data[0].rot
                    },
                ],
            });
        } else {
            const existingSubTipo = dadosEventoSubTipo.find(item => Object.keys(item)[0] === data[0].subTipo);
            if (!existingSubTipo) {
                dadosEventoSubTipo.push({
                    [data[0].subTipo]: [
                        {
                            dataInicio: data[0].dataInicio,
                            dataFim: data[0].dataFim,
                            evento: data[0].evento,
                            posInin: dataInicio,
                            width: tamanhoBarraEvento,
                            cor: data[0].cor,
                            group: true
                        },
                    ],
                });
            } else {
                existingSubTipo[data[0].subTipo].push({
                    dataInicio: data[0].dataInicio,
                    dataFim: data[0].dataFim,
                    evento: data[0].evento,
                    posInin: dataInicio,
                    width: tamanhoBarraEvento,
                    cor: data[0].cor,
                    group: true
                });
            }
        }
    } else {
        //terceiro nivel dos eventos das hierarquias
        var tableModulos3HierarquiaEventos = svgHierarquiaEventos.append("table")
            .attr("class", "row-linhaEvento-" + index + "-" + data[0].evento)
            .style("display", "none")
        var row3HierarquiaEventos = tableModulos3HierarquiaEventos.append("tr")
            .attr("class", "linha-evento")
            .style("background-color", function () {
                return corLinha[index % 2]
            })
            .style("display", "flex")
            .style("width", tamanhoScalaExib + "px")
            .style("height", "26px")
            .style("align-items", "center")

        //terceiro nivel dos nomes das hierarquias
        var tableModulos3HierarquiaNomes = svgHierarquiaNomes.append("table")
            .attr("class", "row-linhaEvento-" + index + "-" + data[0].evento)
            .style("display", "none")

        var row3HierarquiaNomes = tableModulos3HierarquiaNomes.append("tr")
            .style("display", "flex")
            .style("padding-left", "30px")
            .style("height", "21px")
            .style("align-items", "center")
            .style("margin-bottom", "5px")
            .style("width", "-webkit-fill-available")

        var testeRow3HierarquiaNomes = row3HierarquiaNomes.append("tr")
            .attr("class", "row-modulo-segundo")
            .text(data[0].evento)
            // .style("padding-left", "25px")
            .style("padding-left", "30px")
            .style("color", "#FFFFFF")
            // .style("width", "-webkit-fill-available")
            .style("width", "max-content")

        var eventoBarDiv = row3HierarquiaEventos.append("svg")
            .attr("transform", function (d, i) {
                if (dataFimTeste == "null") {
                    return `translate(${dataInicio}, 0)`;
                } else {
                    return `translate(${dataInicio + tickEspacamento}, 0)`;
                }
            })
            .attr("height", 20)
            .attr("width", function () {
                if (tamanhoBarraEvento < 0) {
                }
                if (dataFimTeste !== "null") {
                    tipoEventoBar.push({
                        "posInin": dataInicio,
                        "width": tamanhoBarraEvento,
                        "cor": data[0].cor,
                        "dataInicio": data[0].dataInicio,
                        "dataFim": data[0].dataFim,
                        "evento": data[0].evento,
                    })
                    return tamanhoBarraEvento
                } else {
                    tipoEventoBar.push({
                        "posInin": dataInicio,
                        "width": 0,
                        "cor": data[0].cor,
                        "dataInicio": data[0].dataInicio,
                        "evento": data[0].evento,
                        "icone": data[0].icon,
                    })
                    return tamanhoBarraEvento + 20
                }
            })
            .attr("class", "eventoBarDiv")
            .style("display", "flex")
            .style("position", "absolute")

        if (dataFimTeste == "null") {
            var iconeDiv = eventoBarDiv
                .style("left", "-11px")
                .attr("viewBox", function () {
                    if (data[0].icon) {
                        return iconsBase.vb[data[0].icon]
                    } else {
                        return "0, 0, 448, 512"
                    }
                })
                .attr("width", 20)
                .append("path")
                .attr("fill", function () {
                    if (data[0].cor) {
                        return "#" + data[0].cor
                    } else {
                        return "rgb(0, 0153, 128)"
                    }
                }
                )
                .attr("d", function () {
                    if (data[0].icon) {
                        return iconsBase.icons[data[0].icon]
                    } else {
                        return iconsBase.base
                    }
                }
                )
        } else {
            eventoBarDiv
                .style("border-radius", function (f) {
                    var soma = dataInicio + tamanhoBarraEvento
                    if (soma >= posDataFinal) {
                        return "10px 0 0 10px"
                    } else {
                        return "10px"
                    }
                })
            var iconeDiv = eventoBarDiv.append("rect")
                .attr("class", "podeRemover")
                .attr("fill", function () {
                    if (data[0].cor) {
                        return "#" + data[0].cor
                    } else {
                        return "rgb(0, 0153, 128)"
                    }
                }
                )
                .style("height", "21.25px")
                .attr("width", function (d) {
                    if (dataFimTeste != "null") {
                        if (new Date(DATA_FINAL).getTime() < new Date(data[0].dataFim).getTime()) {
                            data[0].dataFim = DATA_FINAL
                        }
                        var dataFim = timeScale(data[0].dataFim)
                        tamanhoBarraEvento = dataFim - dataInicio
                        return tamanhoBarraEvento
                    } else {
                        return tamanhoBarraEvento + 20
                    }
                })
        }
        eventoBarDiv
            .on("mouseover", function (event, d) {
                var posX = event.pageX;
                var posY = event.pageY;

                // Obter a largura e altura do tooltip
                var tooltipWidth = tooltip.node().offsetWidth;
                var tooltipHeight = tooltip.node().offsetHeight;

                // Ajustar a posição do tooltip se estiver perto da borda direita ou inferior
                if (posX + tooltipWidth + 10 > window.innerWidth) {
                    posX = window.innerWidth - tooltipWidth - 10; // Ajusta para a borda direita
                }
                if (posY + tooltipHeight + 10 > window.innerHeight) {
                    posY = window.innerHeight - tooltipHeight - 10; // Ajusta para a borda inferior
                }

                tooltip
                    .style("visibility", "visible")
                    .style("left", (posX + 10) + "px")
                    .style("top", (posY + 10) + "px")
                    .html(`
                                Data inicio: ${formatDate(data[0].dataInicio)}<BR>
                             ${data[0].dataFim ? `Data Fim: ${formatDate(data[0].dataFim)}<BR>` : ''}
                             Evento: ${data[0].evento}`
                    );
            })

            .on("mouseout", function () {
                tooltip.style("visibility", "hidden")
            })

        var dadosEventoDiv = row3HierarquiaEventos.append("svg")
            .attr("transform", function () {
                if (tamanhoBarraEvento == 0) {
                    return `translate(${posicaoTextoEvento + 10}, 0)`;
                }
                return `translate(${posicaoTextoEvento + tamanhoBarraEvento}, 0)`;
            })
            .attr("height", 20)
            .attr("class", "evento-div-nome")
            .style("display", "flex")
            .style("position", "absolute")
            .style("width", function (f) {
                var soma = dataInicio + tamanhoBarraEvento
                if (soma >= posDataFinal) {
                    return "0px"
                }
                if (soma + 300 >= posDataFinal) {
                    return posDataFinal - soma + "px"
                }
                else if (dataInicio + 300 >= posDataFinal) {
                    return posDataFinal - posicaoTextoEvento + "px"
                }
            })
            .append("g")
            .append("text")
            .attr("y", 15)
            .attr("font-size", 12)
            .text(function () {
                if ("rot" in data[0]) {
                    return data[0].rot
                } else {
                    return data[0].evento
                }
            });
    }
    return tipoEventoBar
}

// Exibe/oculta os marcos e barras ao colapsar/expandir uma hierarquia
function eventoColapsado(jaNemSei, rowEventos) {
    var barraGeralTeste = rowEventos.append("g")
        .attr("transform", `translate(0,0)`)
        .attr("class", "evento-div2")

    jaNemSei.forEach((item, i) => {

        var barraGeralTeste2 = barraGeralTeste.append("svg")
            .style("display", "flex")
            .style("position", "absolute")
            .attr("transform", function (f) {
                if (item.width != 0) {
                    return `translate(${item.posInin},0)`
                } else {
                    return `translate(${item.posInin},0)`
                }
            })
            .attr("height", 20)
            .attr("width", function (f) {
                if (item.width != 0) {
                    return item.width
                } else {
                    return "30px"
                }
            })
        if (item.width != 0) {
            barraGeralTeste2.style("border-radius", function (f) {
                var soma = item.posInin + item.width
                if (soma >= posDataFinal) {
                    return "10px 0 0 10px"
                } else {
                    return "10px"
                }
            })
            barraGeralTeste2.append("rect")
                .attr("fill", function (f) {
                    if (item.cor) {
                        return "#" + item.cor
                    } else {
                        return "rgb(200, 153, 128)"
                    }
                })
                .attr("width", item.width)
                .attr("height", 20)
        } else {
            barraGeralTeste2.style("left", "-11px")
            barraGeralTeste2.append("svg")
                .attr("transform", `translate(${item.posInin},0)`)
                .attr("height", 20)
                .attr("width", 20)
                .attr("viewBox", function () {
                    if (item.icone) {
                        return iconsBase.vb[item.icone]
                    } else {
                        return "0, 0, 448, 512"
                    }
                })
                .attr("height", 20)
                .attr("width", 20)
                .append("path")
                .attr("fill", function (f) {
                    if (item.cor) {
                        return "#" + item.cor
                    } else {
                        return "rgb(200, 153, 128)"
                    }
                })
                .attr("d", function () {
                    if (item.icone) {
                        return iconsBase.icons[item.icone]
                    } else {
                        return iconsBase.base
                    }
                }
                )
        }
        barraGeralTeste2.on("mouseover", function (event, d) {
            var posX = event.pageX;
            var posY = event.pageY;

            // Obter a largura e altura do tooltip
            var tooltipWidth = tooltip.node().offsetWidth;
            var tooltipHeight = tooltip.node().offsetHeight;

            // Ajustar a posição do tooltip se estiver perto da borda direita ou inferior
            if (posX + tooltipWidth + 10 > window.innerWidth) {
                posX = window.innerWidth - tooltipWidth - 10; // Ajusta para a borda direita
            }
            if (posY + tooltipHeight + 10 > window.innerHeight) {
                posY = window.innerHeight - tooltipHeight - 10; // Ajusta para a borda inferior
            }
            tooltip
                .style("visibility", "visible")
                .style("left", (posX + 10) + "px")
                .style("top", (posY + 10) + "px")
                .html(`
                            Data inicio: ${formatDate(item.dataInicio)}<BR>
                         ${item.dataFim ? `Data Fim: ${formatDate(item.dataFim)}<BR>` : ''}
                         Evento: ${item.evento}`
                );
        })
            .on("mouseout", function () {
                tooltip.style("visibility", "hidden")
            })
    })
}


function alternaCores() {
    console.log("alternaCores()")
    // var cont = index + 1
    var cont = 0
    // var alternadoLinhaEvento = svgBase.selectAll('.linha-evento');
    var alternadoLinhaEvento = svgBase.selectAll('.showLinhaAlternada');
    alternadoLinhaEvento.style("background-color", function (d, i) {
        var corExib = corLinha[cont % 2]
        console.log("cont: " + cont)
        cont++
        return corExib
    })
}

/*
consoles logs:
console.log("treeModulos2: " + svgHierarquiaNomes.node().outerHTML) //*exibe o codigo html do elemento
console.log("inicio hierarquiaPrimeiroNivel data: " + JSON.stringify(data)) //*Json.stringfy transforma um object em string na hora de exibir
*/