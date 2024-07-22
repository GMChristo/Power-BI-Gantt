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
var CHART_WIDTH = 1200;
var CHART_HEIGHT = 640;
var DATA_INICIAL = new Date("3000-01-01");
var DATA_FINAL = new Date("1500-01-01");
var dataMap = [];
var estruturaDados = [];
var dadosEstruturais = [];
var svgRoot;
var svgBase;
var testeHTML3;

export class Visual implements IVisual {
    private svgRootHTML: Selection<any>;

    constructor(options: VisualConstructorOptions) {
        this.svgRootHTML = d3.select(options.element).append("div").classed("card", true);
        svgBase = this.svgRootHTML
    }


    public update(options: VisualUpdateOptions) {

        console.log("dataMap0: " + dataMap);
        dataMap = [];
        estruturaDados = [];
        dadosEstruturais = [];
        console.log("dataMap1: " + dataMap);

        const dataView: DataView = options.dataViews[0];
        CHART_HEIGHT = options.viewport.height
        const matrixDataView: DataViewMatrix = dataView.matrix;
        const categorias = matrixDataView.rows.root.children;
        const estrutura = matrixDataView.rows.levels;
        const dadoEstrutura = estrutura[estrutura.length - 1].sources;


        const tagMainDiv = d3.selectAll(".main-div");
        tagMainDiv.remove();

        const tagMainSvg = d3.selectAll(".main-svg");
        tagMainSvg.remove();

        var testeHTMLTable = svgBase.append("div")
            .attr("class", "main-div")
            .style("margin-top", "40px")
            .style("position", "absolute")
            .style("height", CHART_HEIGHT - MARGIN_BOTTOM - MARGIN_TOP + "px")
            .style("width", CHART_WIDTH + MARGIN_RIGHT + "px")
            .style("overflow-y", "auto")
            .style("overflow-x", "hidden")
            .append("table")
        var testeHTML2 = testeHTMLTable.append("tr")
        testeHTML3 = testeHTML2.append("td")

        svgRoot = this.svgRootHTML.append("svg")
            .attr("class", "main-svg")
            .attr("width", CHART_WIDTH)
            .attr("height", MARGIN_TOP + MARGIN_TOP + CHART_HEIGHT);

        estruturaHierarquia(dadoEstrutura, estruturaDados) //retorna quais campos no visual foram preenchidos
        dadosEstruturais = estruturaDados;
        console.log("dadosEstruturais: " + JSON.stringify(dadosEstruturais));
        console.log("update 8");

        //! erro no hierarquiaTree ao remover um rotulo ou agrupamentoe fazer o reload 
        hierarquiaTree(categorias, 0, dataMap)
        console.log("update 9");
        preencheDataInicio(dataMap)
        preencheDataFim(dataMap)
        agrupamentoHierarquia(dataMap, dataAgrupado)

        const tagsetupScales = d3.selectAll(".grid");
        tagsetupScales.remove();
        const tagmilestone = d3.selectAll(".milestone");
        tagmilestone.remove();
        const tagtreeModulos = d3.selectAll('[class^="row-modulo-"]');
        tagtreeModulos.remove();

        setupScales(svgRoot, 1200, 600);
        treeModulos(dataMap, testeHTML3);
        milestone(svgRoot);
    }
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
}

function timeScaleAxis() {
    var tamanhoData = (d3.scaleTime()
        .domain([
            DATA_INICIAL,
            DATA_FINAL,
        ])
        .nice()
        .range([0, CHART_WIDTH - MARGIN_LEFT - MARGIN_RIGHT]));
    return tamanhoData;
}

function timeScale(data) {
    var parser = d3.timeParse("%d/%m/%Y");
    var parsedData = parser(data);


    var tamanhoData = (d3.scaleTime()
        .domain([
            DATA_INICIAL,
            DATA_FINAL,
        ])
        .nice()
        .range([0, CHART_WIDTH - MARGIN_LEFT - MARGIN_RIGHT]));

    if (!parsedData) {
        return tamanhoData(new Date(data));
    }
    else {
        return tamanhoData(parsedData);
    }
}

// Set up scales
/// calcular tamanho das escalas

function setupScales(svg, width, height) {

    var grid = svg.append("g")
        .attr("class", "grid")
        .attr("transform", `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`)
        .call(d3.axisTop(timeScaleAxis())
            .ticks(12)
            .tickSize(-CHART_HEIGHT)
            .tickSizeOuter(-CHART_HEIGHT)
            .tickFormat(d3.timeFormat("%b %Y")))
        .selectAll("text")
        .style("text-anchor", "middle")
        .attr("y", "-15")
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("font-size", 10)
        .attr("dy", "1em")
}

function milestone(svg) {
    var mile = svg.append("g")
        .attr("transform", function () {
            var hoje = timeScale(d3.timeDay(new Date()));
            return `translate(${hoje + MARGIN_LEFT})`;
        })
        .attr("class", "milestone")
        .append("line")
        .attr("y2", CHART_HEIGHT + 20)
        .attr("stroke", "red")
}
//rgb(204,0,0)
//TODO necessario fazer refatoração para que seja utilizado recursividade, tornando possivel o uso de N hierarquias
function treeModulos(data, svg) {
    data.forEach((d) => {
        var tipoCategoriaBar = []
        var tableModulos = svg.append("table")
            .attr("class", "row-modulo-" + d.nome)
            .attr("height", 20)

        var row = tableModulos.append("tr")
            .style("display", "flex")
            .attr("height", 20)
            .style("margin-bottom", "5px")

        var buttonPlus = row.append("button")
            .attr("class", "iconPlus-div")
            .on("click", function () {

                var eventoDiv = row.select(".evento-div")
                if (eventoDiv) {
                    eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
                }

                var eventoHide = row.select(".iconPlus-div")
                if (eventoHide) {
                    eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
                }
                var eventoShow = row.select(".iconMinus-div")
                if (eventoShow) {
                    eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
                }
                var segundaHierarquia = tableModulos.selectAll(".tableModulos2")
                if (segundaHierarquia) {
                    segundaHierarquia.style("display", segundaHierarquia.style("display") === "none" ? "contents" : "none");
                }
            })
            .append("svg")
            .attr("viewBox", [0, 0, 448, 512])
            .attr("height", 16)
            .attr("width", 14)
            .append("path")
            .attr("d", iconsBase.plus)

        var buttonMinus = row.append("button")
            .style("display", "none")
            .attr("class", "iconMinus-div")
            .on("click", function () {

                var eventoDiv = row.select(".evento-div")
                if (eventoDiv) {
                    eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
                }

                var eventoHide = row.select(".iconPlus-div")
                if (eventoHide) {
                    eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
                }
                var eventoShow = row.select(".iconMinus-div")
                if (eventoShow) {
                    eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
                }
                var segundaHierarquia = tableModulos.selectAll(".tableModulos2")
                if (segundaHierarquia) {
                    segundaHierarquia.style("display", segundaHierarquia.style("display") === "none" ? "contents" : "none");
                }

            })
            .append("svg")
            .attr("viewBox", [0, 0, 448, 512])
            .attr("height", 16)
            .attr("width", 14)
            .append("path")
            .attr("d", iconsBase.minor)


        row.append("div")
            .style("width", "260px")
            .style("padding-left", "5px")
            .attr("class", "text-div")
            .append("text")
            .attr("x", 10)
            .attr("height", 20)
            .attr("font-size", "12px")
            .text(d.nome)

        //!
        //! Segundo nivel da hierarquia
        //!


        d.dados.forEach((h, i) => {
            var tipoEventoBar = []
            var tableModulos2 = tableModulos.append("table")
                .attr("class", "tableModulos2")
                .style("display", "none")
                .style("padding-left", "15px")
                .style("margin-bottom", "5px")
                .attr("height", 20)

            var row2 = tableModulos2.append("tr")
                .style("display", "flex")
                .attr("height", 20)
                .style("padding-left", "15px")
                .style("margin-bottom", "5px")


            var buttonPlus = row2.append("button")
                .attr("class", "iconPlus-div2")
                .on("click", function () {

                    var eventoDiv2 = row2.select(".evento-div2")
                    if (eventoDiv2) {
                        eventoDiv2.style("display", eventoDiv2.style("display") === "none" ? "block" : "none");
                    }

                    var eventoHide = row2.select(".iconPlus-div2")
                    if (eventoHide) {
                        eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
                    }
                    var eventoShow = row2.select(".iconMinus-div2")
                    if (eventoShow) {
                        eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
                    }
                    var terceiraHierarquia = tableModulos2.selectAll(".tableModulos3")
                    if (terceiraHierarquia) {
                        terceiraHierarquia.style("display", terceiraHierarquia.style("display") === "none" ? "contents" : "none");
                    }
                })
                .append("svg")
                .attr("viewBox", [0, 0, 448, 512])
                .attr("height", 16)
                .attr("width", 14)
                .append("path")
                .attr("d", iconsBase.plus)

            var buttonMinus = row2.append("button")
                .style("display", "none")
                .attr("class", "iconMinus-div2")
                .on("click", function () {

                    var eventoDiv = row2.select(".evento-div2")
                    if (eventoDiv) {
                        eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
                    }

                    var eventoHide = row2.select(".iconPlus-div2")
                    if (eventoHide) {
                        eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
                    }
                    var eventoShow = row2.select(".iconMinus-div2")
                    if (eventoShow) {
                        eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
                    }
                    var terceiraHierarquia = tableModulos2.selectAll(".tableModulos3")
                    if (terceiraHierarquia) {
                        terceiraHierarquia.style("display", terceiraHierarquia.style("display") === "none" ? "contents" : "none");
                    }
                })
                .append("svg")
                .attr("viewBox", [0, 0, 448, 512])
                .attr("height", 16)
                .attr("width", 14)
                .append("path")
                .attr("d", iconsBase.minor)

            var testeRow = row2.append("tr")
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
                    tamanhoBarraEvento = dataFim - dataInicio
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
                                        group: true
                                    },
                                ],
                            });
                        } else {
                            existingSubTipo[l.levelValues[0].subTipo].push({
                                posInin: dataInicio,
                                width: tamanhoBarraEvento,
                                group: true
                            });
                        }
                    }
                } else {

                    var tableModulos3 = tableModulos2.append("table")
                        .attr("class", "tableModulos3")
                        .style("display", "none")

                    var row3 = tableModulos3.append("tr")
                        .style("display", "flex")
                        .style("padding-left", "30px")
                        .style("width", "1147px")
                        .style("align-items", "center")
                        .style("margin-bottom", "5px")

                    var testeRow3 = row3.append("tr")
                        .attr("class", "row-modulo-segundo")
                        .style("padding-left", "5px")
                        .style("width", "260px")
                        .text(l.levelValues[0].evento)

                    var eventoBarDiv = row3.append("svg")
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
                                })
                                tipoCategoriaBar.push({
                                    "posInin": dataInicio,
                                    "width": tamanhoBarraEvento,
                                })
                                return tamanhoBarraEvento
                            } else {
                                tipoEventoBar.push({
                                    "posInin": dataInicio,
                                    "width": 0,
                                })
                                tipoCategoriaBar.push({
                                    "posInin": dataInicio,
                                    "width": 0,
                                })
                                return tamanhoBarraEvento + 20
                            }
                        })
                        .attr("class", "eventoBarDiv")
                        .style("display", "block")

                    if (dataFimTeste == "null") {
                        var iconeDiv = eventoBarDiv
                            .attr("viewBox", [0, 0, 448, 512])
                            .attr("height", 20)
                            .attr("width", 30)
                            .append("path")
                            .attr("d", iconsBase.diamond)

                    } else {

                        var iconeDiv = eventoBarDiv.append("rect")
                            .attr("fill", function () {
                                return "rgb(0, 0153, 128)"
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

                    var eventoNomeDiv = row3.append("svg")
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

            if (dadosEventoSubTipo.length != 0) {
                dadosEventoSubTipo.forEach((item, i) => {
                    var tableModulos3 = tableModulos2.append("table")
                        .attr("class", "tableModulos3")
                        .style("display", "none")

                    var row3 = tableModulos3.append("tr")
                        .style("display", "flex")
                        .style("padding-left", "30px")
                        .style("width", "1147px")
                        .style("margin-bottom", "5px")

                    var testeRow = row3.append("tr")
                        .attr("class", "row-modulo-evento")
                        // .attr("height", 20)
                        .style("padding-left", "5px")
                        .style("width", "260px")
                        .text(Object.keys(dadosEventoSubTipo[i])[0])

                    var barraGeralEvento = row3.append("g")
                        .attr("transform", `translate(0,0)`)
                        .attr("class", "evento-div3")

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
                                .attr("height", 20)
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
                                    // .attr("fill", "rgb(90, 3, 150)")
                                    .attr("fill", "rgb(128, 52, 52)")
                                    .attr("width", gov.width)
                                    .attr("height", 20)
                            } else {
                                barraGeralEventoAgrupado
                                    .attr("viewBox", [0, 0, 448, 512])
                                    .attr("height", 20)
                                    .attr("width", 30)
                                    .append("path")
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
            var barraGeralTeste = row2.append("g")
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



        var barraGeralTeste = row.append("g")
            .attr("transform", `translate(0,0)`)
            .attr("class", "evento-div")

        tipoCategoriaBar.forEach((item, i) => {
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
    });
}
