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
const MARGIN_LEFT = 300;
const MARGIN_RIGHT = 20;
const MARGIN_TOP = 20;
const MARGIN_BOTTOM = 20;
const MARGIN_SCALE_LEFT = 15;
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
    // .style("top", "0px")
    // .style("left", "0px")
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
        // tamanhoScalaExib = CHART_WIDTH * 2.2

        const matrixDataView: DataViewMatrix = dataView.matrix;
        // console.log("matrixDataView: " + JSON.stringify(matrixDataView));

        const categorias = matrixDataView.rows.root.children;
        // console.log("dados iniciais dataView: " + JSON.stringify(categorias));
        const estrutura = matrixDataView.rows.levels;
        const dadoEstrutura = estrutura[estrutura.length - 1].sources;
        const tipoDeEscala = options.dataViews[0].metadata.columns;

        estruturaEscala(tipoDeEscala)
        // console.log("estruturaEscala tipoEscalaGrafico: " + tipoEscalaGrafico);


        estruturaHierarquia(dadoEstrutura, estruturaDados) //retorna quais campos no visual foram preenchidos
        dadosEstruturais = estruturaDados;

        hierarquiaTree(categorias, 0, dataMap)
        // console.log("DATA_INICIAL antes: " + DATA_INICIAL);
        // console.log("DATA_FINAL antes: " + DATA_FINAL);
        preencheDataInicio(dataMap)
        preencheDataFim(dataMap)
        // console.log("DATA_INICIAL depois: " + DATA_INICIAL);
        // console.log("DATA_FINAL depois: " + DATA_FINAL);

        defineEscala()
        // console.log("tamanhoScalaExib: " + tamanhoScalaExib);

        agrupamentoHierarquia(dataMap, dataAgrupado)

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

        var tamanhoExibicaoHeight = CHART_HEIGHT - MARGIN_TOP - MARGIN_TOP

        nomesEventoTdHTML = mainTableTr.append("td")
            .attr("class", "mainTdNomes")
            .style("width", "600px")
            .style("background-color", "white")
            .style("max-width", "325px")
            .style("height", "-webkit-fill-available")
            .style("margin-top", "21px")
            // .style("padding-bottom", MARGIN_TOP + "px")
            .style("vertical-align", "top")
            .style("position", "fixed")
            .style("overflow-x", "overlay")
            .style("overflow-y", "auto")
            .style("border", "1px solid")
            .style("padding-right", "25px")


        // console.log("tamanhoScalaExib mainTdEventos: " + tamanhoScalaExib)
        dadosEventoTdHTML = mainTableTr.append("td")
            .attr("class", "mainTdEventos")
            // .style("height", tamanhoExibicaoHeight + "px")
            .style("width", tamanhoScalaExib + "px")
            .style("height", "-webkit-fill-available")
            .style("background-color", "white")
            .style("margin-top", "21px")
            .style("vertical-align", "top")
            // .style("overflow-y", "hidden")
            .style("overflow-y", "auto")
            .style("position", "fixed")
            // .style("max-width", "fit-content")
            .style("max-width", "-webkit-fill-available")
            .style("border", "1px solid")
            .style("left", "310px")

        var testeRegulagemAltura = dadosEventoTdHTML.append("div")
            .attr("class", "divMainTdEventos")
            .style("max-width", CHART_WIDTH - 300 + "px")

        //necessario para criar as escalas

        // console.log("tamanhoScalaExib main-svg: " + tamanhoScalaExib)
        svgRoot = testeRegulagemAltura
            .append("svg")
            .attr("class", "main-svg")
            // .style("width", tamanhoScalaExib + MARGIN_RIGHT * 2 + "px")
            .style("width", tamanhoScalaExib + "px")
            .style("height", "-webkit-fill-available")
            // .style("height", "10000px")
            .style("position", "absolute")
            .style("top", "-40px")
            .style("left", "0px")
            // .style("z-index", "-1")
            .style("z-index", "0")


        dadosEventoScaleTdHTML = mainTableTr.append("td")
            .attr("class", "mainTdScale")
            .style("height", "30px")
            // .style("width", tamanhoScalaExib + "px")
            // .style("max-width", "fit-content")
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
            // .style("display", "flex")
            .style("max-width", CHART_WIDTH - 300 + "px")

        // var ocultaFixedScale = testeRegulagemScala
        //     .append("td")
        //     .attr("class", "fixed")
        //     // .style("width", tamanhoScalaExib + MARGIN_RIGHT * 2 + "px")
        //     .style("width", "302px")
        //     .style("height", "30px")
        //     // .style("margin-left", "302px")
        //     // .style("padding-right", "50px")
        //     .style("top", "0px")
        //     .style("left", "0px")

        //necessario para criar as escalas
        // console.log("tamanhoScalaExib fixed-scale: " + tamanhoScalaExib)
        fixedScale = testeRegulagemScala
            .append("svg")
            .attr("class", "fixed-scale")
            // .style("width", tamanhoScalaExib + MARGIN_RIGHT * 2 + "px")
            // .style("width", tamanhoScalaExib + MARGIN_RIGHT * 2 + "px")
            .style("width", tamanhoScalaExib + "px")
            .style("height", "30px")
            .style("margin-left", "302px")
            .style("padding-right", "50px")
            .style("top", "0px")
            .style("left", "0px")


        // console.log("tamanhoScalaExib main-eventos: " + tamanhoScalaExib)
        var dadosEventoHTML = testeRegulagemAltura.append("div")
            .attr("class", "main-eventos")
            // .style("padding-top", MARGIN_TOP * 2 + "px")
            // .style("padding-top", "3px")
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

        // console.log("tamanhoScalaExib: " + tamanhoScalaExib);
        setupScales(svgRoot, tamanhoScalaExib, 600);
        fixedScales(fixedScale, tamanhoScalaExib, 600);
        //verificar se a data hoje esta entre DATA_INICIAL e DATA_FINAL 
        if (dataHoje >= DATA_INICIAL && dataHoje <= DATA_FINAL) {
            milestone(svgRoot);
        }

        // console.log("dataMap: " + JSON.stringify(dataMap));
        treeModulos(dataMap, nomesEventoTdHTML, dadosEventoHTML);
        dadosExpandidos(nomesEventoTdHTML, dadosEventoHTML) // mantem as linhas em exibição apos atualizar o visual

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


        // // Adiciona um listener de evento para o evento de rolagem na segunda tabela
        // mainTdNomes.addEventListener('scroll', function () {
        //     // Define a posição de rolagem da primeira tabela para a posição de rolagem da segunda
        //     mainTdEventos.scrollLeft = mainTdNomes.scrollLeft;
        // });

        // // Adiciona um listener de evento para o evento de rolagem na segunda tabela
        // mainTdEventos.addEventListener('scroll', function () {
        //     // Define a posição de rolagem da primeira tabela para a posição de rolagem da segunda
        //     mainTdNomes.scrollLeft = mainTdEventos.scrollLeft;
        // });


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
        atualizaLarguraMainTdNomes("comprime", "")
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
        // tickEspacamento = -(tamanhoScalaExib / resultadoTamanhoEscala) / 10

    }
    if (tipoEscalaGrafico == "Mês") {
        resultadoTamanhoEscala = (fim.getFullYear() - inicio.getFullYear()) * 12 + fim.getMonth() - inicio.getMonth();
        if (resultadoTamanhoEscala > 12) {
            tamanhoScalaExib = resultadoTamanhoEscala * (CHART_WIDTH / 12)
        } else {
            tamanhoScalaExib = CHART_WIDTH - 304
        }
        escalaTickSize = d3.utcMonth.every(1)
        // tickEspacamento = -(tamanhoScalaExib / resultadoTamanhoEscala) / 10
    }
    if (tipoEscalaGrafico == "Dia") {
        resultadoTamanhoEscala = Math.floor((fim.getTime() - inicio.getTime()) / (1000 * 3600 * 24));
        // console.log("resultadoTamanhoEscala: " + resultadoTamanhoEscala);

        if (resultadoTamanhoEscala > 12) {
            tamanhoScalaExib = resultadoTamanhoEscala * 80
        } else {
            tamanhoScalaExib = CHART_WIDTH - 304
        }
        // formatoEscala = d3.timeFormat("%d %b %Y")
        formatoEscala = d3.utcFormat("%d %b %Y")
        escalaTickSize = d3.utcDay.every(1)
        // tickEspacamento = 55
    }
}

function dadosExpandidos(svgHierarquiaNomes, svgHierarquiaEventos) {

    exibir.forEach((e) => {

        var categoriaExibirNomes = svgHierarquiaNomes.selectAll('[class^="' + e + '"]')
        if (categoriaExibirNomes.nodes().length > 0) {
            // var eventoDiv = categoriaExibirNomes.select('[class^="evento-div"]')
            // if (eventoDiv) {
            //     eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
            // }
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
            // console.log("else categoriaExibir HTML: " + e + " - " + categoriaExibir.nodes()[0].outerHTML);

            if (segundaHierarquia) {
                if (!categoriaExibirNomes.selectAll('[class^="ocultar"]').empty()) {
                    // console.log("if");
                    // console.log("e: " + e);


                    var segundaHierarquia2 = categoriaExibirNomes.selectAll('[class^="row-modulo2-null"]')
                    if (segundaHierarquia2) {
                        segundaHierarquia2.style("display", segundaHierarquia2.style("display") === "none" ? "contents" : "none");
                    }

                    // console.log("else categoriaExibir HTML: " + e + " - " + categoriaExibir.nodes()[0].outerHTML);
                    var segundaHierarquia2 = categoriaExibirNomes.selectAll('[class^="ocultar"]')
                    // console.log("segundaHierarquia2 HTML: " + e + " - " + segundaHierarquia2.nodes()[0].outerHTML);
                    if (segundaHierarquia2.size() > 0) {
                        segundaHierarquia2.style('display', 'none');
                    }

                    var terceiraHierarquia = categoriaExibirNomes.selectAll('[class^="row-modulo3-"]')
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
                        if (categoriaExibirNomes.nodes()[0].querySelectorAll(`.${e} > [class*="row-modulo3-"]`).length > 0) {
                            var filhos = categoriaExibirNomes.nodes()[0].querySelectorAll(`.${e} > [class*="row-modulo3-"]`);
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

                    var terceiraHierarquiaEvento = categoriaExibirEventos.selectAll('[class^="row-modulo3-"]')
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
                        if (categoriaExibirEventos.nodes()[0].querySelectorAll(`.${e} > [class*="row-modulo3-"]`).length > 0) {
                            var filhosEvento = categoriaExibirEventos.nodes()[0].querySelectorAll(`.${e} > [class*="row-modulo3-"]`);
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

function hierarquiaTree(element, lvl, dataMap) {
    for (var i = 0; i < element.length; i++) {

        if ("children" in element[i]) {
            dataMap.push({
                level: lvl,
                nome: element[i].value,
                qtdSub: element[i].children.length,
                dados: []
            })
            hierarquiaTree(element[i].children, lvl + 1, dataMap[i].dados)
        }
        else if ("levelValues" in element[i]) {
            dataMap.push({
                level: lvl,
                levelValues: []
            })
            hierarquiaTree(element[i].levelValues, lvl + 1, dataMap[i].levelValues)
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
            }
            else {
                return
            }
        }
        else {
            return
        }
    }
}


function preencheDataInicio(jsonData) {
    DATA_INICIAL = new Date("3000-01-01");
    for (let i = 0; i < jsonData.length; i++) {
        let currentObj = jsonData[i];
        for (let j = 0; j < currentObj.dados[0].dados.length; j++) {
            let currentLevel2Obj = currentObj.dados[0].dados[j];
            if (currentLevel2Obj.levelValues[0].dataInicio) {
                let currentDate = new Date(currentLevel2Obj.levelValues[0].dataInicio);
                if (currentDate < DATA_INICIAL) {
                    DATA_INICIAL = currentDate;
                }
            }
        }
    }
    // var nextMonthInicio = DATA_INICIAL.getMonth() + 1;
    var nextMonthInicio = DATA_INICIAL.getMonth();
    var nextYearInicio = DATA_INICIAL.getFullYear();
    if (nextMonthInicio > 11) {
        nextMonthInicio = 0;
        nextYearInicio++;
    }
    const lastDayOfNextMonthInicio = new Date(nextYearInicio, nextMonthInicio + 1, 0).getDate();
    // DATA_INICIAL_SF = new Date(nextYearInicio, nextMonthInicio, lastDayOfNextMonthInicio);
    DATA_INICIAL_SF = new Date(nextYearInicio, nextMonthInicio, 1);
    DATA_INICIAL = DATA_INICIAL_SF
    // console.log("preencheDataFim DATA_INICIAL_SF: " + DATA_INICIAL_SF);
    //timeScaleAxis DATA_INICIAL: Mon Aug 30 2021 00:00:00 GMT-0300 (Horário Padrão de Brasília)
}



function preencheDataFim(jsonData) {
    DATA_FINAL = new Date("1500-01-01");
    // console.log("preencheDataFim jsonData: " + JSON.stringify(jsonData));
    for (let i = 0; i < jsonData.length; i++) {
        let currentObj = jsonData[i];
        // console.log("currentObj.dados[0].length: " + currentObj.dados.length);
        for (let k = 0; k < currentObj.dados.length; k++) {
            for (let j = 0; j < currentObj.dados[k].dados.length; j++) {
                let currentLevel2Obj = currentObj.dados[k].dados[j];
                if (currentLevel2Obj.levelValues[0].dataInicio) {
                    let currentDate = new Date(currentLevel2Obj.levelValues[0].dataInicio);
                    if (currentDate > DATA_FINAL) {
                        DATA_FINAL = currentDate;
                    }
                }
            }
        }
        // console.log("preencheDataFim: " + DATA_FINAL)
    }

    const year = DATA_FINAL.getFullYear();
    const month = DATA_FINAL.getMonth() + 1; // +1 because getMonth() is zero-based
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    const lastDayOfMonthString = `${year}-${month.toString().padStart(2, "0")}-${lastDayOfMonth.toString().padStart(2, "0")}`;
    //faz com que a data final seja o ultimo dia do mes
    DATA_FINAL = new Date(lastDayOfMonthString)
    // console.log("preencheDataFim DATA_FINAL: " + DATA_FINAL);

    var nextMonthFinal = DATA_FINAL.getMonth() + 1;
    var nextYearFinal = DATA_FINAL.getFullYear();
    if (nextMonthFinal > 11) {
        nextMonthFinal = 0;
        nextYearFinal++;
    }
    const lastDayOfNextMonthFinal = new Date(nextYearFinal, nextMonthFinal + 1, 0).getDate();
    // DATA_FINAL_SF = new Date(nextYearFinal, nextMonthFinal, lastDayOfNextMonthFinal);
    DATA_FINAL_SF = new Date(nextYearFinal, nextMonthFinal, 1);
    DATA_FINAL = DATA_FINAL_SF
    // console.log("preencheDataFim DATA_FINAL_SF: " + DATA_FINAL_SF);
    // console.log("lastDayOfMonthString: " + lastDayOfMonthString);
    //timeScaleAxis DATA_FINAL: Fri Jan 30 2026 21:00:00 GMT-0300 (Horário Padrão de Brasília)
}

function timeScaleAxis() {
    var tamanhoData = (d3.scaleUtc()
        .domain([
            DATA_INICIAL,
            DATA_FINAL
        ])
        // .nice()
        .clamp(true)
        .range([0, tamanhoScalaExib])
        // .invert(0.5)
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
        // .invert(0.5)
    );
    return tamanhoData;
}

const xScale = d3.scaleTime()
    .domain([DATA_INICIAL, DATA_FINAL])
    .range([0, tamanhoScalaExib]);


function timeScale(data) {

    var parser = d3.timeParse("%d/%m/%Y");
    var parsedData = parser(data);

    // var tamanhoData = (d3.scaleTime()
    var tamanhoData = (d3.scaleUtc()
        .domain([
            DATA_INICIAL,
            DATA_FINAL,
        ])
        // .nice()
        .clamp(true)
        // .range([0, CHART_WIDTH - MARGIN_LEFT - MARGIN_RIGHT]));
        .range([0, tamanhoScalaExib]));
    // console.log("timeScale(data) tamanhoData(DATA_INICIAL): " + tamanhoData(DATA_INICIAL));
    if (!parsedData) {
        return tamanhoData(new Date(data));
    }
    else {
        return tamanhoData(parsedData);
    }
}
/*
if mesDataInicio = mesDataFim{
usa nice
}
*/

function setupScales(svg, width, height) {
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

function fixedScales(svg, width, height) {

    const anoInicial = DATA_INICIAL.getFullYear();
    const mesInicial = DATA_INICIAL.getMonth(); // Lembre-se que os meses começam em 0 (Janeiro)
    
    const anoFinal = DATA_FINAL.getFullYear();
    const mesFinal = DATA_FINAL.getMonth();

    // Verifica se o ano é o mesmo e se o mês é o seguinte
    if (anoFinal === anoInicial && mesFinal === mesInicial + 1) {
        // console.log("anoFinal === anoInicial && mesFinal === mesInicial + 1")
        var grid = svg.append("g")
        .attr("class", "grid2")
        .style("height", "30px")
        .attr("transform", `translate(0, ${MARGIN_TOP})`)
        .call(d3.axisTop(timeScaleAxisNice())
            .ticks(escalaTickSize)
            .tickFormat(formatoEscala) 
            // .tickSize(-12000)
        )
    } else if (anoFinal === anoInicial + 1 && mesFinal === 0 && mesInicial === 11) {
        // console.log("anoFinal === anoInicial + 1 && mesFinal === 0 && mesInicial === 11")
        var grid = svg.append("g")
        .attr("class", "grid2")
        .style("height", "30px")
        .attr("transform", `translate(0, ${MARGIN_TOP})`)
        .call(d3.axisTop(timeScaleAxisNice())
            .ticks(escalaTickSize)
            .tickFormat(formatoEscala)
            // .tickSize(-12000)
        )
    }
    else{
        // console.log("else")
    var grid = svg.append("g")
        .attr("class", "grid2")
        .style("height", "30px")
        .attr("transform", `translate(0, ${MARGIN_TOP})`)
        .call(d3.axisTop(timeScaleAxis())
            .ticks(escalaTickSize)
            .tickFormat(formatoEscala)
            // .tickSize(-12000)
        )}



    // var grid = svg.append("g")
    //     .attr("class", "grid2")
    //     .style("height", "30px")
    //     .attr("transform", `translate(0, ${MARGIN_TOP})`)
    //     .call(d3.axisTop(timeScaleAxis())
    //         .ticks(escalaTickSize)
    //         .tickFormat(formatoEscala)
    //         // .tickSize(-12000)
    //     )
}

function milestone(svg) {
    var mile = svg.append("g")
        .attr("transform", function () {
            // var hoje = timeScale(d3.timeMinute(new Date()));
            var hoje = timeScale(dataHoje);
            // var hoje = timeScale(new Date(data));
            // return `translate(${hoje})`;
            return `translate(${hoje})`;
        })
        .attr("class", "milestone")
        .append("line")
        .attr("y2", 9995 + 20)
        .attr("stroke", "#ED1D29")
}

//rgb(204,0,0)
//TODO necessario fazer refatoração para que seja utilizado recursividade, tornando possivel o uso de N hierarquias
function treeModulos(data, svgHierarquiaNomes, svgHierarquiaEventos) {
    // console.log("treeModulos data: " + JSON.stringify(data));

    data.forEach((d, index) => {
        var tipoCategoriaBar = []
        var corBackgroundSegundoNivel = index

        //rgb(204,0,0) comentario abaixo é para efetuar o item 14 adicionar uma linha de divisão entre as hierarquias
        /*
        console.log("d.index: " + d.nome + " - " + index)
        if (index != 0) {
            var espacamentoNomes = svgHierarquiaNomes.append("table")
                .attr("class", "row-modulo-espacamentoNomes")
                .style("height", "10px")

            var espacamentoEventos = svgHierarquiaEventos.append("table")
                .attr("class", "row-modulo-espacamentoEventos")
                .style("height", "10px")
        }*/

        // adiciona a estrutura inicial da parte de eventos (direita)
        var tableModulosHierarquiaEventos = svgHierarquiaEventos.append("table")
            // .attr("class", "row-modulo-" + d.nome)
            .attr("class", "row-modulo-nome-" + d.nome)
            .style("height", "20px")
        // .style("width", CHART_WIDTH +"px")

        var rowEventos = tableModulosHierarquiaEventos.append("tr")
            .style("display", "flex")
            .style("height", "20px")
            .style("width", tamanhoScalaExib + "px")
            .style("background-color", function () {
                // console.log("i: " +index + " - " + corLinha[index % 2])
                return corLinha[index % 2]
            })
            // .style("width", CHART_WIDTH + "px")
            .style("margin-bottom", "5px")


        // fim da adição da estrutura inicial da parte de eventos (direita)

        // adiciona a estrutura da primeira hierarquia(esquerda), juntamente com os botoes e nomes
        var tableModulosHierarquiaNomes = svgHierarquiaNomes.append("table")
            // .attr("class", "row-modulo-" + d.nome)
            .attr("class", "row-modulo-nome-" + d.nome)
            .style("width", "-webkit-fill-available")
            .style("height", "20px")
            .style("background-color", "azure")
            .style("background-color", "#" + Object.values(corPrimaria)[index % Object.keys(corPrimaria).length])

        var rowHierarquia = tableModulosHierarquiaNomes.append("tr")
            .style("display", "flex")
            .style("height", "20px")
            .style("width", "290px")
            .style("margin-bottom", "5px")


        var buttonPlus = rowHierarquia.append("button")
            .attr("class", "iconPlus-div")
            .style("padding-left", "0px")
            .style("width", "36px")
            .style("background-color", "transparent")
            .style("border", "none")
            .on("click", function () {
                // var divAltura = tableModulosHierarquiaEventos.select(".divMainTdEventos")

                // var alturaDiv = divAltura.node().getBoundingClientRect().height;
                // console.log('Altura da div alterada para: ' + alturaDiv + 'px');

                // var divLargura = tableModulosHierarquiaEventos.select(".divMainTdEventos")
                // var larguraDiv = divLargura.node().getBoundingClientRect().height;
                // console.log('Largura da div alterada para: ' + larguraDiv + 'px');

                const td = document.querySelector('.mainTdNomes') as HTMLTableCellElement;
                var larguraRolagem = td.scrollWidth;
                // console.log('Largura da div antes: ' + larguraRolagem + 'px');


                // const divMainTdEventos = tableModulosHierarquiaEventos.querySelector('.divMainTdEventos')
                // const divMainTdEventos = tableModulosHierarquiaEventos.select(".divMainTdEventos")
                // const divMainTdEventos = document.querySelector(".divMainTdEventos")
                // console.log("divMainTdEventos: " + divMainTdEventos)
                // console.log("divMainTdEventos: " + JSON.stringify(divMainTdEventos))


                // exibir.push("row-modulo-" + d.nome)
                exibir.push("row-modulo-nome-" + d.nome)

                var eventoHide = rowHierarquia.select(".iconPlus-div")
                if (eventoHide) {
                    eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
                }
                var eventoShow = rowHierarquia.select(".iconMinus-div")
                if (eventoShow) {
                    eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
                }
                var segundaHierarquia = tableModulosHierarquiaNomes.selectAll('[class^="row-modulo2-"]')
                if (segundaHierarquia) {
                    segundaHierarquia.style("display", segundaHierarquia.style("display") === "none" ? "contents" : "none");
                }
                try {
                    var segundaHierarquia2 = tableModulosHierarquiaNomes.selectAll('[class^="ocultar"]')
                    if (segundaHierarquia2) {
                        segundaHierarquia2.style("display", segundaHierarquia2.style("display") === "none" ? "contents" : "none");
                    }

                    var terceiraHierarquia = tableModulosHierarquiaNomes.selectAll('[class^="row-modulo3-"]')
                    if (terceiraHierarquia) {
                        terceiraHierarquia.style("display", terceiraHierarquia.style("display") === "none" ? "contents" : "none");
                    }
                } catch (error) {
                    // console.log("erro catch: " + error);
                }


                // altera a propriedade de exibição na parte de eventos
                var eventoDiv = rowEventos.select(".evento-div")
                if (eventoDiv) {
                    eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
                }

                var segundaHierarquiaEventos = tableModulosHierarquiaEventos.selectAll('[class^="row-modulo2-"]')
                if (segundaHierarquiaEventos) {
                    segundaHierarquiaEventos.style("display", segundaHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                }
                try {
                    var segundaHierarquia2Eventos = tableModulosHierarquiaEventos.selectAll('[class^="ocultar"]')
                    if (segundaHierarquia2Eventos) {
                        segundaHierarquia2Eventos.style("display", segundaHierarquia2Eventos.style("display") === "none" ? "contents" : "none");
                    }

                    var terceiraHierarquiaEventos = tableModulosHierarquiaEventos.selectAll('[class^="row-modulo3-"]')
                    if (terceiraHierarquiaEventos) {
                        terceiraHierarquiaEventos.style("display", terceiraHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                    }
                } catch (error) {
                    // console.log("erro catch: " + error);
                }

                atualizaAlturaMainTdNomes()
                atualizaLarguraMainTdNomes("expande", d.nome)

            })
            .append("svg")
            // .attr("viewBox", [0, 0, 448, 512])
            .attr("viewBox", [0, 0, 590, 670])
            .attr("height", 11)
            .attr("width", 25)
            // .attr("height", 16)
            // .attr("width", 14)
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
                // exibir = exibir.filter(elemento => elemento !== "row-modulo-" + d.nome);
                exibir = exibir.filter(elemento => elemento !== "row-modulo-nome-" + d.nome);
                // console.log("exibir - buttonMinus: " + exibir);

                atualizaLarguraMainTdNomes("comprime", d.nome)

                var eventoHide = rowHierarquia.select(".iconPlus-div")
                if (eventoHide) {
                    eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
                }
                var eventoShow = rowHierarquia.select(".iconMinus-div")
                if (eventoShow) {
                    eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
                }
                // var segundaHierarquia = tableModulos.selectAll(".tableModulos2")
                var segundaHierarquia = tableModulosHierarquiaNomes.selectAll('[class^="row-modulo2-"]')
                if (segundaHierarquia) {
                    segundaHierarquia.style("display", segundaHierarquia.style("display") === "none" ? "contents" : "none");
                }

                try {
                    var segundaHierarquia2 = tableModulosHierarquiaNomes.selectAll('[class^="ocultar"]')
                    if (segundaHierarquia2) {
                        segundaHierarquia2.style("display", segundaHierarquia2.style("display") === "none" ? "contents" : "none");
                    }

                    var terceiraHierarquia = tableModulosHierarquiaNomes.selectAll('[class^="row-modulo3-"]')
                    if (terceiraHierarquia) {
                        terceiraHierarquia.style("display", terceiraHierarquia.style("display") === "none" ? "contents" : "none");
                    }
                } catch (error) {
                    // console.log("erro catch: " + error);
                }

                // altera a propriedade de exibição na parte de eventos
                var eventoDiv = rowEventos.select(".evento-div")
                if (eventoDiv) {
                    eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
                }

                var segundaHierarquiaEventos = tableModulosHierarquiaEventos.selectAll('[class^="row-modulo2-"]')
                if (segundaHierarquiaEventos) {
                    segundaHierarquiaEventos.style("display", segundaHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                }

                try {
                    var segundaHierarquia2Eventos = tableModulosHierarquiaEventos.selectAll('[class^="ocultar"]')
                    if (segundaHierarquia2Eventos) {
                        segundaHierarquia2Eventos.style("display", segundaHierarquia2Eventos.style("display") === "none" ? "contents" : "none");
                    }

                    var terceiraHierarquiaEventos = tableModulosHierarquiaEventos.selectAll('[class^="row-modulo3-"]')
                    if (terceiraHierarquiaEventos) {
                        terceiraHierarquiaEventos.style("display", terceiraHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                    }
                } catch (error) {
                    // console.log("erro catch: " + error);
                }

                atualizaAlturaMainTdNomes()

            })
            .append("svg")
            // .attr("viewBox", [0, 0, 448, 512])
            .attr("viewBox", [0, 0, 590, 670])
            .attr("height", 11)
            .attr("width", 25)
            // .attr("height", 16)
            // .attr("width", 14)
            .append("path")
            .attr("d", iconsBase.arrow_right)
            .style("fill", "white")


        rowHierarquia.append("div")
            // .style("width", "260px")
            .style("padding-left", "5px")
            .attr("class", "text-div")
            .append("text")
            .attr("x", 10)
            .attr("height", 20)
            .attr("font-size", "12px")
            .text(d.nome.toUpperCase())
            // .text(function (d) {
            //     return d.nome.toUpperCase(); // converte para maiúsculas
            // })
            .style("color", "#FFFFFF")
            .style("font-weight", "bold")

        // fim da estrutura da primeira hierarquia(esquerda), juntamente com os botoes e nomes

        //!
        //! Segundo nivel da hierarquia
        //!


        d.dados.forEach((h, i) => {
            var tipoEventoBar = []
            // var corBackgroundSegundoNivel = index
            // console.log("d.dados.forEach: " + JSON.stringify(h));
            // console.log("index: " + index);
            // corBackgroundLinha++
            // console.log("corBackgroundLinha: " + corBackgroundSegundoNivel);

            var tableModulos2HierarquiaEventos = tableModulosHierarquiaEventos.append("table")
                .attr("class", "row-modulo2-" + h.nome)
                .style("display", "none")
                // .style("padding-left", "15px")
                .style("margin-bottom", "5px")
                .attr("height", 20)

            var row2Eventos = tableModulos2HierarquiaEventos.append("tr")
                .attr("class", function () {
                    if (h.nome === null) {
                        // corBackgroundLinha +1
                        return "ocultar"
                    } else {
                        corBackgroundSegundoNivel++
                        // console.log("corBackgroundLinha: " + corBackgroundSegundoNivel);
                        return "exibir"
                    }
                })
                // .style("background-color", "aqua")
                .style("background-color", function () {
                    // console.log("i: " +corBackgroundSegundoNivel + " - " + corLinha[corBackgroundSegundoNivel % 2])
                    return corLinha[corBackgroundSegundoNivel % 2]
                })
                .style("display", "flex")
                .attr("height", 20)
                .style("margin-bottom", "5px")


            // inicio da estrutura da sgunda hierarquia(esquerda), juntamente com os botoes e nomes
            var tableModulos2HierarquiaNomes = tableModulosHierarquiaNomes.append("table")
                .attr("class", "row-modulo2-" + h.nome)
                .style("display", "none")
                .style("padding-left", "15px")
                .style("margin-bottom", "5px")
                .attr("height", 20)

            var row2Nomes = tableModulos2HierarquiaNomes.append("tr")
                .attr("class", function () {
                    if (h.nome === null) {
                        return "ocultar"
                    } else {
                        return "exibir"
                    }
                })
                .style("display", "flex")
                .attr("height", 20)
                .style("padding-left", "15px")
                .style("margin-bottom", "5px")


            var buttonPlus = row2Nomes.append("button")
                .attr("class", "iconPlus-div2")
                .style("background-color", "transparent")
                .style("border", "none")
                .on("click", function () {

                    // exibir.push("tableModulos2")
                    exibir.push("row-modulo2-" + h.nome)
                    // console.log("exibir - buttonPlus: " + exibir);

                    // var eventoDiv2 = row2Nomes.select(".evento-div2")
                    // if (eventoDiv2) {
                    //     eventoDiv2.style("display", eventoDiv2.style("display") === "none" ? "block" : "none");
                    // }

                    var eventoHide = row2Nomes.select(".iconPlus-div2")
                    if (eventoHide) {
                        eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
                    }
                    var eventoShow = row2Nomes.select(".iconMinus-div2")
                    if (eventoShow) {
                        eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
                    }
                    // var terceiraHierarquia = tableModulos2.selectAll(".tableModulos3")
                    var terceiraHierarquiaHierarquiaNomes = tableModulos2HierarquiaNomes.selectAll('[class^="row-modulo3-"]')
                    if (terceiraHierarquiaHierarquiaNomes) {
                        terceiraHierarquiaHierarquiaNomes.style("display", terceiraHierarquiaHierarquiaNomes.style("display") === "none" ? "contents" : "none");
                    }

                    // altera a propriedade de exibição na parte de eventos
                    var eventoDiv2 = row2Eventos.select(".evento-div2")
                    if (eventoDiv2) {
                        eventoDiv2.style("display", eventoDiv2.style("display") === "none" ? "block" : "none");
                    }

                    var terceiraHierarquiaHierarquiaEventos = tableModulos2HierarquiaEventos.selectAll('[class^="row-modulo3-"]')
                    if (terceiraHierarquiaHierarquiaEventos) {
                        terceiraHierarquiaHierarquiaEventos.style("display", terceiraHierarquiaHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                    }
                    atualizaAlturaMainTdNomes()
                })
                .append("svg")
                .attr("viewBox", [0, 0, 590, 670])
                .attr("height", 11)
                .attr("width", 25)
                .append("path")
                .attr("d", iconsBase.arrow_down)
                .style("fill", "white")

            var buttonMinus = row2Nomes.append("button")
                .style("display", "none")
                .style("background-color", "transparent")
                .style("border", "none")
                .attr("class", "iconMinus-div2")
                .on("click", function () {
                    exibir = exibir.filter(elemento => elemento !== "row-modulo2-" + h.nome);
                    // console.log("exibir - iconMinus-div2: " + exibir);

                    var eventoHide = row2Nomes.select(".iconPlus-div2")
                    if (eventoHide) {
                        eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
                    }
                    var eventoShow = row2Nomes.select(".iconMinus-div2")
                    if (eventoShow) {
                        eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
                    }
                    // var terceiraHierarquia = tableModulos2.selectAll(".tableModulos3")
                    var terceiraHierarquiaHierarquiaNomes = tableModulos2HierarquiaNomes.selectAll('[class^="row-modulo3-"]')
                    if (terceiraHierarquiaHierarquiaNomes) {
                        terceiraHierarquiaHierarquiaNomes.style("display", terceiraHierarquiaHierarquiaNomes.style("display") === "none" ? "contents" : "none");
                    }

                    // altera a propriedade de exibição na parte de eventos
                    var eventoDiv = row2Eventos.select(".evento-div2")
                    if (eventoDiv) {
                        eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
                    }

                    var terceiraHierarquiaHierarquiaEventos = tableModulos2HierarquiaEventos.selectAll('[class^="row-modulo3-"]')
                    if (terceiraHierarquiaHierarquiaEventos) {
                        terceiraHierarquiaHierarquiaEventos.style("display", terceiraHierarquiaHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                    }
                    atualizaAlturaMainTdNomes()
                })
                .append("svg")
                .attr("viewBox", [0, 0, 590, 670])
                .attr("height", 11)
                .attr("width", 25)
                .append("path")
                .attr("d", iconsBase.arrow_right)
                .style("fill", "white")

            var testeRow = row2Nomes.append("tr")
                .attr("class", "row-modulo-segundo")
                .attr("height", 20)
                .style("padding-left", "5px")
                .text(h.nome)
                .style("color", "#FFFFFF")



            //! bloco abaixo é usado para a parte de evento da hierarquia

            var dadosEventoSubTipo = []
            h.dados.forEach((l, i) => {
                var tamanhoBarraEvento = timeScale(l.levelValues[0].dataInicio);
                // console.log("l.levelValues[0].dataInicio: " + l.levelValues[0].evento + " - " + l.levelValues[0].dataInicio);
                // console.log("l.levelValues[0].dataInicio: " + l.levelValues[0].evento + " - " + l.levelValues[0].dataInicio);
                // console.log("timeScale(l.levelValues[0].dataInicio): " + timeScale(l.levelValues[0].dataInicio));

                // console.log("l.levelValues[0]: " + JSON.stringify(l.levelValues[0]));

                // var dataInicio = timeScale(l.levelValues[0].dataInicio);
                var dataInicio = timeScale(l.levelValues[0].dataInicio) + tickEspacamento;
                var posicaoTextoEvento;
                var dataFimTeste = "null";
                // var corBackgroundNivelEvento = corBackgroundSegundoNivel
                // console.log("i: " + i)
                // corBackgroundNivelEvento + i

                if (l.levelValues[0].dataFim != "null" && l.levelValues[0].dataFim != null) {
                    dataFimTeste = l.levelValues[0].dataFim
                }

                if (dataFimTeste != "null") {
                    if (new Date(DATA_FINAL).getTime() < new Date(l.levelValues[0].dataFim).getTime()) {
                        l.levelValues[0].dataFim = DATA_FINAL
                    }

                    var dataFim = timeScale(l.levelValues[0].dataFim)
                    tamanhoBarraEvento = dataFim - dataInicio
                    posicaoTextoEvento = dataInicio
                }
                else {
                    posicaoTextoEvento = dataInicio
                    tamanhoBarraEvento = 0
                }

                if (l.levelValues[0].subTipo) {
                    if (l.levelValues[0].subTipo == "null") {
                        dadosEventoSubTipo.push({
                            [l.levelValues[0].evento]: [
                                {
                                    posInin: dataInicio,
                                    width: tamanhoBarraEvento,
                                    group: false,
                                    cor: l.levelValues[0].cor,
                                    rot: l.levelValues[0].rot
                                    // icon: l.levelValues[0].icon
                                },
                            ],
                        });
                    } else {
                        const existingSubTipo = dadosEventoSubTipo.find(item => Object.keys(item)[0] === l.levelValues[0].subTipo);
                        if (!existingSubTipo) {
                            // console.log("l.levelValues[0]: " + JSON.stringify(l.levelValues[0]))
                            dadosEventoSubTipo.push({
                                [l.levelValues[0].subTipo]: [
                                    {
                                        dataInicio: l.levelValues[0].dataInicio,
                                        dataFim: l.levelValues[0].dataFim,
                                        evento: l.levelValues[0].evento,
                                        posInin: dataInicio,
                                        width: tamanhoBarraEvento,
                                        cor: l.levelValues[0].cor,
                                        group: true
                                    },
                                ],
                            });
                        } else {
                            existingSubTipo[l.levelValues[0].subTipo].push({
                                dataInicio: l.levelValues[0].dataInicio,
                                dataFim: l.levelValues[0].dataFim,
                                evento: l.levelValues[0].evento,
                                posInin: dataInicio,
                                width: tamanhoBarraEvento,
                                cor: l.levelValues[0].cor,
                                group: true
                            });
                        }
                    }
                } else {
                    //terceiro nivel dos eventos das hierarquias
                    var tableModulos3HierarquiaEventos = tableModulos2HierarquiaEventos.append("table")
                        // .attr("class", "tableModulos3")
                        .attr("class", "row-modulo3-" + l.levelValues[0].evento)
                        .style("display", "none")
                    var row3HierarquiaEventos = tableModulos3HierarquiaEventos.append("tr")
                        .attr("class", "linha-evento")
                        .style("background-color", function () {
                            // console.log("i: " +i + " - " + corLinha[i % 2])
                            // return corLinha[corBackgroundNivelEvento % 2]
                            // console.log("corBackgroundSegundoNivel: " +corBackgroundSegundoNivel)
                            // console.log("corBackgroundNivelEvento: " + corBackgroundNivelEvento)
                            return corLinha[i % 2]
                        })
                        .style("display", "flex")
                        .style("width", tamanhoScalaExib + "px")
                        .style("height", "21px")
                        .style("align-items", "center")
                        .style("margin-bottom", "5px")

                    //terceiro nivel dos nomes das hierarquias
                    var tableModulos3HierarquiaNomes = tableModulos2HierarquiaNomes.append("table")
                        // .attr("class", "tableModulos3")
                        .attr("class", "row-modulo3-" + l.levelValues[0].evento)
                        .style("display", "none")

                    var row3HierarquiaNomes = tableModulos3HierarquiaNomes.append("tr")
                        .style("display", "flex")
                        .style("padding-left", "30px")
                        .style("height", "21px")
                        // .style("width", "260px")
                        .style("align-items", "center")
                        .style("margin-bottom", "5px")


                    var textPrint = l.levelValues[0].evento
                    var indiceEspaco = textPrint.indexOf(' ');
                    if (indiceEspaco === -1 || indiceEspaco > 25) {
                        var textSplit
                        textSplit = textPrint.substring(0, 23) + ' ' + textPrint.substring(23);
                        textPrint = textSplit
                    } else {
                        textPrint;
                    }


                    // var testeRow3HierarquiaEventos = row3HierarquiaEventos.append("tr")
                    //     .attr("class", "row-modulo-segundo")
                    //     .style("padding-left", "5px")
                    //     .style("width", "260px")
                    //     .text(textPrint)

                    var testeRow3HierarquiaNomes = row3HierarquiaNomes.append("tr")
                        .attr("class", "row-modulo-segundo")
                        .style("padding-left", "5px")
                        .style("heigth", "260px")
                        .style("width", "max-content")
                        // .style("width", "260px")
                        .text(textPrint)
                        .style("padding-left", "25px")
                        .style("color", "#FFFFFF")



                    // var eventoBarDiv = row3HierarquiaNomes.append("svg")
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
                                // console.log("sera aqui? barra" + JSON.stringify(l.levelValues[0]) + " - " + tamanhoBarraEvento)
                            }
                            if (dataFimTeste !== "null") {
                                // console.log("sera aqui? barra" + JSON.stringify(l.levelValues[0]))
                                tipoEventoBar.push({
                                    "posInin": dataInicio,
                                    "width": tamanhoBarraEvento,
                                    // "cor": l.levelValues[0].cor ? l.levelValues[0].cor : "#b1b1ff",
                                    "cor": l.levelValues[0].cor,
                                    "dataInicio": l.levelValues[0].dataInicio,
                                    "dataFim": l.levelValues[0].dataFim,
                                    "evento": l.levelValues[0].evento,
                                })
                                tipoCategoriaBar.push({
                                    "posInin": dataInicio,
                                    "width": tamanhoBarraEvento,
                                    "cor": l.levelValues[0].cor,
                                    "dataInicio": l.levelValues[0].dataInicio,
                                    "dataFim": l.levelValues[0].dataFim,
                                    "evento": l.levelValues[0].evento,
                                    "icon": l.levelValues[0].icon

                                })
                                return tamanhoBarraEvento
                            } else {
                                // console.log("sera aqui? evento" + JSON.stringify(l.levelValues[0]))

                                tipoEventoBar.push({
                                    "posInin": dataInicio,
                                    "width": 0,
                                    "cor": l.levelValues[0].cor,
                                    "dataInicio": l.levelValues[0].dataInicio,
                                    "evento": l.levelValues[0].evento,
                                })
                                tipoCategoriaBar.push({
                                    "posInin": dataInicio,
                                    "width": 0,
                                    "cor": l.levelValues[0].cor,
                                    "dataInicio": l.levelValues[0].dataInicio,
                                    "evento": l.levelValues[0].evento,
                                    "icon": l.levelValues[0].icon
                                })
                                return tamanhoBarraEvento + 20
                            }
                        })
                        .attr("class", "eventoBarDiv")
                        // .style("display", "block")

                        .style("display", "flex")
                        .style("position", "absolute")
                    // .style("left", "-11px")
                    // console.log("evento dados: " + JSON.stringify(l.levelValues[0]))

                    if (dataFimTeste == "null") {
                        var iconeDiv = eventoBarDiv
                            .style("left", "-11px")
                            // .attr("viewBox", [0, 0, 448, 512])
                            .attr("viewBox", function () {
                                if (l.levelValues[0].icon) {
                                    return iconsBase.vb[l.levelValues[0].icon]
                                } else {
                                    return "0, 0, 448, 512"
                                }
                            })
                            // .attr("viewBox", function(){
                            //     // return iconsBase.vb[7]
                            //     return iconsBase.vb[l.levelValues[0].icon]
                            // })
                            .attr("width", 20)
                            .append("path")
                            .attr("fill", function () {
                                if (l.levelValues[0].cor) {
                                    return "#" + l.levelValues[0].cor
                                } else {
                                    return "rgb(0, 0153, 128)"
                                }
                            }
                            )
                            // .attr("d", iconsBase.diamond)
                            .attr("d", function () {
                                if (l.levelValues[0].icon) {
                                    // return l.levelValues[0].icon
                                    return iconsBase.icons[l.levelValues[0].icon]
                                } else {
                                    // return iconsBase.diamond
                                    return iconsBase.base
                                    // return iconsBase.icons[7]
                                }
                            }
                            )
                    } else {
                        // eventoBarDiv.style("border-radius", "10px")
                        eventoBarDiv
                            // .style("left", "-11px")
                            .style("border-radius", function (f) {
                                var soma = dataInicio + tamanhoBarraEvento
                                if (soma >= posDataFinal) {
                                    return "10px 0 0 10px"
                                } else {
                                    return "10px"
                                }
                            })
                        var iconeDiv = eventoBarDiv.append("rect")
                            .attr("fill", function () {
                                if (l.levelValues[0].cor) {
                                    // return l.levelValues[0].cor
                                    return "#" + l.levelValues[0].cor
                                } else {
                                    return "rgb(0, 0153, 128)"
                                }
                            }
                            )
                            // .style("height", "20px")
                            .style("height", function (d) {
                                //verifica a quantidade de carcteres do nome, se tiver mais de 27 caracteres aumenta o tamanho do icone
                                if (l.levelValues[0].evento.length > 26) {
                                    return "42.5px";
                                } else {
                                    return "21.25px";
                                }

                            })
                            .attr("width", function (d) {
                                if (dataFimTeste != "null") {
                                    if (new Date(DATA_FINAL).getTime() < new Date(l.levelValues[0].dataFim).getTime()) {
                                        l.levelValues[0].dataFim = DATA_FINAL
                                    }
                                    var dataFim = timeScale(l.levelValues[0].dataFim)
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
                                Data inicio: ${formatDate(l.levelValues[0].dataInicio)}<BR>
                             ${l.levelValues[0].dataFim ? `Data Fim: ${formatDate(l.levelValues[0].dataFim)}<BR>` : ''}
                             Evento: ${l.levelValues[0].evento}`
                                );
                        })

                        .on("mouseout", function () {
                            tooltip.style("visibility", "hidden")
                            // .html(``);
                        })

                    // var posicaoTextoBarra = 0
                    var dadosEventoDiv = row3HierarquiaEventos.append("svg")
                        .attr("transform", function () {
                            // console.log("tamanhoBarraEvento: " + tamanhoBarraEvento)
                            if (tamanhoBarraEvento == 0) {
                                return `translate(${posicaoTextoEvento + 10}, 0)`;
                            }
                            return `translate(${posicaoTextoEvento + tamanhoBarraEvento}, 0)`;
                        })
                        .attr("height", 20)
                        .attr("class", "evento-div-nome")
                        // .style("display", "block")

                        .style("display", "flex")
                        .style("position", "absolute")
                    // .style("margin-left", "10px")
                    //! rgb(204, 0, 0)
                    // .style("width", "30px")

                    // var soma = dataInicio + tamanhoBarraEvento
                    // if (soma >= posDataFinal) {
                    //     console.log("soma >= posDataFinal: " + l.levelValues[0].evento)
                    //     dadosEventoDiv.style("width", "20px")
                    //     .append("g")
                    //     .append("text")
                    //     .attr("y", 15)
                    //     .attr("font-size", 12)
                    //     .text("     ");
                    //     // return "20px"
                    // }
                    // if (soma + 300 >= posDataFinal) {
                    //     console.log("soma + 300 >= posDataFinal: " + l.levelValues[0].evento)
                    //     dadosEventoDiv.style("width", posDataFinal - soma + "px")
                    //     .append("g")
                    //     .append("text")
                    //     .attr("y", 15)
                    //     .attr("font-size", 12)
                    //     .text(function () {
                    //         if ("rot" in l.levelValues[0]) {
                    //             return l.levelValues[0].rot
                    //         } else {
                    //             return l.levelValues[0].evento
                    //         }
                    //     });
                    //     // return posDataFinal - soma + "px"
                    // }
                    // else if (dataInicio + 300 >= posDataFinal) {
                    //     dadosEventoDiv.style("width", posDataFinal - posicaoTextoEvento + "px")
                    //     .append("g")
                    //     .append("text")
                    //     .attr("y", 15)
                    //     .attr("font-size", 12)
                    //     .text(function () {
                    //         if ("rot" in l.levelValues[0]) {
                    //             return l.levelValues[0].rot
                    //         } else {
                    //             return l.levelValues[0].evento
                    //         }
                    //     });
                    //     // return posDataFinal - posicaoTextoEvento + "px"
                    // }



                    // /*
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
                        if ("rot" in l.levelValues[0]) {
                            return l.levelValues[0].rot
                        } else {
                            return l.levelValues[0].evento
                        }
                    });
                    // */
                }
            })

            //caso exista algum subtipo associado entra no if abaixo
            if (dadosEventoSubTipo.length != 0) {
                dadosEventoSubTipo.forEach((item, i) => {
                    // console.log("tableModulos3 = tableModulos2.append: " + JSON.stringify(item));
                    // console.log("tableModulos3 = tableModulos2.append item[0]: " + Object.keys(item)[0]);
                    var tableModulos3Eventos = tableModulos2HierarquiaEventos.append("table")
                        // .attr("class", "tableModulos3")
                        .attr("class", "row-modulo3-" + Object.keys(item)[0])
                        .style("display", "none")

                    var row3Eventos = tableModulos3Eventos.append("tr")
                        .style("display", "flex")
                        .style("width", "1147px")
                        .style("height", "21px")
                        .style("margin-bottom", "5px")
                        .attr("class", "alterarEsse")
                        .style("background-color", function () {
                            return corLinha[i % 2]
                        })

                    var testeRowEventos = row3Eventos.append("tr")
                        .attr("class", "row-modulo-evento")

                    var barraGeralEvento = row3Eventos.append("g")
                        .attr("transform", `translate(0,0)`)
                        .attr("class", "evento-div3")

                    //parte referente ao nome dos eventos
                    var tableModulos3Nomes = tableModulos2HierarquiaNomes.append("table")
                        .attr("class", "row-modulo3-" + Object.keys(item)[0])
                        .style("display", "none")

                    var row3Nomes = tableModulos3Nomes.append("tr")
                        .style("display", "flex")
                        .style("padding-left", "30px")
                        // .style("width", "1147px")
                        .style("margin-bottom", "5px")

                    var testeRowNomes = row3Nomes.append("tr")
                        .attr("class", "row-modulo-evento")
                        // .attr("height", 20)
                        .style("padding-left", "5px")
                        // .style("width", "260px")
                        .style("width", "max-content")
                        .text(Object.keys(dadosEventoSubTipo[i])[0])
                        .style("color", "#FFFFFF")


                    // console.log("JSON.stringify(item): " + JSON.stringify(item))
                    Object.keys(item).forEach((key, j) => {

                        item[key].forEach((gov, k) => {
                            // console.log("item[key].forEach: " + JSON.stringify(gov))

                            var barraGeralEventoAgrupado = barraGeralEvento.append("svg")
                                .style("display", "flex")
                                .style("position", "absolute")
                                .attr("height", 20)
                                .attr("class", "barraGeralEventoAgrupado")
                                .attr("transform", function (f) {
                                    if (gov.width != 0) {
                                        return `translate(${gov.posInin},0)`
                                    } else {
                                        // return `translate(${gov.posInin - 15},0)`
                                        // return `translate(${gov.posInin - 18},0)`
                                        return `translate(${gov.posInin},0)`
                                    }
                                })
                                .attr("width", function (f) {
                                    if (gov.width != 0) {
                                        tipoEventoBar.push({
                                            //adicionar a posição x do translate e o tamanho do width
                                            "posInin": gov.posInin,
                                            "width": gov.width,
                                            "dataInicio": gov.dataInicio,
                                            "evento": gov.evento,
                                        })
                                        tipoCategoriaBar.push({
                                            //adicionar a posição x do translate e o tamanho do width
                                            "posInin": gov.posInin,
                                            "width": gov.width,
                                            "dataInicio": gov.dataInicio,
                                            "evento": gov.evento,
                                        })
                                        return gov.width
                                    } else {
                                        tipoEventoBar.push({
                                            //adicionar a posição x do translate e o tamanho do width
                                            "posInin": gov.posInin,
                                            "width": 0,
                                            "dataInicio": gov.dataInicio,
                                            "evento": gov.evento,
                                        })
                                        tipoCategoriaBar.push({
                                            //adicionar a posição x do translate e o tamanho do width
                                            "posInin": gov.posInin,
                                            "width": 0,
                                            "dataInicio": gov.dataInicio,
                                            "evento": gov.evento,
                                        })
                                        return "30px"
                                    }
                                })
                            if (gov.width != 0) {
                                barraGeralEventoAgrupado.style("border-radius", "10px")
                                barraGeralEventoAgrupado.append("rect")
                                    .attr("fill", function () {
                                        // console.log("gov agrupado: " + JSON.stringify(gov));
                                        if (gov.cor) {
                                            return "#" + gov.cor
                                        } else {
                                            return "rgb(10, 0, 250)"
                                        }
                                    }
                                    )
                                    .attr("width", gov.width)
                                    .attr("height", 20)
                            } else {
                                barraGeralEventoAgrupado
                                    .attr("viewBox", [0, 0, 448, 512])
                                    .attr("height", 20)
                                    // .attr("width", 30)
                                    .attr("width", 20)
                                    .append("path")
                                    .attr("fill", function () {
                                        if (gov.cor) {
                                            return "#" + gov.cor
                                        } else {
                                            return "rgb(10, 0, 250)"
                                        }
                                    })
                                    // .attr("d", iconsBase.diamond)
                                    .attr("d",
                                        function () {
                                            if (gov.icon) {
                                                return gov.icon
                                            } else {
                                                // return iconsBase.diamond
                                                return iconsBase.base
                                            }
                                        }
                                    )
                            }

                            if (!gov.group) {
                                barraGeralEvento.append("svg")
                                    .attr("transform", function () {
                                        if (gov.width != 0) {
                                            return `translate(${gov.posInin + gov.width + 5}, 0)`;
                                        } else {
                                            return `translate(${gov.posInin + 15}, 0)`;
                                        }
                                    })
                                    .attr("height", 20)
                                    .attr("class", "evento-div")
                                    .style("display", "block")
                                    .append("g")
                                    .append("text")
                                    .attr("y", 15)
                                    .attr("font-size", 12)
                                    .text(function () {
                                        if (gov.rot && (gov.rot != "null" && gov.rot != null)) {
                                            return gov.rot
                                        } else {
                                            return key
                                        }
                                    });
                            }

                            barraGeralEventoAgrupado
                                // .on("mouseover", function (event, d) {
                                //     // console.log("mouseover");
                                //     var posX = event.pageX
                                //     var posY = event.pageY
                                //     // console.log("gov: " + JSON.stringify(gov))
                                //     tooltip
                                //         .style("visibility", "visible")
                                //         .style("left", (posX + 10) + "px")
                                //         .style("top", (posY + 10) + "px")
                                //         .html(`
                                //         Data inicio: ${formatDate(gov.dataInicio)};<BR>
                                //         ${gov.dataFim ? `Data Fim: ${formatDate(gov.dataFim)};<BR>` : ''}
                                //         Evento: ${gov.evento};`
                                //         )
                                // })

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
                                        Data inicio: ${formatDate(gov.dataInicio)};<BR>
                                     ${gov.dataFim ? `Data Fim: ${formatDate(gov.dataFim)};<BR>` : ''}
                                     Evento: ${gov.evento}`
                                        );
                                })

                                .on("mouseout", function () {
                                    tooltip.style("visibility", "hidden")
                                    // .html(``);
                                })
                        });
                    });
                }
                )
            }

            //Gera os marcos agrupados referentes ao tipo
            // var barraGeralTeste = row2Nomes.append("g")
            var barraGeralTeste = row2Eventos.append("g")
                .attr("transform", `translate(0,0)`)
                .attr("class", "evento-div2")

            tipoEventoBar.forEach((item, i) => {

                var barraGeralTeste2 = barraGeralTeste.append("svg")
                    .style("display", "flex")
                    .style("position", "absolute")
                    .attr("transform", function (f) {
                        if (item.width != 0) {
                            return `translate(${item.posInin},0)`
                        } else {
                            // return `translate(${item.posInin - 15},0)`
                            // return `translate(${item.posInin - 18},0)`
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
                        // .attr("fill", "rgb(128, 52, 52)")
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
                    barraGeralTeste2.append("svg")
                        .attr("transform", `translate(${item.posInin},0)`)
                        .attr("height", 20)
                        // .attr("width", 30)
                        .attr("width", 20)
                        .attr("viewBox", [0, 0, 448, 512])
                        .attr("height", 20)
                        .attr("width", 20)
                        .append("path")
                        // .attr("fill", "rgb(128, 52, 52)")
                        .attr("fill", function (f) {
                            if (item.cor) {
                                return "#" + item.cor
                            } else {
                                return "rgb(200, 153, 128)"
                            }
                        })
                        // .attr("d", iconsBase.diamond)
                        .attr("d", iconsBase.base)
                }
                barraGeralTeste2
                    // .on("mouseover", function (event, d) {
                    //     // console.log("mouseover");
                    //     var posX = event.pageX
                    //     var posY = event.pageY
                    //     // console.log("item tooltip: " + JSON.stringify(item))
                    //     tooltip
                    //         .style("visibility", "visible")
                    //         .style("left", (posX + 10) + "px")
                    //         .style("top", (posY + 10) + "px")
                    //         .html(`
                    //         Data inicio: ${formatDate(item.dataInicio)}<BR>
                    //         ${item.dataFim ? `Data Fim: ${formatDate(item.dataFim)}<BR>` : ''}
                    //         Evento: ${item.evento}`
                    //         )
                    // })

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
                            Data inicio: ${formatDate(item.dataInicio)}<BR>
                         ${item.dataFim ? `Data Fim: ${formatDate(item.dataFim)}<BR>` : ''}
                         Evento: ${item.evento}`
                            );
                    })

                    .on("mouseout", function () {
                        tooltip.style("visibility", "hidden")
                        // .html(``);
                    })
            })

        })

        // var barraGeralTeste = rowHierarquia.append("g")
        var barraGeralTesteEvento = rowEventos.append("g")
            .attr("transform", `translate(0,0)`)
            .attr("class", "evento-div")


        var barraGeralTesteHierarquia = rowHierarquia.append("g")
            .attr("transform", `translate(0,0)`)
            .attr("class", "evento-div")

        tipoCategoriaBar.forEach((item, i) => {
            // var barraGeralTeste2 = barraGeralTeste.append("svg")
            var barraGeralTeste2 = barraGeralTesteEvento.append("svg")
                .attr("class", "evento-div-svg1")
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
            // .style("left", "-15px")

            if (item.width != 0) {
                // console.log("testando: " + JSON.stringify(item))
                // barraGeralTeste2.style("border-radius", "10px")
                barraGeralTeste2.style("border-radius", function (f) {
                    var soma = item.posInin + item.width
                    if (soma >= posDataFinal) {
                        return "10px 0 0 10px"
                    } else {
                        return "10px"
                    }
                })
                barraGeralTeste2.append("rect")
                    // .attr("fill", "rgb(128, 52, 52)")
                    // .attr("fill", "rgb(128, 252, 52)")
                    .attr("fill", function (f) {
                        if (item.cor) {
                            // console.log("testando: " + JSON.stringify(item.cor))

                            return "#" + item.cor
                        } else {
                            return "rgb(0, 0153, 128)"
                        }
                    })
                    .attr("width", item.width)
                    .attr("height", 20)
            } else {
                // console.log("item svg: " + JSON.stringify(item))
                barraGeralTeste2.style("left", "-11px")
                barraGeralTeste2.append("svg")
                    .attr("class", "evento-div-svg-hierarquia")
                    .attr("transform", `translate(${item.posInin},0)`)
                    .attr("height", 20)
                    // .attr("width", 30)
                    .attr("width", 20)
                    // .attr("viewBox", [0, 0, 448, 512])
                    .attr("viewBox", function () {
                        if (item.icon) {
                            return iconsBase.vb[item.icon]
                        } else {
                            return "0, 0, 448, 512"
                        }
                    })
                    .attr("height", 20)
                    // .attr("width", 30)
                    .attr("width", 20)
                    .append("path")
                    // .attr("fill", "rgb(128, 52, 52)")
                    .attr("fill", function (f) {
                        if (item.cor) {
                            return "#" + item.cor
                        } else {
                            return "rgb(200, 153, 128)"
                        }
                    })
                    .attr("d", function () {
                        if (item.icon) {
                            return iconsBase.icons[item.icon]
                        } else {
                            return iconsBase.base
                        }
                    }
                    )
            }
            // barraGeralTeste2.on("mouseover", function (event, d) {
            //     // console.log("mouseover");
            //     var posX = event.pageX
            //     var posY = event.pageY
            //     // console.log("item tooltip: " + JSON.stringify(item))
            //     tooltip
            //         .style("visibility", "visible")
            //         .style("left", (posX + 10) + "px")
            //         .style("top", (posY + 10) + "px")
            //         .html(`
            //         Data inicio: ${formatDate(item.dataInicio)}<BR>
            //         ${item.dataFim ? `Data Fim: ${formatDate(item.dataFim)}<BR>` : ''}
            //         Evento: ${item.evento}`
            //     )
            // })

            barraGeralTeste2
            // .on("mouseover", function (event, d) {
            //     var posX = event.pageX;
            //     var posY = event.pageY;

            //     // Obter a largura e altura do tooltip
            //     var tooltipWidth = tooltip.node().offsetWidth;
            //     var tooltipHeight = tooltip.node().offsetHeight;

            //     // Ajustar a posição do tooltip se estiver perto da borda direita ou inferior
            //     if (posX + tooltipWidth + 10 > window.innerWidth) {
            //         posX = window.innerWidth - tooltipWidth - 10; // Ajusta para a borda direita
            //     }
            //     if (posY + tooltipHeight + 10 > window.innerHeight) {
            //         posY = window.innerHeight - tooltipHeight - 10; // Ajusta para a borda inferior
            //     }

            //     tooltip
            //         .style("visibility", "visible")
            //         .style("left", (posX + 10) + "px")
            //         .style("top", (posY + 10) + "px")
            //         .html(`
            //             Data inicio: ${formatDate(item.dataInicio)}<BR>
            //             ${item.dataFim ? `Data Fim: ${formatDate(item.dataFim)}<BR>` : ''}
            //             Evento: ${item.evento}`
            //         );
            // })

            // //! parte de baixo é para quando tira o mouse esconder o tooltip
            //     .on("mouseout", function () {
            //         tooltip.style("visibility", "hidden")
            //             .html(``);
            //     })


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
                    // .html(``);
                });
        })
    });
}


function atualizaAlturaMainTdNomes() {
    const td = document.querySelector('.mainTdNomes') as HTMLTableCellElement;
    alturaRolagem = td.scrollHeight;
    svgRoot.style("height", alturaRolagem + "px");
}

function atualizaLarguraMainTdNomes(tipo, hierarquia) {
    const queryMainTdNomes = document.querySelector('.mainTdNomes') as HTMLTableCellElement;
    const tds = queryMainTdNomes.querySelectorAll('[class^="row-modulo-nome-"]') as unknown as HTMLTableCellElement[];
    if (tipo == "expande") {
        // const queryMainTdNomes = document.querySelector('.mainTdNomes') as HTMLTableCellElement;
        var valorAdd = queryMainTdNomes.scrollWidth
        larguraRolagem.push(
            {
                nomeHierarquia: hierarquia,
                tamanho: valorAdd
            }
        );
        const maior = Math.max(...larguraRolagem.map(item => item.tamanho));
        // const tds = queryMainTdNomes.querySelectorAll('[class^="row-modulo-nome-"]') as unknown as HTMLTableCellElement[];
        tds.forEach((td) => {
            td.style.width = maior + 'px';
        });
    }
    else if (tipo == "comprime") {
        // const queryMainTdNomes = document.querySelector('.mainTdNomes') as HTMLTableCellElement;
        // const tds = queryMainTdNomes.querySelectorAll('[class^="row-modulo-nome-"]') as unknown as HTMLTableCellElement[];
        larguraRolagem = larguraRolagem.filter(item => item.nomeHierarquia !== hierarquia);
        if (larguraRolagem.length === 0) {
            tds.forEach((td) => {
                td.style.width = "-webkit-fill-available";
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
                td.style.width = "-webkit-fill-available";
            });
        } else {
            const maior = Math.max(...larguraRolagem.map(item => item.tamanho));
            tds.forEach((td) => {
                td.style.width = maior + 'px';
            });
        }
    }
}