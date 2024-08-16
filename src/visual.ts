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
var dataMap = [];
var estruturaDados = [];
var exibir = [];
var dadosEstruturais = [];
var svgRoot;
var svgBase;
var nomesEventoTdHTML;
var dadosEventoTdHTML;
var tamanhoScalaExib;
var tipoEscalaGrafico;


export class Visual implements IVisual {
    private svgRootHTML: Selection<any>;

    constructor(options: VisualConstructorOptions) {
        this.svgRootHTML = d3.select(options.element).append("div").classed("card", true);
        svgBase = this.svgRootHTML
    }

    public update(options: VisualUpdateOptions) {
        // console.log("dataMap0: " + dataMap);
        dataMap = [];
        estruturaDados = [];
        dadosEstruturais = [];
        // console.log("dataMap1: " + dataMap);

        const dataView: DataView = options.dataViews[0];
        // console.log("dados iniciais dataView: " + JSON.stringify(options));
        CHART_HEIGHT = options.viewport.height
        CHART_WIDTH = options.viewport.width
        tamanhoScalaExib = CHART_WIDTH * 2.2
        // console.log("tamanhoScalaExib: " + tamanhoScalaExib);

        const matrixDataView: DataViewMatrix = dataView.matrix;
        const categorias = matrixDataView.rows.root.children;
        const estrutura = matrixDataView.rows.levels;
        const dadoEstrutura = estrutura[estrutura.length - 1].sources;
        const tipoDeEscala = options.dataViews[0].metadata.columns;
        // console.log("tipoDeEscala: " + JSON.stringify(tipoDeEscala));
        // console.log("dados iniciais: " + JSON.stringify(categorias));

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
            .style("width", "300px")
            .style("height", tamanhoExibicaoHeight - MARGIN_BOTTOM * 1.5 + "px")
            // .style("background-color", "bisque")
            .style("min-width", "300px")
            .style("padding-top", MARGIN_TOP * 2 + "px")
            .style("padding-bottom", MARGIN_TOP + "px")
            .style("vertical-align", "top")
            .style("position", "fixed")
            .style("overflow-y", "auto")
            .style("overflow-x", "hidden")

        dadosEventoTdHTML = mainTableTr.append("td")
            .attr("class", "mainTdEventos")
            .style("height", tamanhoExibicaoHeight + MARGIN_TOP + 4 + "px")
            .style("width", tamanhoScalaExib + "px")
            // .style("width", CHART_WIDTH + "px")
            .style("vertical-align", "top")
            .style("overflow-y", "auto")
            .style("position", "fixed")
            .style("max-width", "fit-content")
            .style("left", "300px")
            .append("div")
            .attr("class", "divMainTdEventos")
            .style("max-width", CHART_WIDTH - 300 + "px")
        // .style("height", tamanhoExibicaoHeight + "px")
        // .style("position", "relative")

        //necessario para criar as escalas
        svgRoot = dadosEventoTdHTML
            // svgRoot = dadosEventoTdHTML
            .append("svg")
            .attr("class", "main-svg")
            .style("width", tamanhoScalaExib + MARGIN_RIGHT * 2 + "px")
            // .style("width", tamanhoScalaExib + MARGIN_RIGHT + "px")
            .style("height", tamanhoExibicaoHeight + "px")
            .style("position", "absolute")
            .style("top", "0px")
            .style("left", "0px")
            .style("z-index", "-1")

        var dadosEventoHTML = dadosEventoTdHTML.append("div")
            .style("padding-top", MARGIN_TOP * 2 + "px")
            .style("width", tamanhoScalaExib + "px")
        // .style("overflow", "auto")

        estruturaEscala(tipoDeEscala) //retorna quais campos no visual foram preenchidos
        console.log("tipoEscalaGrafico: " + tipoEscalaGrafico);

        estruturaHierarquia(dadoEstrutura, estruturaDados) //retorna quais campos no visual foram preenchidos
        dadosEstruturais = estruturaDados;
        // console.log("dadosEstruturais: " + JSON.stringify(dadosEstruturais));

        hierarquiaTree(categorias, 0, dataMap)
        preencheDataInicio(dataMap)
        preencheDataFim(dataMap)
        agrupamentoHierarquia(dataMap, dataAgrupado)

        const tagsetupScales = d3.selectAll(".grid");
        tagsetupScales.remove();
        const tagmilestone = d3.selectAll(".milestone");
        tagmilestone.remove();
        const tagtreeModulos = d3.selectAll('[class^="row-modulo-"]');
        tagtreeModulos.remove();

        // console.log("tamanhoScalaExib: " + tamanhoScalaExib);
        setupScales(svgRoot, tamanhoScalaExib, 600);
        milestone(svgRoot);
        treeModulos(dataMap, nomesEventoTdHTML, dadosEventoHTML);
        dadosExpandidos(nomesEventoTdHTML, dadosEventoHTML) // mantem as linhas em exibição apos atualizar o visual

        //seleciona as td que tem os nomes e os eventos e cria um listener para caso seja feita a rolagem em uma o evento tb ser executada na outra
        const mainTdNomes = document.querySelector(".mainTdNomes")
        const mainTdEventos = document.querySelector(".mainTdEventos")
        mainTdNomes.addEventListener('scroll', function () {
            // Define a posição de rolagem da segunda tabela para a posição de rolagem da primeira
            mainTdEventos.scrollTop = mainTdNomes.scrollTop;
        });

        // Adiciona um listener de evento para o evento de rolagem na segunda tabela
        mainTdEventos.addEventListener('scroll', function () {
            // Define a posição de rolagem da primeira tabela para a posição de rolagem da segunda
            mainTdNomes.scrollTop = mainTdEventos.scrollTop;
        });
    }
}

function defineEscala() {
    if (tipoEscalaGrafico == "Ano") {
        return d3.utcYear.every(1)
    }
    if (tipoEscalaGrafico == "Trimestre") {
        return d3.utcMonth.every(3)
    }
    if (tipoEscalaGrafico == "Mês") {
        return d3.utcMonth.every(1)
    }
    if (tipoEscalaGrafico == "Dia") {
        return d3.utcDay.every(1)
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

        console.log("dados expandios evento");

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
}

function preencheDataFim(jsonData) {
    DATA_FINAL = new Date("1500-01-01");
    for (let i = 0; i < jsonData.length; i++) {
        let currentObj = jsonData[i];
        for (let j = 0; j < currentObj.dados[0].dados.length; j++) {
            let currentLevel2Obj = currentObj.dados[0].dados[j];
            if (currentLevel2Obj.levelValues[0].dataInicio) {
                let currentDate = new Date(currentLevel2Obj.levelValues[0].dataInicio);
                if (currentDate > DATA_FINAL) {
                    DATA_FINAL = currentDate;
                }
            }
        }
    }

    const year = DATA_FINAL.getFullYear();
    const month = DATA_FINAL.getMonth() + 1; // +1 because getMonth() is zero-based
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    const lastDayOfMonthString = `${year}-${month.toString().padStart(2, "0")}-${lastDayOfMonth.toString().padStart(2, "0")}`;
    //faz com que a data final seja o ultimo dia do mes
    DATA_FINAL = new Date(lastDayOfMonthString)
    console.log("DATA_FINAL: " + DATA_FINAL);
    // console.log("lastDayOfMonthString: " + lastDayOfMonthString);
}

function timeScaleAxis() {
    console.log("timeScaleAxis() CHART_WIDTH: " + CHART_WIDTH);
    console.log("timeScaleAxis() DATA_FINAL: " + DATA_FINAL);

    var tamanhoData = (d3.scaleTime()
        .domain([
            DATA_INICIAL,
            DATA_FINAL,
        ])
        // .nice()
        .range([0, tamanhoScalaExib]));
    // .range([0, CHART_WIDTH*2.5]));
    // .range([0, CHART_WIDTH - MARGIN_LEFT - MARGIN_RIGHT]));
    return tamanhoData;
}

const xScale = d3.scaleTime()
    .domain([DATA_INICIAL, DATA_FINAL])
    .range([0, tamanhoScalaExib]);


function timeScale(data) {
    var parser = d3.timeParse("%d/%m/%Y");
    var parsedData = parser(data);

    var tamanhoData = (d3.scaleTime()
        .domain([
            DATA_INICIAL,
            DATA_FINAL,
        ])
        .nice()
        // .range([0, CHART_WIDTH - MARGIN_LEFT - MARGIN_RIGHT]));
        .range([0, tamanhoScalaExib]));
    if (!parsedData) {
        return tamanhoData(new Date(data));
    }
    else {
        return tamanhoData(parsedData);
    }
}


const xAxis = d3.axisTop(xScale)
    // .ticks(d3.utcMonth.every(3))
    // .tickValues(d3.utcMonth.range(DATA_INICIAL, DATA_FINAL, 3))
    .tickSize(-CHART_HEIGHT)
    .tickFormat(d3.timeFormat("%b %Y"));

// Set up scales
/// calcular tamanho das escalas
// function setupScales(svg, width, height) {
//     var grid = svg.append("g")
//         .attr("class", "grid")
//         .attr("transform", `translate(${MARGIN_SCALE_LEFT}, ${MARGIN_TOP})`)
//         .call(xAxis)
//         // .selectAll("text")
//         // .style("text-anchor", "middle")
//         // .attr("y", "-15")
//         // .attr("fill", "black")
//         // .attr("stroke", "none")
//         // .attr("font-size", 10)
//         // .attr("dy", "1em")
// }

function setupScales(svg, width, height) {
    var grid = svg.append("g")
        .attr("class", "grid")
        .attr("transform", `translate(${MARGIN_SCALE_LEFT}, ${MARGIN_TOP})`)
        .call(d3.axisTop(timeScaleAxis())
            .ticks(defineEscala())
            // .ticks(d3.utcMonth.every(3))
            // .ticks(d3.utcYear.every(1))
            .tickSize(-CHART_HEIGHT)
            .tickFormat(d3.timeFormat("%b %Y"))
        )
        .selectAll("text")
        .style("text-anchor", "middle")
        .attr("y", "-15")
        .attr("fill", "black")
        .attr("stroke", "none") // cria as linhas ao redor
        .attr("font-size", 10)
        .attr("dy", "1em")
}

function milestone(svg) {
    var mile = svg.append("g")
        .attr("transform", function () {
            // var hoje = timeScale(d3.timeDay(new Date()));
            var hoje = timeScale(d3.timeDay(new Date()));
            // var hoje = xScale(d3.timeDay(new Date()));
            return `translate(${hoje + MARGIN_SCALE_LEFT})`;
        })
        .attr("class", "milestone")
        .append("line")
        .attr("y2", 995 + 20)
        .attr("stroke", "red")
}

//rgb(204,0,0)
//TODO necessario fazer refatoração para que seja utilizado recursividade, tornando possivel o uso de N hierarquias
function treeModulos(data, svgHierarquiaNomes, svgHierarquiaEventos) {
    // console.log("treeModulos data: " + JSON.stringify(data));

    data.forEach((d) => {
        var tipoCategoriaBar = []


        // adiciona a estrutura inicial da parte de eventos (direita)
        var tableModulosHierarquiaEventos = svgHierarquiaEventos.append("table")
            .attr("class", "row-modulo-" + d.nome)
            .style("height", "20px")
        // .style("width", CHART_WIDTH +"px")

        var rowEventos = tableModulosHierarquiaEventos.append("tr")
            .style("display", "flex")
            .style("height", "20px")
            // .style("width", CHART_WIDTH + "px")
            .style("margin-bottom", "5px")
        // .text(d.nome)

        // rowEventos.append("div")
        //     .style("width", "260px")
        //     .style("padding-left", "5px")
        //     .attr("class", "text-div")
        //     .append("text")
        //     .attr("x", 10)
        //     .attr("height", 20)
        //     .attr("font-size", "12px")
        //     .text(d.nome)



        // fim da adição da estrutura inicial da parte de eventos (direita)

        // adiciona a estrutura da primeira hierarquia(esquerda), juntamente com os botoes e nomes


        var tableModulosHierarquiaNomes = svgHierarquiaNomes.append("table")
            .attr("class", "row-modulo-" + d.nome)
            .attr("height", 20)

        var rowHierarquia = tableModulosHierarquiaNomes.append("tr")
            .style("display", "flex")
            .attr("height", 20)
            .style("margin-bottom", "5px")

        var buttonPlus = rowHierarquia.append("button")
            .attr("class", "iconPlus-div")
            .on("click", function () {

                exibir.push("row-modulo-" + d.nome)

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
            })
            .append("svg")
            .attr("viewBox", [0, 0, 448, 512])
            .attr("height", 16)
            .attr("width", 14)
            .append("path")
            .attr("d", iconsBase.plus)

        var buttonMinus = rowHierarquia.append("button")
            .style("display", "none")
            .attr("class", "iconMinus-div")
            .on("click", function () {
                exibir = exibir.filter(elemento => elemento !== "row-modulo-" + d.nome);
                // console.log("exibir - buttonMinus: " + exibir);

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

            })
            .append("svg")
            .attr("viewBox", [0, 0, 448, 512])
            .attr("height", 16)
            .attr("width", 14)
            .append("path")
            .attr("d", iconsBase.minor)


        rowHierarquia.append("div")
            .style("width", "260px")
            .style("padding-left", "5px")
            .attr("class", "text-div")
            .append("text")
            .attr("x", 10)
            .attr("height", 20)
            .attr("font-size", "12px")
            .text(d.nome)

        // fim da estrutura da primeira hierarquia(esquerda), juntamente com os botoes e nomes

        //!
        //! Segundo nivel da hierarquia
        //!


        d.dados.forEach((h, i) => {
            var tipoEventoBar = []
            // console.log("d.dados.forEach: " + JSON.stringify(h));

            var tableModulos2HierarquiaEventos = tableModulosHierarquiaEventos.append("table")
                .attr("class", "row-modulo2-" + h.nome)
                .style("display", "none")
                // .style("padding-left", "15px")
                .style("margin-bottom", "5px")
                .attr("height", 20)

            var row2Eventos = tableModulos2HierarquiaEventos.append("tr")
                .attr("class", function () {
                    if (h.nome === null) {
                        return "ocultar"
                    } else {
                        return "exibir"
                    }
                })
                .style("display", "flex")
                .attr("height", 20)
                // .style("padding-left", "15px")
                .style("margin-bottom", "5px")
            // .text(h.nome)

            // var testeRowEventos = row2Eventos.append("tr")
            //     .attr("class", "row-modulo-segundo")
            //     .attr("height", 20)
            //     .style("padding-left", "5px")
            //     .style("width", "245px")
            //     .text(h.nome)

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
                })
                .append("svg")
                .attr("viewBox", [0, 0, 448, 512])
                .attr("height", 16)
                .attr("width", 14)
                .append("path")
                .attr("d", iconsBase.plus)

            var buttonMinus = row2Nomes.append("button")
                .style("display", "none")
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
                })
                .append("svg")
                .attr("viewBox", [0, 0, 448, 512])
                .attr("height", 16)
                .attr("width", 14)
                .append("path")
                .attr("d", iconsBase.minor)

            var testeRow = row2Nomes.append("tr")
                .attr("class", "row-modulo-segundo")
                .attr("height", 20)
                .style("padding-left", "5px")
                .style("width", "245px")
                .text(h.nome)



            //! bloco abaixo é usado para a parte de evento da hierarquia

            var dadosEventoSubTipo = []
            h.dados.forEach((l, i) => {
                var tamanhoBarraEvento = timeScale(l.levelValues[0].dataInicio);
                var dataInicio = timeScale(l.levelValues[0].dataInicio);
                var posicaoTextoEvento;
                var dataFimTeste = "null";
                if (l.levelValues[0].dataFim != "null" && l.levelValues[0].dataFim != null) {
                    dataFimTeste = l.levelValues[0].dataFim
                }

                if (dataFimTeste != "null") {

                    var dataFim = timeScale(l.levelValues[0].dataFim)
                    // console.log("dataFim: " + dataFim);
                    // console.log("l.levelValues[0].dataFim: " + l.levelValues[0].dataFim);
                    // console.log("new Date(l.levelValues[0].dataFim): " + new Date(l.levelValues[0].dataFim));
                    // console.log("DATA_FINAL: " + DATA_FINAL);
                    
                    // if (new Date(l.levelValues[0].dataFim).getTime() > DATA_FINAL.getTime()) {
                    //     l.levelValues[0].dataFim = DATA_FINAL.toISOString()
                    //     console.log("l.levelValues[0].dataFim: " + l.levelValues[0].dataFim);
                    //   }
                    tamanhoBarraEvento = dataFim - dataInicio
                    // console.log("tamanhoBarraEvento: " + tamanhoBarraEvento);
                    posicaoTextoEvento = dataInicio + 15
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
                                },
                            ],
                        });
                    } else {
                        const existingSubTipo = dadosEventoSubTipo.find(item => Object.keys(item)[0] === l.levelValues[0].subTipo);
                        if (!existingSubTipo) {
                            dadosEventoSubTipo.push({
                                [l.levelValues[0].subTipo]: [
                                    {
                                        posInin: dataInicio,
                                        width: tamanhoBarraEvento,
                                        cor: l.levelValues[0].cor,
                                        group: true
                                    },
                                ],
                            });
                        } else {
                            existingSubTipo[l.levelValues[0].subTipo].push({
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
                        .style("display", "flex")
                        // .style("padding-left", "30px")
                        // .style("width", "1147px")
                        .style("width", CHART_WIDTH + "px")
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
                        .style("width", "260px")
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
                        .style("width", "260px")
                        .text(textPrint)


                    // var eventoBarDiv = row3HierarquiaNomes.append("svg")
                    var eventoBarDiv = row3HierarquiaEventos.append("svg")
                        .attr("transform", function (d, i) {
                            if (dataFimTeste == "null") {
                                return `translate(${dataInicio - 15}, 0)`;
                            } else {
                                return `translate(${dataInicio}, 0)`;
                            }
                        })
                        .attr("height", 20)
                        .attr("width", function () {
                            if (dataFimTeste !== "null") {
                                tipoEventoBar.push({
                                    "posInin": dataInicio,
                                    "width": tamanhoBarraEvento,
                                    // "cor": l.levelValues[0].cor,
                                })
                                tipoCategoriaBar.push({
                                    "posInin": dataInicio,
                                    "width": tamanhoBarraEvento,
                                    // "cor": l.levelValues[0].cor,
                                })
                                return tamanhoBarraEvento
                            } else {
                                tipoEventoBar.push({
                                    "posInin": dataInicio,
                                    "width": 0,
                                    // "cor": l.levelValues[0].cor,
                                })
                                tipoCategoriaBar.push({
                                    "posInin": dataInicio,
                                    "width": 0,
                                    // "cor": l.levelValues[0].cor,
                                })
                                return tamanhoBarraEvento + 20
                            }
                        })
                        .attr("class", "eventoBarDiv")
                        .style("display", "block")

                    if (dataFimTeste == "null") {
                        var iconeDiv = eventoBarDiv
                            .attr("viewBox", [0, 0, 448, 512])
                            // .attr("height", 20)
                            .style("height", function (d) {
                                //verifica a quantidade de carcteres do nome, se tiver mais de 27 caracteres aumenta o tamanho do icone
                                if (l.levelValues[0].evento.length > 36) {
                                    return "42px";
                                } else {
                                    return "21px";
                                }

                            })
                            .attr("width", 30)
                            .append("path")
                            .attr("fill", function () {
                                if (l.levelValues[0].cor) {
                                    return "#" + l.levelValues[0].cor
                                } else {
                                    return "rgb(0, 0153, 128)"
                                }
                            }
                            )
                            .attr("d", iconsBase.diamond)

                    } else {

                        var iconeDiv = eventoBarDiv.append("rect")
                            .attr("fill", function () {
                                if (l.levelValues[0].cor) {
                                    return l.levelValues[0].cor
                                } else {
                                    return "rgb(0, 0153, 128)"
                                }
                            }
                            )
                            .style("height", "20px")
                            .attr("width", function (d) {
                                if (dataFimTeste != "null") {
                                    var dataFim = timeScale(l.levelValues[0].dataFim)
                                    tamanhoBarraEvento = dataFim - dataInicio
                                    return tamanhoBarraEvento
                                } else {
                                    return tamanhoBarraEvento + 20
                                }
                            })
                    }

                    // var eventoNomeDiv = row3HierarquiaNomes.append("svg")
                    var dadosEventoDiv = row3HierarquiaEventos.append("svg")
                        .attr("transform", function () {
                            return `translate(${posicaoTextoEvento}, 0)`;
                        })
                        .attr("height", 20)
                        .attr("class", "evento-div")
                        .style("display", "block")
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
                        // .style("padding-left", "30px")
                        .style("width", "1147px")
                        // .style("align-items", "center")
                        // .style("height", "21px")
                        .style("height", function (d) {
                            console.log("Object.keys(item)[0]: " + Object.keys(item)[0] + " - " + Object.keys(item)[0].length);

                            //verifica a quantidade de carcteres do nome, se tiver mais de 27 caracteres aumenta o tamanho do icone
                            if (Object.keys(item)[0].length > 31) {
                                return "42px";
                            } else {
                                return "21px";
                            }
                        })
                        .style("margin-bottom", "5px")

                    var testeRowEventos = row3Eventos.append("tr")
                        .attr("class", "row-modulo-evento")
                        // .attr("height", 20)
                        .style("height", function (d) {
                            //verifica a quantidade de carcteres do nome, se tiver mais de 27 caracteres aumenta o tamanho do icone
                            if (Object.keys(item)[0].toString.length > 31) {
                                return "42px";
                            } else {
                                return "21px";
                            }
                        })
                    // .style("padding-left", "5px")
                    // .style("width", "260px")
                    // .text(Object.keys(dadosEventoSubTipo[i])[0])

                    var barraGeralEvento = row3Eventos.append("g")
                        .attr("transform", `translate(0,0)`)
                        .attr("class", "evento-div3")

                    //parte referente ao nome dos eventos
                    var tableModulos3Nomes = tableModulos2HierarquiaNomes.append("table")
                        // .attr("class", "tableModulos3")
                        .attr("class", "row-modulo3-" + Object.keys(item)[0])
                        .style("display", "none")

                    var row3Nomes = tableModulos3Nomes.append("tr")
                        .style("display", "flex")
                        .style("padding-left", "30px")
                        .style("width", "1147px")
                        .style("margin-bottom", "5px")

                    var testeRowNomes = row3Nomes.append("tr")
                        .attr("class", "row-modulo-evento")
                        // .attr("height", 20)
                        .style("padding-left", "5px")
                        .style("width", "260px")
                        .text(Object.keys(dadosEventoSubTipo[i])[0])

                    // var barraGeralEvento = row3Nomes.append("g")
                    //     .attr("transform", `translate(0,0)`)
                    //     .attr("class", "evento-div3")

                    Object.keys(item).forEach((key, j) => {

                        item[key].forEach((gov, k) => {

                            var barraGeralEventoAgrupado = barraGeralEvento.append("svg")
                                .style("display", "flex")
                                .style("position", "absolute")
                                .attr("transform", function (f) {
                                    if (gov.width != 0) {
                                        return `translate(${gov.posInin},0)`
                                    } else {
                                        return `translate(${gov.posInin - 15},0)`
                                    }
                                })
                                // .attr("height", 20)
                                .style("height", function (d) {
                                    console.log("Object.keys(item)[0]: " + Object.keys(item)[0] + " - " + Object.keys(item)[0].length);

                                    //verifica a quantidade de carcteres do nome, se tiver mais de 27 caracteres aumenta o tamanho do icone
                                    if (Object.keys(item)[0].length > 31) {
                                        return "42px";
                                    } else {
                                        return "21px";
                                    }
                                })
                                .attr("width", function (f) {
                                    if (gov.width != 0) {
                                        tipoEventoBar.push({
                                            //adicionar a posição x do translate e o tamanho do width
                                            "posInin": gov.posInin,
                                            "width": gov.width,
                                        })
                                        tipoCategoriaBar.push({
                                            //adicionar a posição x do translate e o tamanho do width
                                            "posInin": gov.posInin,
                                            "width": gov.width,
                                        })
                                        return gov.width
                                    } else {
                                        tipoEventoBar.push({
                                            //adicionar a posição x do translate e o tamanho do width
                                            "posInin": gov.posInin,
                                            "width": 0,
                                        })
                                        tipoCategoriaBar.push({
                                            //adicionar a posição x do translate e o tamanho do width
                                            "posInin": gov.posInin,
                                            "width": 0,
                                        })
                                        return "30px"
                                    }
                                })
                            if (gov.width != 0) {
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
                                    .attr("width", 30)
                                    .append("path")
                                    .attr("fill", function () {
                                        if (gov.cor) {
                                            return "#" + gov.cor
                                        } else {
                                            return "rgb(10, 0, 250)"
                                        }
                                    })
                                    .attr("d", iconsBase.diamond)
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
                            return `translate(${item.posInin - 15},0)`
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
                    barraGeralTeste2.append("rect")
                        .attr("fill", "rgb(128, 52, 52)")
                        .attr("width", item.width)
                        .attr("height", 20)
                } else {
                    barraGeralTeste2.append("svg")
                        .attr("transform", `translate(${item.posInin},0)`)
                        .attr("height", 20)
                        .attr("width", 30)
                        .attr("viewBox", [0, 0, 448, 512])
                        .attr("height", 20)
                        .attr("width", 30)
                        .append("path")
                        .attr("fill", "rgb(128, 52, 52)")
                        .attr("d", iconsBase.diamond)
                }
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
                .style("display", "flex")
                .style("position", "absolute")
                .attr("transform", function (f) {
                    if (item.width != 0) {
                        return `translate(${item.posInin},0)`
                    } else {
                        return `translate(${item.posInin - 15},0)`
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
                barraGeralTeste2.append("rect")
                    .attr("fill", "rgb(128, 52, 52)")
                    .attr("width", item.width)
                    .attr("height", 20)
            } else {
                barraGeralTeste2.append("svg")
                    .attr("transform", `translate(${item.posInin},0)`)
                    .attr("height", 20)
                    .attr("width", 30)
                    .attr("viewBox", [0, 0, 448, 512])
                    .attr("height", 20)
                    .attr("width", 30)
                    .append("path")
                    .attr("fill", "rgb(128, 52, 52)")
                    .attr("d", iconsBase.diamond)
            }
        })
    });
}
