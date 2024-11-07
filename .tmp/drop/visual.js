var ganttChart_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B7: () => (/* binding */ arrow_right),
/* harmony export */   E3: () => (/* binding */ base),
/* harmony export */   Pt: () => (/* binding */ icons),
/* harmony export */   rE: () => (/* binding */ arrow_down),
/* harmony export */   vb: () => (/* binding */ vb)
/* harmony export */ });
/* unused harmony exports plus, minor */
const plus = "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z";
const minor = "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z";
const arrow_down = "M 53.832031 239.640625 L 383.988281 569.800781 L 714.148438 239.640625 L 672.730469 198.222656 L 383.988281 486.964844 L 95.25 198.226562 Z M 53.832031 239.640625";
const arrow_right = "M 259.28125 714.15625 L 589.4375 384 L 259.277344 53.84375 L 217.863281 95.257812 L 506.605469 384 L 217.863281 672.738281 Z M 259.28125 714.15625 ";
// export const arrow_down = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
// export const arrow_right = "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
const base = "M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z";
const vb = [
    [0, 0, 448, 512],
    [0, 0, 448, 512],
    [0, 0, 448, 512],
    [0, 0, 448, 512],
    [300, 0, 810, 860],
    [0, 0, 448, 512],
    [0, 0, 448, 512],
    [0, 0, 448, 512],
    [0, 0, 448, 512],
    [300, 0, 810, 860],
];
/*
"M
6112,
93 L
6281,
766
6101,
766
6397,
1403
6212,
1416
6500,
2402
5733,
1429
5954,
1425
5483,
809
5749,
784
5251,
137
6112,
93
z"
*/
const icons = [
    "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z",
    "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z",
    "M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z",
    "M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z",
    "M681 890 c-86 -114 -80 -110 -186 -110 -52 0 -95 -2 -95 -5 0 -3 9 -46 20 -96 11 -50 17 -96 13 -102 -4 -7 -31 -42 -60 -78 -29 -36 -53 -68 -53 -71 0 -2 40 -23 89 -47 l88 -44 22 -98 c12 -55 24 -99 27 -99 2 0 40 18 84 40 44 22 87 40 95 40 8 0 51 -18 95 -40 44 -22 82 -40 84 -40 3 0 15 44 27 99 l22 98 88 44 c49 24 89 45 89 47 0 3 -24 35 -53 71 -29 36 -56 71 -60 78 -4 6 2 52 13 102 11 50 20 93 20 96 0 3 -42 5 -92 5 -51 0 -98 4 -104 8 -6 4 -37 41 -70 82 l-60 76 -43 -56z",
    "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z",
    "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z",
    "M 6112,93 L 6281,766 6101,766 6397,1403 6212,1416 6500,2402 5733,1429 5954,1425 5483,809 5749,784 5251,137 6112, 93z",
    "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z",
    "M250 495 l0 -405 203 0 202 0 203 203 202 202 -203 203 -202 202 -203 0 -202 0 0 -405z"
];
/*
4 "M404.2 309.5L383.1 344h42.3l-21.1-34.5zM371.4 256l-54-88H194.6l-54 88 54 88H317.4l54-88zm65.7 0l53.4 87c3.6 5.9 5.5 12.7 5.5 19.6c0 20.7-16.8 37.4-37.4 37.4H348.7l-56.2 91.5C284.8 504.3 270.9 512 256 512s-28.8-7.7-36.6-20.5L163.3 400H53.4C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87L21.5 169c-3.6-5.9-5.5-12.7-5.5-19.6C16 128.8 32.8 112 53.4 112H163.3l56.2-91.5C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5L348.7 112H458.6c20.7 0 37.4 16.8 37.4 37.4c0 6.9-1.9 13.7-5.5 19.6l-53.4 87zm-54-88l21.1 34.5L425.4 168H383.1zM283 112L256 68l-27 44h54zM128.9 168H86.6l21.1 34.5L128.9 168zM107.8 309.5L86.6 344h42.3l-21.1-34.5zM229 400l27 44 27-44H229z",
7 "M18.86 11.27l-3.23-8A2 2 0 0 0 13.72 2H9.38a2.06 2.06 0 0 0-1.71.9 2 2 0 0 0-.19 1.84L8.81 8H7.05A2 2 0 0 0 5.18 9.18a2 2 0 0 0 .29 2.1l8.8 10.37A1 1 0 0 0 15 22a1.12 1.12 0 0 0 .47-.11 1 1 0 0 0 .5-1.15L14.19 14H17a2.06 2.06 0 0 0 1.71-.9A2 2 0 0 0 18.86 11.27Z",
7 "M576 1139 c-82 -5 -151 -11 -153 -13 -2 -2 39 -60 91 -127 l96 -124 -38 -3 c-68 -5 -68 -6 27 -129 l90 -118 -41 -5 -40 -5 163 -207 c89 -114 164 -206 167 -204 2 2 -22 89 -52 192 -31 103 -56 194 -56 200 0 7 15 14 34 16 l34 3 -48 103 c-68 143 -68 142 -31 142 17 0 31 3 31 6 0 3 -11 51 -26 107 -47 191 -42 177 -72 176 -15 -1 -94 -6 -176 -10z",
7 "M 16412,10393 L 16581,11066 16401,11066 16697,11703 16512,11716 16800,12702 16033,11729 16254,11725 15783,11109 16049,11084 15551,10437 16412,10393z",
//arrow_
0 play = "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
1 star = "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
2 ban = "M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
3 diamond = "M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"
4 star2 = "M404.2 309.5L383.1 344h42.3l-21.1-34.5zM371.4 256l-54-88H194.6l-54 88 54 88H317.4l54-88zm65.7 0l53.4 87c3.6 5.9 5.5 12.7 5.5 19.6c0 20.7-16.8 37.4-37.4 37.4H348.7l-56.2 91.5C284.8 504.3 270.9 512 256 512s-28.8-7.7-36.6-20.5L163.3 400H53.4C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87L21.5 169c-3.6-5.9-5.5-12.7-5.5-19.6C16 128.8 32.8 112 53.4 112H163.3l56.2-91.5C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5L348.7 112H458.6c20.7 0 37.4 16.8 37.4 37.4c0 6.9-1.9 13.7-5.5 19.6l-53.4 87zm-54-88l21.1 34.5L425.4 168H383.1zM283 112L256 68l-27 44h54zM128.9 168H86.6l21.1 34.5L128.9 168zM107.8 309.5L86.6 344h42.3l-21.1-34.5zM229 400l27 44 27-44H229z"
5 aprove = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
6 circle = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
7 thunder = "M18.86,11.27l-3.23-8A2,2,0,0,0,13.72,2H9.38a2.06,2.06,0,0,0-1.71.9,2,2,0,0,0-.19,1.84L8.81,8H7.05A2,2,0,0,0,5.18,9.18a2,2,0,0,0,.29,2.1l8.8,10.37A1,1,0,0,0,15,22a1.12,1.12,0,0,0,.47-.11,1,1,0,0,0,.5-1.15L14.19,14H17a2.06,2.06,0,0,0,1.71-.9A2,2,0,0,0,18.86,11.27Z"
8 square = "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z":
9 flag = "M250 495 l0 -405 203 0 202 0 203 203 202 202 -203 203 -202 202 -203 0 -202 0 0 -405z"
*/


/***/ }),

/***/ 4283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3737);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(756);




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
var formatoEscala = d3__WEBPACK_IMPORTED_MODULE_0__/* .utcFormat */ .aLc("%b %Y");
var corLinha = ["#F1F3F5", "#DEE2E6"];
// #F1F3F5
// #DEE2E6
var tamanhoScalaExib = 100;
// var corPrimaria = [{"1" : "006432"}, {"2" : "93A100"}, {"3" : "00867F"}]
var corPrimaria = { "1": "006432", "2": "93A100", "3": "00867F" };
// var tooltip
// var tooltip = svgBase.append("div")
var tooltip = d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ltv("body").append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "#f9f9f9")
    .style("border", "1px solid #d3d3d3")
    .style("padding", "5px")
    .style("border-radius", "5px")
    .style("box-shadow", "0px 0px 5px 0px #000000")
    // .style("right", "0px")
    .style("top", "0px")
    .style("left", "0px")
    .style("width", "fit-content");
// .style("height", "50px")
// .style("z-index", "-1");
class Visual {
    svgRootHTML;
    constructor(options) {
        this.svgRootHTML = d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ltv(options.element).append("div").classed("card", true);
        svgBase = this.svgRootHTML;
    }
    update(options) {
        // console.log("dataMap0: " + dataMap);
        dataMap = [];
        estruturaDados = [];
        dadosEstruturais = [];
        DATA_INICIAL = new Date("3000-01-01");
        DATA_FINAL = new Date("1500-01-01");
        // console.log("dataMap1: " + dataMap);
        const dataView = options.dataViews[0];
        // console.log("dados iniciais dataView: " + JSON.stringify(options));
        CHART_HEIGHT = options.viewport.height;
        CHART_WIDTH = options.viewport.width;
        // tamanhoScalaExib = CHART_WIDTH * 2.2
        const matrixDataView = dataView.matrix;
        // console.log("matrixDataView: " + JSON.stringify(matrixDataView));
        const categorias = matrixDataView.rows.root.children;
        // console.log("dados iniciais dataView: " + JSON.stringify(categorias));
        const estrutura = matrixDataView.rows.levels;
        const dadoEstrutura = estrutura[estrutura.length - 1].sources;
        const tipoDeEscala = options.dataViews[0].metadata.columns;
        estruturaEscala(tipoDeEscala);
        // console.log("estruturaEscala tipoEscalaGrafico: " + tipoEscalaGrafico);
        estruturaHierarquia(dadoEstrutura, estruturaDados); //retorna quais campos no visual foram preenchidos
        dadosEstruturais = estruturaDados;
        hierarquiaTree(categorias, 0, dataMap);
        // console.log("DATA_INICIAL antes: " + DATA_INICIAL);
        // console.log("DATA_FINAL antes: " + DATA_FINAL);
        preencheDataInicio(dataMap);
        preencheDataFim(dataMap);
        // console.log("DATA_INICIAL depois: " + DATA_INICIAL);
        // console.log("DATA_FINAL depois: " + DATA_FINAL);
        defineEscala();
        // console.log("tamanhoScalaExib: " + tamanhoScalaExib);
        agrupamentoHierarquia(dataMap, dataAgrupado);
        const tagMainDiv = d3__WEBPACK_IMPORTED_MODULE_0__/* .selectAll */ .Ubm(".main-div");
        tagMainDiv.remove();
        const tagMainSvg = d3__WEBPACK_IMPORTED_MODULE_0__/* .selectAll */ .Ubm(".main-svg");
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
            .attr("class", "main-table");
        var mainTableTr = mainDivTable.append("tr");
        var tamanhoExibicaoHeight = CHART_HEIGHT - MARGIN_TOP - MARGIN_TOP;
        nomesEventoTdHTML = mainTableTr.append("td")
            .attr("class", "mainTdNomes")
            .style("width", "600px")
            .style("background-color", "white")
            .style("max-width", "300px")
            .style("height", "-webkit-fill-available")
            .style("margin-top", "21px")
            .style("padding-bottom", MARGIN_TOP + "px")
            .style("vertical-align", "top")
            .style("position", "fixed")
            .style("overflow-x", "auto")
            // .style("overflow-y", "hidden")
            .style("border", "1px solid");
        // .style("::-webkit-scrollbar:vertical", "display: none")
        // .style("::-webkit-scrollbar:horizontal", "display: block")
        // .style("scrollbar-width", "none")
        dadosEventoTdHTML = mainTableTr.append("td")
            .attr("class", "mainTdEventos")
            // .style("height", tamanhoExibicaoHeight + "px")
            .style("width", tamanhoScalaExib + "px")
            .style("height", "-webkit-fill-available")
            .style("margin-top", "21px")
            .style("vertical-align", "top")
            // .style("overflow-y", "hidden")
            .style("overflow-y", "auto")
            .style("position", "fixed")
            // .style("max-width", "fit-content")
            .style("max-width", "-webkit-fill-available")
            .style("border", "1px solid")
            .style("left", "310px");
        var testeRegulagemAltura = dadosEventoTdHTML.append("div")
            .attr("class", "divMainTdEventos")
            .style("max-width", CHART_WIDTH - 300 + "px");
        //necessario para criar as escalas
        svgRoot = testeRegulagemAltura
            .append("svg")
            .attr("class", "main-svg")
            .style("width", tamanhoScalaExib + MARGIN_RIGHT * 2 + "px")
            .style("height", "-webkit-fill-available")
            // .style("height", "10000px")
            .style("position", "absolute")
            .style("top", "-40px")
            .style("left", "0px")
            // .style("z-index", "-1")
            .style("z-index", "0");
        dadosEventoScaleTdHTML = mainTableTr.append("td")
            .attr("class", "mainTdScale")
            .style("height", "30px")
            // .style("width", 30 + "px")
            .style("width", tamanhoScalaExib + "px")
            .style("vertical-align", "top")
            // .style("overflow-y", "hidden")
            .style("overflow-x", "hidden")
            .style("max-width", "fit-content")
            .style("left", "310px")
            .style("padding-left", "7px");
        var testeRegulagemScala2 = dadosEventoScaleTdHTML.append("div")
            .style("width", "310px")
            .style("height", "20px")
            .style("left", "00px")
            .style("position", "absolute")
            .style("background-color", "white");
        var testeRegulagemScala = dadosEventoScaleTdHTML.append("div")
            .attr("class", "divMainTdScala")
            // .style("display", "flex")
            .style("max-width", CHART_WIDTH - 300 + "px");
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
        fixedScale = testeRegulagemScala
            .append("svg")
            .attr("class", "fixed-scale")
            // .style("width", tamanhoScalaExib + MARGIN_RIGHT * 2 + "px")
            .style("width", tamanhoScalaExib + MARGIN_RIGHT * 2 + "px")
            .style("height", "30px")
            .style("margin-left", "302px")
            .style("padding-right", "50px")
            .style("top", "0px")
            .style("left", "0px");
        var dadosEventoHTML = testeRegulagemAltura.append("div")
            .attr("class", "main-eventos")
            // .style("padding-top", MARGIN_TOP * 2 + "px")
            .style("padding-top", "3px")
            .style("width", tamanhoScalaExib + "px");
        const tagsetupScales = d3__WEBPACK_IMPORTED_MODULE_0__/* .selectAll */ .Ubm(".grid");
        tagsetupScales.remove();
        const tagmilestone = d3__WEBPACK_IMPORTED_MODULE_0__/* .selectAll */ .Ubm(".milestone");
        tagmilestone.remove();
        const tagtreeModulos = d3__WEBPACK_IMPORTED_MODULE_0__/* .selectAll */ .Ubm('[class^="row-modulo-nome-"]');
        tagtreeModulos.remove();
        const tagfixedScales = d3__WEBPACK_IMPORTED_MODULE_0__/* .selectAll */ .Ubm(".grid2");
        tagfixedScales.remove();
        posDataFinal = timeScale(DATA_FINAL);
        // console.log("tamanhoScalaExib: " + tamanhoScalaExib);
        setupScales(svgRoot, tamanhoScalaExib, 600);
        fixedScales(fixedScale, tamanhoScalaExib, 600);
        milestone(svgRoot);
        // console.log("dataMap: " + JSON.stringify(dataMap));
        treeModulos(dataMap, nomesEventoTdHTML, dadosEventoHTML);
        dadosExpandidos(nomesEventoTdHTML, dadosEventoHTML); // mantem as linhas em exibição apos atualizar o visual
        //seleciona as td que tem os nomes e os eventos e cria um listener para caso seja feita a rolagem em uma o evento tb ser executada na outra
        const mainTdNomes = document.querySelector(".mainTdNomes");
        const mainTdEventos = document.querySelector(".mainTdEventos");
        const mainTdScale = document.querySelector(".mainTdScale");
        mainTdNomes.addEventListener('scroll', function () {
            // Define a posição de rolagem da segunda tabela para a posição de rolagem da primeira
            mainTdEventos.scrollTop = mainTdNomes.scrollTop;
        });
        // Adiciona um listener de evento para o evento de rolagem na segunda tabela
        mainTdEventos.addEventListener('scroll', function () {
            // Define a posição de rolagem da primeira tabela para a posição de rolagem da segunda
            mainTdNomes.scrollTop = mainTdEventos.scrollTop;
        });
        const td = document.querySelector('.mainTdNomes');
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
    }
}
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Adiciona zero à esquerda se necessário
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
function defineEscala() {
    const inicio = new Date(DATA_INICIAL);
    const fim = new Date(DATA_FINAL);
    var resultadoTamanhoEscala;
    if (tipoEscalaGrafico == "Ano") {
        resultadoTamanhoEscala = fim.getFullYear() - inicio.getFullYear();
        if (resultadoTamanhoEscala > 12) {
            tamanhoScalaExib = resultadoTamanhoEscala * (CHART_WIDTH / 12);
        }
        else {
            tamanhoScalaExib = CHART_WIDTH - 304;
        }
        escalaTickSize = d3__WEBPACK_IMPORTED_MODULE_0__/* .utcYear */ .MbY.every(1);
    }
    if (tipoEscalaGrafico == "Trimestre") {
        resultadoTamanhoEscala = (fim.getFullYear() - inicio.getFullYear()) * 12 + fim.getMonth() - inicio.getMonth();
        if (resultadoTamanhoEscala > 12) {
            tamanhoScalaExib = resultadoTamanhoEscala * ((CHART_WIDTH / 12) / 3);
        }
        else {
            tamanhoScalaExib = CHART_WIDTH - 304;
        }
        escalaTickSize = d3__WEBPACK_IMPORTED_MODULE_0__/* .utcMonth */ .R6t.every(3);
        // tickEspacamento = -(tamanhoScalaExib / resultadoTamanhoEscala) / 10
    }
    if (tipoEscalaGrafico == "Mês") {
        resultadoTamanhoEscala = (fim.getFullYear() - inicio.getFullYear()) * 12 + fim.getMonth() - inicio.getMonth();
        if (resultadoTamanhoEscala > 12) {
            tamanhoScalaExib = resultadoTamanhoEscala * (CHART_WIDTH / 12);
        }
        else {
            tamanhoScalaExib = CHART_WIDTH - 304;
        }
        escalaTickSize = d3__WEBPACK_IMPORTED_MODULE_0__/* .utcMonth */ .R6t.every(1);
        // tickEspacamento = -(tamanhoScalaExib / resultadoTamanhoEscala) / 10
    }
    if (tipoEscalaGrafico == "Dia") {
        resultadoTamanhoEscala = Math.floor((fim.getTime() - inicio.getTime()) / (1000 * 3600 * 24));
        // console.log("resultadoTamanhoEscala: " + resultadoTamanhoEscala);
        if (resultadoTamanhoEscala > 12) {
            tamanhoScalaExib = resultadoTamanhoEscala * 80;
        }
        else {
            tamanhoScalaExib = CHART_WIDTH - 304;
        }
        // formatoEscala = d3.timeFormat("%d %b %Y")
        formatoEscala = d3__WEBPACK_IMPORTED_MODULE_0__/* .utcFormat */ .aLc("%d %b %Y");
        escalaTickSize = d3__WEBPACK_IMPORTED_MODULE_0__/* .utcDay */ .dAM.every(1);
        // tickEspacamento = 55
    }
}
function dadosExpandidos(svgHierarquiaNomes, svgHierarquiaEventos) {
    exibir.forEach((e) => {
        var categoriaExibirNomes = svgHierarquiaNomes.selectAll('[class^="' + e + '"]');
        if (categoriaExibirNomes.nodes().length > 0) {
            // var eventoDiv = categoriaExibirNomes.select('[class^="evento-div"]')
            // if (eventoDiv) {
            //     eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
            // }
            var eventoHide = categoriaExibirNomes.select('[class^="iconPlus-div"]');
            if (eventoHide) {
                eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
            }
            var eventoShow = categoriaExibirNomes.select('[class^="iconMinus-div"]');
            if (eventoShow) {
                eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
            }
            //!TODO rgb(204,0,0) verificar a logica abaixo pois pode ser otimizada para uso parecido do else .querySelectorAll(`.${e} > [class*="row-modulo2-"]`).length > 0) 
            var segundaHierarquia = categoriaExibirNomes.selectAll('[class^="row-modulo2-"]');
            // console.log("else categoriaExibir HTML: " + e + " - " + categoriaExibir.nodes()[0].outerHTML);
            if (segundaHierarquia) {
                if (!categoriaExibirNomes.selectAll('[class^="ocultar"]').empty()) {
                    // console.log("if");
                    // console.log("e: " + e);
                    var segundaHierarquia2 = categoriaExibirNomes.selectAll('[class^="row-modulo2-null"]');
                    if (segundaHierarquia2) {
                        segundaHierarquia2.style("display", segundaHierarquia2.style("display") === "none" ? "contents" : "none");
                    }
                    // console.log("else categoriaExibir HTML: " + e + " - " + categoriaExibir.nodes()[0].outerHTML);
                    var segundaHierarquia2 = categoriaExibirNomes.selectAll('[class^="ocultar"]');
                    // console.log("segundaHierarquia2 HTML: " + e + " - " + segundaHierarquia2.nodes()[0].outerHTML);
                    if (segundaHierarquia2.size() > 0) {
                        segundaHierarquia2.style('display', 'none');
                    }
                    var terceiraHierarquia = categoriaExibirNomes.selectAll('[class^="row-modulo3-"]');
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
                    }
                    catch (error) {
                        // console.log("catch: ");
                    }
                }
            }
        }
        // console.log("dados expandios evento");
        var categoriaExibirEventos = svgHierarquiaEventos.selectAll('[class^="' + e + '"]');
        if (categoriaExibirEventos.nodes().length > 0) {
            var eventoDivEvento = categoriaExibirEventos.select('[class^="evento-div"]');
            if (eventoDivEvento) {
                eventoDivEvento.style("display", eventoDivEvento.style("display") === "none" ? "block" : "none");
            }
            //!TODO rgb(204,0,0) verificar a logica abaixo pois pode ser otimizada para uso parecido do else .querySelectorAll(`.${e} > [class*="row-modulo2-"]`).length > 0) 
            var segundaHierarquiaEvento = categoriaExibirEventos.selectAll('[class^="row-modulo2-"]');
            if (segundaHierarquiaEvento) {
                if (!categoriaExibirEventos.selectAll('[class^="ocultar"]').empty()) {
                    var segundaHierarquia2Evento = categoriaExibirEventos.selectAll('[class^="row-modulo2-null"]');
                    if (segundaHierarquia2Evento) {
                        segundaHierarquia2Evento.style("display", segundaHierarquia2Evento.style("display") === "none" ? "contents" : "none");
                    }
                    var segundaHierarquia2Evento = categoriaExibirEventos.selectAll('[class^="ocultar"]');
                    if (segundaHierarquia2Evento.size() > 0) {
                        segundaHierarquia2Evento.style('display', 'none');
                    }
                    var terceiraHierarquiaEvento = categoriaExibirEventos.selectAll('[class^="row-modulo3-"]');
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
                    }
                    catch (error) {
                        // console.log("catch: ");
                    }
                }
            }
        }
    });
}
var dataAgrupado = [];
function agrupamentoHierarquia(dataMap, dataAgrupado) {
    dataMap.forEach((data, i) => {
        if (data.dados) {
            dataAgrupado.push({
                level: data.level,
                nome: data.nome,
                qtdSub: data.qtdSub,
                dados: []
            });
            agrupamentoHierarquia(data.dados, dataAgrupado[i].dados);
        }
        else if (data.levelValues) {
            agrupamentoHierarquia(data.levelValues, dataAgrupado);
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
            });
        }
    });
}
function estruturaEscala(element) {
    var key = "escala";
    for (var i = 0; i < element.length; i++) {
        if (key in element[i].roles) {
            tipoEscalaGrafico = element[i].displayName;
        }
    }
}
function estruturaHierarquia(element, estruturaDados) {
    var roleName = "";
    var displayName = "";
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
        });
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
            });
            hierarquiaTree(element[i].children, lvl + 1, dataMap[i].dados);
        }
        else if ("levelValues" in element[i]) {
            dataMap.push({
                level: lvl,
                levelValues: []
            });
            hierarquiaTree(element[i].levelValues, lvl + 1, dataMap[i].levelValues);
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
                    cat = e.index;
                }
                else if (e.roleName == "subTipo") {
                    sTipo = e.index;
                }
                else if (e.roleName == "dataInicial") {
                    dIni = e.index;
                }
                else if (e.roleName == "dataFinal") {
                    dFim = e.index;
                }
                else if (e.roleName == "rotulo") {
                    rot.push(e.index);
                }
                else if (e.roleName == "icone") {
                    icon = e.index;
                }
                else if (e.roleName == "cor") {
                    cor = e.index;
                }
            });
            if (dataMap.length == 0) {
                dataMap.push({
                    evento: element[cat].value,
                    ...(element[sTipo] && { subTipo: element[sTipo].value }),
                    dataInicio: element[dIni].value,
                    dataFim: element[dFim].value,
                    ...(rot.map(r => element[r].value).filter(v => v !== null && v !== undefined && v !== "null").join(' - ') !== '' && { rot: rot.map(r => element[r].value).filter(v => v !== null && v !== undefined && v !== "null").join(' - ') }),
                    ...(element[icon] && { icon: element[icon].value }),
                    ...(element[cor] && { cor: element[cor].value }),
                });
            }
            else {
                return;
            }
        }
        else {
            return;
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
    DATA_INICIAL = DATA_INICIAL_SF;
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
    DATA_FINAL = new Date(lastDayOfMonthString);
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
    DATA_FINAL = DATA_FINAL_SF;
    console.log("preencheDataFim DATA_FINAL_SF: " + DATA_FINAL_SF);
    // console.log("lastDayOfMonthString: " + lastDayOfMonthString);
    //timeScaleAxis DATA_FINAL: Fri Jan 30 2026 21:00:00 GMT-0300 (Horário Padrão de Brasília)
}
function timeScaleAxis() {
    // console.log("timeScaleAxis DATA_INICIAL: " + DATA_INICIAL.toUTCString());
    // console.log("timeScaleAxis new Date(DATA_INICIAL): " + new Date(Date.UTC(2024, 0, 1, 0, 0)));
    // console.log("timeScaleAxis DATA_FINAL: " + DATA_FINAL.toUTCString());
    // console.log("timeScaleAxis new Date (DATA_FINAL): " + new Date(Date.UTC(2025, 9, 1, 0, 0)));
    var tamanhoData = (d3__WEBPACK_IMPORTED_MODULE_0__/* .scaleUtc */ .Pps()
        // var tamanhoData = (d3.scaleTime()
        .domain([
        // dataInicialCom3h,
        // dataFinalCom3h,
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
const xScale = d3__WEBPACK_IMPORTED_MODULE_0__/* .scaleTime */ .w7C()
    .domain([DATA_INICIAL, DATA_FINAL])
    .range([0, tamanhoScalaExib]);
function timeScale(data) {
    var parser = d3__WEBPACK_IMPORTED_MODULE_0__/* .timeParse */ .T6w("%d/%m/%Y");
    var parsedData = parser(data);
    // var tamanhoData = (d3.scaleTime()
    var tamanhoData = (d3__WEBPACK_IMPORTED_MODULE_0__/* .scaleUtc */ .Pps()
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
function setupScales(svg, width, height) {
    var grid = svg.append("g")
        .attr("class", "grid")
        .style("height", "1200px")
        .attr("transform", `translate(0, ${MARGIN_TOP})`)
        .call(d3__WEBPACK_IMPORTED_MODULE_0__/* .axisTop */ .tlR(timeScaleAxis())
        .ticks(escalaTickSize)
        .tickFormat(formatoEscala)
        .tickSize(-12000))
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
        .attr("dy", "1em");
}
function fixedScales(svg, width, height) {
    var grid = svg.append("g")
        .attr("class", "grid2")
        .style("height", "30px")
        .attr("transform", `translate(0, ${MARGIN_TOP})`)
        .call(d3__WEBPACK_IMPORTED_MODULE_0__/* .axisTop */ .tlR(timeScaleAxis())
        .ticks(escalaTickSize)
        .tickFormat(formatoEscala)
    // .tickSize(-12000)
    );
}
function milestone(svg) {
    var mile = svg.append("g")
        .attr("transform", function () {
        var hoje = timeScale(d3__WEBPACK_IMPORTED_MODULE_0__/* .timeMinute */ .wXd(new Date()));
        // var hoje = timeScale(new Date(data));
        return `translate(${hoje})`;
    })
        .attr("class", "milestone")
        .append("line")
        .attr("y2", 9995 + 20)
        .attr("stroke", "#ED1D29");
}
//rgb(204,0,0)
//TODO necessario fazer refatoração para que seja utilizado recursividade, tornando possivel o uso de N hierarquias
function treeModulos(data, svgHierarquiaNomes, svgHierarquiaEventos) {
    // console.log("treeModulos data: " + JSON.stringify(data));
    data.forEach((d, index) => {
        var tipoCategoriaBar = [];
        var corBackgroundSegundoNivel = index;
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
            .style("height", "20px");
        // .style("width", CHART_WIDTH +"px")
        var rowEventos = tableModulosHierarquiaEventos.append("tr")
            .style("display", "flex")
            .style("height", "20px")
            .style("width", tamanhoScalaExib + "px")
            .style("background-color", function () {
            // console.log("i: " +index + " - " + corLinha[index % 2])
            return corLinha[index % 2];
        })
            // .style("width", CHART_WIDTH + "px")
            .style("margin-bottom", "5px");
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
            // .attr("class", "row-modulo-" + d.nome)
            .attr("class", "row-modulo-nome-" + d.nome)
            .style("width", "-webkit-fill-available")
            .attr("height", 20)
            .style("background-color", "azure")
            .style("background-color", "#" + Object.values(corPrimaria)[index % Object.keys(corPrimaria).length]);
        var rowHierarquia = tableModulosHierarquiaNomes.append("tr")
            .style("display", "flex")
            .attr("height", 20)
            .style("width", "290px")
            .style("margin-bottom", "5px");
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
            const td = document.querySelector('.mainTdNomes');
            var larguraRolagem = td.scrollWidth;
            // console.log('Largura da div antes: ' + larguraRolagem + 'px');
            // const divMainTdEventos = tableModulosHierarquiaEventos.querySelector('.divMainTdEventos')
            // const divMainTdEventos = tableModulosHierarquiaEventos.select(".divMainTdEventos")
            // const divMainTdEventos = document.querySelector(".divMainTdEventos")
            // console.log("divMainTdEventos: " + divMainTdEventos)
            // console.log("divMainTdEventos: " + JSON.stringify(divMainTdEventos))
            // exibir.push("row-modulo-" + d.nome)
            exibir.push("row-modulo-nome-" + d.nome);
            var eventoHide = rowHierarquia.select(".iconPlus-div");
            if (eventoHide) {
                eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
            }
            var eventoShow = rowHierarquia.select(".iconMinus-div");
            if (eventoShow) {
                eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
            }
            var segundaHierarquia = tableModulosHierarquiaNomes.selectAll('[class^="row-modulo2-"]');
            if (segundaHierarquia) {
                segundaHierarquia.style("display", segundaHierarquia.style("display") === "none" ? "contents" : "none");
            }
            try {
                var segundaHierarquia2 = tableModulosHierarquiaNomes.selectAll('[class^="ocultar"]');
                if (segundaHierarquia2) {
                    segundaHierarquia2.style("display", segundaHierarquia2.style("display") === "none" ? "contents" : "none");
                }
                var terceiraHierarquia = tableModulosHierarquiaNomes.selectAll('[class^="row-modulo3-"]');
                if (terceiraHierarquia) {
                    terceiraHierarquia.style("display", terceiraHierarquia.style("display") === "none" ? "contents" : "none");
                }
            }
            catch (error) {
                // console.log("erro catch: " + error);
            }
            // altera a propriedade de exibição na parte de eventos
            var eventoDiv = rowEventos.select(".evento-div");
            if (eventoDiv) {
                eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
            }
            var segundaHierarquiaEventos = tableModulosHierarquiaEventos.selectAll('[class^="row-modulo2-"]');
            if (segundaHierarquiaEventos) {
                segundaHierarquiaEventos.style("display", segundaHierarquiaEventos.style("display") === "none" ? "contents" : "none");
            }
            try {
                var segundaHierarquia2Eventos = tableModulosHierarquiaEventos.selectAll('[class^="ocultar"]');
                if (segundaHierarquia2Eventos) {
                    segundaHierarquia2Eventos.style("display", segundaHierarquia2Eventos.style("display") === "none" ? "contents" : "none");
                }
                var terceiraHierarquiaEventos = tableModulosHierarquiaEventos.selectAll('[class^="row-modulo3-"]');
                if (terceiraHierarquiaEventos) {
                    terceiraHierarquiaEventos.style("display", terceiraHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                }
            }
            catch (error) {
                // console.log("erro catch: " + error);
            }
            atualizaAlturaMainTdNomes();
            atualizaLarguraMainTdNomes("expande", d.nome);
        })
            .append("svg")
            // .attr("viewBox", [0, 0, 448, 512])
            .attr("viewBox", [0, 0, 590, 670])
            .attr("height", 11)
            .attr("width", 25)
            // .attr("height", 16)
            // .attr("width", 14)
            .append("path")
            .attr("d", _icons__WEBPACK_IMPORTED_MODULE_1__/* .arrow_down */ .rE)
            .style("fill", "white");
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
            atualizaLarguraMainTdNomes("comprime", d.nome);
            var eventoHide = rowHierarquia.select(".iconPlus-div");
            if (eventoHide) {
                eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
            }
            var eventoShow = rowHierarquia.select(".iconMinus-div");
            if (eventoShow) {
                eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
            }
            // var segundaHierarquia = tableModulos.selectAll(".tableModulos2")
            var segundaHierarquia = tableModulosHierarquiaNomes.selectAll('[class^="row-modulo2-"]');
            if (segundaHierarquia) {
                segundaHierarquia.style("display", segundaHierarquia.style("display") === "none" ? "contents" : "none");
            }
            try {
                var segundaHierarquia2 = tableModulosHierarquiaNomes.selectAll('[class^="ocultar"]');
                if (segundaHierarquia2) {
                    segundaHierarquia2.style("display", segundaHierarquia2.style("display") === "none" ? "contents" : "none");
                }
                var terceiraHierarquia = tableModulosHierarquiaNomes.selectAll('[class^="row-modulo3-"]');
                if (terceiraHierarquia) {
                    terceiraHierarquia.style("display", terceiraHierarquia.style("display") === "none" ? "contents" : "none");
                }
            }
            catch (error) {
                // console.log("erro catch: " + error);
            }
            // altera a propriedade de exibição na parte de eventos
            var eventoDiv = rowEventos.select(".evento-div");
            if (eventoDiv) {
                eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
            }
            var segundaHierarquiaEventos = tableModulosHierarquiaEventos.selectAll('[class^="row-modulo2-"]');
            if (segundaHierarquiaEventos) {
                segundaHierarquiaEventos.style("display", segundaHierarquiaEventos.style("display") === "none" ? "contents" : "none");
            }
            try {
                var segundaHierarquia2Eventos = tableModulosHierarquiaEventos.selectAll('[class^="ocultar"]');
                if (segundaHierarquia2Eventos) {
                    segundaHierarquia2Eventos.style("display", segundaHierarquia2Eventos.style("display") === "none" ? "contents" : "none");
                }
                var terceiraHierarquiaEventos = tableModulosHierarquiaEventos.selectAll('[class^="row-modulo3-"]');
                if (terceiraHierarquiaEventos) {
                    terceiraHierarquiaEventos.style("display", terceiraHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                }
            }
            catch (error) {
                // console.log("erro catch: " + error);
            }
            atualizaAlturaMainTdNomes();
        })
            .append("svg")
            // .attr("viewBox", [0, 0, 448, 512])
            .attr("viewBox", [0, 0, 590, 670])
            .attr("height", 11)
            .attr("width", 25)
            // .attr("height", 16)
            // .attr("width", 14)
            .append("path")
            .attr("d", _icons__WEBPACK_IMPORTED_MODULE_1__/* .arrow_right */ .B7)
            .style("fill", "white");
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
            .style("font-weight", "bold");
        // fim da estrutura da primeira hierarquia(esquerda), juntamente com os botoes e nomes
        //!
        //! Segundo nivel da hierarquia
        //!
        d.dados.forEach((h, i) => {
            var tipoEventoBar = [];
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
                .attr("height", 20);
            var row2Eventos = tableModulos2HierarquiaEventos.append("tr")
                .attr("class", function () {
                if (h.nome === null) {
                    // corBackgroundLinha +1
                    return "ocultar";
                }
                else {
                    corBackgroundSegundoNivel++;
                    // console.log("corBackgroundLinha: " + corBackgroundSegundoNivel);
                    return "exibir";
                }
            })
                // .style("background-color", "aqua")
                .style("background-color", function () {
                // console.log("i: " +corBackgroundSegundoNivel + " - " + corLinha[corBackgroundSegundoNivel % 2])
                return corLinha[corBackgroundSegundoNivel % 2];
            })
                .style("display", "flex")
                .attr("height", 20)
                .style("margin-bottom", "5px");
            // inicio da estrutura da sgunda hierarquia(esquerda), juntamente com os botoes e nomes
            var tableModulos2HierarquiaNomes = tableModulosHierarquiaNomes.append("table")
                .attr("class", "row-modulo2-" + h.nome)
                .style("display", "none")
                .style("padding-left", "15px")
                .style("margin-bottom", "5px")
                .attr("height", 20);
            var row2Nomes = tableModulos2HierarquiaNomes.append("tr")
                .attr("class", function () {
                if (h.nome === null) {
                    return "ocultar";
                }
                else {
                    return "exibir";
                }
            })
                .style("display", "flex")
                .attr("height", 20)
                .style("padding-left", "15px")
                .style("margin-bottom", "5px");
            var buttonPlus = row2Nomes.append("button")
                .attr("class", "iconPlus-div2")
                .style("background-color", "transparent")
                .style("border", "none")
                .on("click", function () {
                // exibir.push("tableModulos2")
                exibir.push("row-modulo2-" + h.nome);
                // console.log("exibir - buttonPlus: " + exibir);
                // var eventoDiv2 = row2Nomes.select(".evento-div2")
                // if (eventoDiv2) {
                //     eventoDiv2.style("display", eventoDiv2.style("display") === "none" ? "block" : "none");
                // }
                var eventoHide = row2Nomes.select(".iconPlus-div2");
                if (eventoHide) {
                    eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
                }
                var eventoShow = row2Nomes.select(".iconMinus-div2");
                if (eventoShow) {
                    eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
                }
                // var terceiraHierarquia = tableModulos2.selectAll(".tableModulos3")
                var terceiraHierarquiaHierarquiaNomes = tableModulos2HierarquiaNomes.selectAll('[class^="row-modulo3-"]');
                if (terceiraHierarquiaHierarquiaNomes) {
                    terceiraHierarquiaHierarquiaNomes.style("display", terceiraHierarquiaHierarquiaNomes.style("display") === "none" ? "contents" : "none");
                }
                // altera a propriedade de exibição na parte de eventos
                var eventoDiv2 = row2Eventos.select(".evento-div2");
                if (eventoDiv2) {
                    eventoDiv2.style("display", eventoDiv2.style("display") === "none" ? "block" : "none");
                }
                var terceiraHierarquiaHierarquiaEventos = tableModulos2HierarquiaEventos.selectAll('[class^="row-modulo3-"]');
                if (terceiraHierarquiaHierarquiaEventos) {
                    terceiraHierarquiaHierarquiaEventos.style("display", terceiraHierarquiaHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                }
                atualizaAlturaMainTdNomes();
            })
                .append("svg")
                .attr("viewBox", [0, 0, 590, 670])
                .attr("height", 11)
                .attr("width", 25)
                .append("path")
                .attr("d", _icons__WEBPACK_IMPORTED_MODULE_1__/* .arrow_down */ .rE)
                .style("fill", "white");
            var buttonMinus = row2Nomes.append("button")
                .style("display", "none")
                .style("background-color", "transparent")
                .style("border", "none")
                .attr("class", "iconMinus-div2")
                .on("click", function () {
                exibir = exibir.filter(elemento => elemento !== "row-modulo2-" + h.nome);
                // console.log("exibir - iconMinus-div2: " + exibir);
                var eventoHide = row2Nomes.select(".iconPlus-div2");
                if (eventoHide) {
                    eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
                }
                var eventoShow = row2Nomes.select(".iconMinus-div2");
                if (eventoShow) {
                    eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
                }
                // var terceiraHierarquia = tableModulos2.selectAll(".tableModulos3")
                var terceiraHierarquiaHierarquiaNomes = tableModulos2HierarquiaNomes.selectAll('[class^="row-modulo3-"]');
                if (terceiraHierarquiaHierarquiaNomes) {
                    terceiraHierarquiaHierarquiaNomes.style("display", terceiraHierarquiaHierarquiaNomes.style("display") === "none" ? "contents" : "none");
                }
                // altera a propriedade de exibição na parte de eventos
                var eventoDiv = row2Eventos.select(".evento-div2");
                if (eventoDiv) {
                    eventoDiv.style("display", eventoDiv.style("display") === "none" ? "block" : "none");
                }
                var terceiraHierarquiaHierarquiaEventos = tableModulos2HierarquiaEventos.selectAll('[class^="row-modulo3-"]');
                if (terceiraHierarquiaHierarquiaEventos) {
                    terceiraHierarquiaHierarquiaEventos.style("display", terceiraHierarquiaHierarquiaEventos.style("display") === "none" ? "contents" : "none");
                }
                atualizaAlturaMainTdNomes();
            })
                .append("svg")
                .attr("viewBox", [0, 0, 590, 670])
                .attr("height", 11)
                .attr("width", 25)
                .append("path")
                .attr("d", _icons__WEBPACK_IMPORTED_MODULE_1__/* .arrow_right */ .B7)
                .style("fill", "white");
            var testeRow = row2Nomes.append("tr")
                .attr("class", "row-modulo-segundo")
                .attr("height", 20)
                .style("padding-left", "5px")
                .text(h.nome)
                .style("color", "#FFFFFF");
            //! bloco abaixo é usado para a parte de evento da hierarquia
            var dadosEventoSubTipo = [];
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
                    dataFimTeste = l.levelValues[0].dataFim;
                }
                if (dataFimTeste != "null") {
                    if (new Date(DATA_FINAL).getTime() < new Date(l.levelValues[0].dataFim).getTime()) {
                        l.levelValues[0].dataFim = DATA_FINAL;
                    }
                    var dataFim = timeScale(l.levelValues[0].dataFim);
                    tamanhoBarraEvento = dataFim - dataInicio;
                    posicaoTextoEvento = dataInicio;
                }
                else {
                    posicaoTextoEvento = dataInicio;
                    tamanhoBarraEvento = 0;
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
                    }
                    else {
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
                        }
                        else {
                            existingSubTipo[l.levelValues[0].subTipo].push({
                                posInin: dataInicio,
                                width: tamanhoBarraEvento,
                                cor: l.levelValues[0].cor,
                                group: true
                            });
                        }
                    }
                }
                else {
                    //terceiro nivel dos eventos das hierarquias
                    var tableModulos3HierarquiaEventos = tableModulos2HierarquiaEventos.append("table")
                        // .attr("class", "tableModulos3")
                        .attr("class", "row-modulo3-" + l.levelValues[0].evento)
                        .style("display", "none");
                    var row3HierarquiaEventos = tableModulos3HierarquiaEventos.append("tr")
                        .attr("class", "linha-evento")
                        .style("background-color", function () {
                        // console.log("i: " +i + " - " + corLinha[i % 2])
                        // return corLinha[corBackgroundNivelEvento % 2]
                        // console.log("corBackgroundSegundoNivel: " +corBackgroundSegundoNivel)
                        // console.log("corBackgroundNivelEvento: " + corBackgroundNivelEvento)
                        return corLinha[i % 2];
                    })
                        .style("display", "flex")
                        .style("width", tamanhoScalaExib + "px")
                        .style("height", "21px")
                        .style("align-items", "center")
                        .style("margin-bottom", "5px");
                    //terceiro nivel dos nomes das hierarquias
                    var tableModulos3HierarquiaNomes = tableModulos2HierarquiaNomes.append("table")
                        // .attr("class", "tableModulos3")
                        .attr("class", "row-modulo3-" + l.levelValues[0].evento)
                        .style("display", "none");
                    var row3HierarquiaNomes = tableModulos3HierarquiaNomes.append("tr")
                        .style("display", "flex")
                        .style("padding-left", "30px")
                        // .style("width", "260px")
                        .style("align-items", "center")
                        .style("margin-bottom", "5px");
                    var textPrint = l.levelValues[0].evento;
                    var indiceEspaco = textPrint.indexOf(' ');
                    if (indiceEspaco === -1 || indiceEspaco > 25) {
                        var textSplit;
                        textSplit = textPrint.substring(0, 23) + ' ' + textPrint.substring(23);
                        textPrint = textSplit;
                    }
                    else {
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
                        .style("color", "#FFFFFF");
                    // var eventoBarDiv = row3HierarquiaNomes.append("svg")
                    var eventoBarDiv = row3HierarquiaEventos.append("svg")
                        .attr("transform", function (d, i) {
                        if (dataFimTeste == "null") {
                            return `translate(${dataInicio}, 0)`;
                        }
                        else {
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
                            });
                            tipoCategoriaBar.push({
                                "posInin": dataInicio,
                                "width": tamanhoBarraEvento,
                                "cor": l.levelValues[0].cor,
                            });
                            return tamanhoBarraEvento;
                        }
                        else {
                            // console.log("sera aqui? evento" + JSON.stringify(l.levelValues[0]))
                            tipoEventoBar.push({
                                "posInin": dataInicio,
                                "width": 0,
                                "cor": l.levelValues[0].cor,
                            });
                            tipoCategoriaBar.push({
                                "posInin": dataInicio,
                                "width": 0,
                                "cor": l.levelValues[0].cor,
                            });
                            return tamanhoBarraEvento + 20;
                        }
                    })
                        .attr("class", "eventoBarDiv")
                        .style("display", "block");
                    if (dataFimTeste == "null") {
                        var iconeDiv = eventoBarDiv
                            // .attr("viewBox", [0, 0, 448, 512])
                            .attr("viewBox", function () {
                            if (l.levelValues[0].icon) {
                                return _icons__WEBPACK_IMPORTED_MODULE_1__.vb[l.levelValues[0].icon];
                            }
                            else {
                                return "0, 0, 448, 512";
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
                                return "#" + l.levelValues[0].cor;
                            }
                            else {
                                return "rgb(0, 0153, 128)";
                            }
                        })
                            // .attr("d", iconsBase.diamond)
                            .attr("d", function () {
                            if (l.levelValues[0].icon) {
                                // return l.levelValues[0].icon
                                return _icons__WEBPACK_IMPORTED_MODULE_1__/* .icons */ .Pt[l.levelValues[0].icon];
                            }
                            else {
                                // return iconsBase.diamond
                                return _icons__WEBPACK_IMPORTED_MODULE_1__/* .base */ .E3;
                                // return iconsBase.icons[7]
                            }
                        });
                    }
                    else {
                        // eventoBarDiv.style("border-radius", "10px")
                        eventoBarDiv.style("border-radius", function (f) {
                            var soma = dataInicio + tamanhoBarraEvento;
                            if (soma >= posDataFinal) {
                                return "10px 0 0 10px";
                            }
                            else {
                                return "10px";
                            }
                        });
                        var iconeDiv = eventoBarDiv.append("rect")
                            .attr("fill", function () {
                            if (l.levelValues[0].cor) {
                                // return l.levelValues[0].cor
                                return "#" + l.levelValues[0].cor;
                            }
                            else {
                                return "rgb(0, 0153, 128)";
                            }
                        })
                            // .style("height", "20px")
                            .style("height", function (d) {
                            //verifica a quantidade de carcteres do nome, se tiver mais de 27 caracteres aumenta o tamanho do icone
                            if (l.levelValues[0].evento.length > 26) {
                                return "42.5px";
                            }
                            else {
                                return "21.25px";
                            }
                        })
                            .attr("width", function (d) {
                            if (dataFimTeste != "null") {
                                if (new Date(DATA_FINAL).getTime() < new Date(l.levelValues[0].dataFim).getTime()) {
                                    l.levelValues[0].dataFim = DATA_FINAL;
                                }
                                var dataFim = timeScale(l.levelValues[0].dataFim);
                                tamanhoBarraEvento = dataFim - dataInicio;
                                return tamanhoBarraEvento;
                            }
                            else {
                                return tamanhoBarraEvento + 20;
                            }
                        });
                    }
                    //todo tooltip
                    // tooltip = row3HierarquiaEventos.append("div")
                    //     .attr("class", "tooltip")
                    //     .style("position", "absolute")
                    //     .style("visibility", "hidden")
                    //     .style("background-color", "#f9f9f9")
                    //     .style("border", "1px solid #d3d3d3")
                    //     .style("padding", "5px")
                    //     .style("border-radius", "5px")
                    //     .style("box-shadow", "0px 0px 5px 0px #000000")
                    // // console.log("tooltip: " + tooltip);
                    eventoBarDiv.on("mouseover", function (event, d) {
                        console.log("mouseover");
                        // console.log("eventoBarDiv: " + eventoBarDiv);
                        var posX = event.pageX;
                        var posY = event.pageY;
                        // console.log("eventoBarDiv: " + "x: " + posX + "; y: " + posY);
                        tooltip
                            .style("visibility", "visible")
                            .style("left", (posX + 10) + "px")
                            .style("top", (posY + 10) + "px")
                            // Data Fim: ${l.levelValues[0].dataFim};<BR>
                            .html(`
                            Data inicio: ${formatDate(l.levelValues[0].dataInicio)};<BR>
                            ${l.levelValues[0].dataFim !== null ? `Data Fim: ${formatDate(l.levelValues[0].dataFim)};<BR>` : ''}
                            Evento: ${l.levelValues[0].evento};`);
                        console.log("aaa: " + tooltip.html());
                    })
                        .on("mouseout", function () {
                        tooltip.style("visibility", "hidden");
                    });
                    var dadosEventoDiv = row3HierarquiaEventos.append("svg")
                        .attr("transform", function () {
                        return `translate(${posicaoTextoEvento}, 0)`;
                    })
                        .attr("height", 20)
                        .attr("class", "evento-div-nome")
                        .style("display", "block")
                        //! rgb(204, 0, 0)
                        // .style("width", "30px")
                        .style("width", function (f) {
                        var soma = dataInicio + tamanhoBarraEvento;
                        if (soma >= posDataFinal) {
                            return "30px";
                        }
                        if (soma + 300 >= posDataFinal) {
                            return posDataFinal - soma + "px";
                        }
                        else if (dataInicio + 300 >= posDataFinal) {
                            return posDataFinal - posicaoTextoEvento + "px";
                        }
                    })
                        .append("g")
                        .append("text")
                        .attr("y", 15)
                        .attr("font-size", 12)
                        .text(function () {
                        if ("rot" in l.levelValues[0]) {
                            return l.levelValues[0].rot;
                        }
                        else {
                            return l.levelValues[0].evento;
                        }
                    });
                }
            });
            //caso exista algum subtipo associado entra no if abaixo
            if (dadosEventoSubTipo.length != 0) {
                dadosEventoSubTipo.forEach((item, i) => {
                    // console.log("tableModulos3 = tableModulos2.append: " + JSON.stringify(item));
                    // console.log("tableModulos3 = tableModulos2.append item[0]: " + Object.keys(item)[0]);
                    var tableModulos3Eventos = tableModulos2HierarquiaEventos.append("table")
                        // .attr("class", "tableModulos3")
                        .attr("class", "row-modulo3-" + Object.keys(item)[0])
                        .style("display", "none");
                    var row3Eventos = tableModulos3Eventos.append("tr")
                        .style("display", "flex")
                        .style("width", "1147px")
                        .style("height", "21px")
                        .style("margin-bottom", "5px")
                        .attr("class", "alterarEsse");
                    var testeRowEventos = row3Eventos.append("tr")
                        .attr("class", "row-modulo-evento");
                    var barraGeralEvento = row3Eventos.append("g")
                        .attr("transform", `translate(0,0)`)
                        .attr("class", "evento-div3");
                    //parte referente ao nome dos eventos
                    var tableModulos3Nomes = tableModulos2HierarquiaNomes.append("table")
                        .attr("class", "row-modulo3-" + Object.keys(item)[0])
                        .style("display", "none");
                    var row3Nomes = tableModulos3Nomes.append("tr")
                        .style("display", "flex")
                        .style("padding-left", "30px")
                        // .style("width", "1147px")
                        .style("margin-bottom", "5px");
                    var testeRowNomes = row3Nomes.append("tr")
                        .attr("class", "row-modulo-evento")
                        // .attr("height", 20)
                        .style("padding-left", "5px")
                        // .style("width", "260px")
                        .style("width", "max-content")
                        .text(Object.keys(dadosEventoSubTipo[i])[0])
                        .style("color", "#FFFFFF");
                    Object.keys(item).forEach((key, j) => {
                        item[key].forEach((gov, k) => {
                            // console.log("gov: " + JSON.stringify(gov))
                            var barraGeralEventoAgrupado = barraGeralEvento.append("svg")
                                .style("display", "flex")
                                .style("position", "absolute")
                                .attr("height", 20)
                                .attr("class", "essaClass")
                                .attr("transform", function (f) {
                                if (gov.width != 0) {
                                    return `translate(${gov.posInin},0)`;
                                }
                                else {
                                    // return `translate(${gov.posInin - 15},0)`
                                    // return `translate(${gov.posInin - 18},0)`
                                    return `translate(${gov.posInin},0)`;
                                }
                            })
                                .attr("width", function (f) {
                                if (gov.width != 0) {
                                    tipoEventoBar.push({
                                        //adicionar a posição x do translate e o tamanho do width
                                        "posInin": gov.posInin,
                                        "width": gov.width,
                                    });
                                    tipoCategoriaBar.push({
                                        //adicionar a posição x do translate e o tamanho do width
                                        "posInin": gov.posInin,
                                        "width": gov.width,
                                    });
                                    return gov.width;
                                }
                                else {
                                    tipoEventoBar.push({
                                        //adicionar a posição x do translate e o tamanho do width
                                        "posInin": gov.posInin,
                                        "width": 0,
                                    });
                                    tipoCategoriaBar.push({
                                        //adicionar a posição x do translate e o tamanho do width
                                        "posInin": gov.posInin,
                                        "width": 0,
                                    });
                                    return "30px";
                                }
                            });
                            if (gov.width != 0) {
                                barraGeralEventoAgrupado.style("border-radius", "10px");
                                barraGeralEventoAgrupado.append("rect")
                                    .attr("fill", function () {
                                    // console.log("gov agrupado: " + JSON.stringify(gov));
                                    if (gov.cor) {
                                        return "#" + gov.cor;
                                    }
                                    else {
                                        return "rgb(10, 0, 250)";
                                    }
                                })
                                    .attr("width", gov.width)
                                    .attr("height", 20);
                            }
                            else {
                                barraGeralEventoAgrupado
                                    .attr("viewBox", [0, 0, 448, 512])
                                    .attr("height", 20)
                                    // .attr("width", 30)
                                    .attr("width", 20)
                                    .append("path")
                                    .attr("fill", function () {
                                    if (gov.cor) {
                                        return "#" + gov.cor;
                                    }
                                    else {
                                        return "rgb(10, 0, 250)";
                                    }
                                })
                                    // .attr("d", iconsBase.diamond)
                                    .attr("d", function () {
                                    if (gov.icon) {
                                        return gov.icon;
                                    }
                                    else {
                                        // return iconsBase.diamond
                                        return _icons__WEBPACK_IMPORTED_MODULE_1__/* .base */ .E3;
                                    }
                                });
                            }
                            if (!gov.group) {
                                barraGeralEvento.append("svg")
                                    .attr("transform", function () {
                                    if (gov.width != 0) {
                                        return `translate(${gov.posInin + gov.width + 5}, 0)`;
                                    }
                                    else {
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
                                        return gov.rot;
                                    }
                                    else {
                                        return key;
                                    }
                                });
                            }
                        });
                    });
                });
            }
            //Gera os marcos agrupados referentes ao tipo
            // var barraGeralTeste = row2Nomes.append("g")
            var barraGeralTeste = row2Eventos.append("g")
                .attr("transform", `translate(0,0)`)
                .attr("class", "evento-div2");
            tipoEventoBar.forEach((item, i) => {
                var barraGeralTeste2 = barraGeralTeste.append("svg")
                    .style("display", "flex")
                    .style("position", "absolute")
                    .attr("transform", function (f) {
                    if (item.width != 0) {
                        return `translate(${item.posInin},0)`;
                    }
                    else {
                        // return `translate(${item.posInin - 15},0)`
                        // return `translate(${item.posInin - 18},0)`
                        return `translate(${item.posInin},0)`;
                    }
                })
                    .attr("height", 20)
                    .attr("width", function (f) {
                    if (item.width != 0) {
                        return item.width;
                    }
                    else {
                        return "30px";
                    }
                });
                if (item.width != 0) {
                    barraGeralTeste2.style("border-radius", function (f) {
                        var soma = item.posInin + item.width;
                        if (soma >= posDataFinal) {
                            return "10px 0 0 10px";
                        }
                        else {
                            return "10px";
                        }
                    });
                    barraGeralTeste2.append("rect")
                        // .attr("fill", "rgb(128, 52, 52)")
                        .attr("fill", function (f) {
                        if (item.cor) {
                            return "#" + item.cor;
                        }
                        else {
                            return "rgb(200, 153, 128)";
                        }
                    })
                        .attr("width", item.width)
                        .attr("height", 20);
                }
                else {
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
                            return "#" + item.cor;
                        }
                        else {
                            return "rgb(200, 153, 128)";
                        }
                    })
                        // .attr("d", iconsBase.diamond)
                        .attr("d", _icons__WEBPACK_IMPORTED_MODULE_1__/* .base */ .E3);
                }
            });
        });
        // var barraGeralTeste = rowHierarquia.append("g")
        var barraGeralTesteEvento = rowEventos.append("g")
            .attr("transform", `translate(0,0)`)
            .attr("class", "evento-div");
        var barraGeralTesteHierarquia = rowHierarquia.append("g")
            .attr("transform", `translate(0,0)`)
            .attr("class", "evento-div");
        tipoCategoriaBar.forEach((item, i) => {
            // var barraGeralTeste2 = barraGeralTeste.append("svg")
            var barraGeralTeste2 = barraGeralTesteEvento.append("svg")
                .style("display", "flex")
                .style("position", "absolute")
                .attr("transform", function (f) {
                if (item.width != 0) {
                    return `translate(${item.posInin},0)`;
                }
                else {
                    return `translate(${item.posInin},0)`;
                }
            })
                .attr("height", 20)
                .attr("width", function (f) {
                if (item.width != 0) {
                    return item.width;
                }
                else {
                    return "30px";
                }
            });
            if (item.width != 0) {
                // console.log("testando: " + JSON.stringify(item))
                // barraGeralTeste2.style("border-radius", "10px")
                barraGeralTeste2.style("border-radius", function (f) {
                    var soma = item.posInin + item.width;
                    if (soma >= posDataFinal) {
                        return "10px 0 0 10px";
                    }
                    else {
                        return "10px";
                    }
                });
                barraGeralTeste2.append("rect")
                    // .attr("fill", "rgb(128, 52, 52)")
                    // .attr("fill", "rgb(128, 252, 52)")
                    .attr("fill", function (f) {
                    if (item.cor) {
                        // console.log("testando: " + JSON.stringify(item.cor))
                        return "#" + item.cor;
                    }
                    else {
                        return "rgb(0, 0153, 128)";
                    }
                })
                    .attr("width", item.width)
                    .attr("height", 20);
            }
            else {
                barraGeralTeste2.append("svg")
                    .attr("transform", `translate(${item.posInin},0)`)
                    .attr("height", 20)
                    // .attr("width", 30)
                    .attr("width", 20)
                    .attr("viewBox", [0, 0, 448, 512])
                    .attr("height", 20)
                    // .attr("width", 30)
                    .attr("width", 20)
                    .append("path")
                    // .attr("fill", "rgb(128, 52, 52)")
                    .attr("fill", function (f) {
                    if (item.cor) {
                        return "#" + item.cor;
                    }
                    else {
                        return "rgb(200, 153, 128)";
                    }
                })
                    // .attr("d", iconsBase.diamond)
                    .attr("d", _icons__WEBPACK_IMPORTED_MODULE_1__/* .base */ .E3);
                // .attr("d", iconsBase.icons[1])
            }
        });
    });
}
function atualizaAlturaMainTdNomes() {
    const td = document.querySelector('.mainTdNomes');
    alturaRolagem = td.scrollHeight;
    svgRoot.style("height", alturaRolagem + "px");
}
function atualizaLarguraMainTdNomes(tipo, hierarquia) {
    if (tipo == "expande") {
        const queryMainTdNomes = document.querySelector('.mainTdNomes');
        var valorAdd = queryMainTdNomes.scrollWidth;
        larguraRolagem.push({
            nomeHierarquia: hierarquia,
            tamanho: valorAdd
        });
        const maior = Math.max(...larguraRolagem.map(item => item.tamanho));
        const tds = queryMainTdNomes.querySelectorAll('[class^="row-modulo-nome-"]');
        tds.forEach((td) => {
            td.style.width = maior + 'px';
        });
    }
    else if (tipo == "comprime") {
        const queryMainTdNomes = document.querySelector('.mainTdNomes');
        const tds = queryMainTdNomes.querySelectorAll('[class^="row-modulo-nome-"]');
        larguraRolagem = larguraRolagem.filter(item => item.nomeHierarquia !== hierarquia);
        if (larguraRolagem.length === 0) {
            tds.forEach((td) => {
                td.style.width = "-webkit-fill-available";
            });
        }
        else {
            const maior = Math.max(...larguraRolagem.map(item => item.tamanho));
            tds.forEach((td) => {
                td.style.width = maior + 'px';
            });
        }
    }
}


/***/ }),

/***/ 2902:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ascending)
/* harmony export */ });
function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ 2016:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports bisectRight, bisectLeft, bisectCenter */
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2902);
/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6037);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3131);




const ascendingBisect = (0,_bisector_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ascending_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = (0,_bisector_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_number_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A).center;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bisectRight);


/***/ }),

/***/ 6037:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ bisector)
/* harmony export */ });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2902);
/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1180);



function bisector(f) {
  let compare1, compare2, delta;

  // If an accessor is specified, promote it to a comparator. In this case we
  // can test whether the search value is (self-) comparable. We can’t do this
  // for a comparator (except for specific, known comparators) because we can’t
  // tell if the comparator is symmetric, and an asymmetric comparator can’t be
  // used to test whether a single value is comparable.
  if (f.length !== 2) {
    compare1 = _ascending_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A;
    compare2 = (d, x) => (0,_ascending_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(f(d), x);
    delta = (d, x) => f(d) - x;
  } else {
    compare1 = f === _ascending_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A || f === _descending_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A ? f : zero;
    compare2 = f;
    delta = f;
  }

  function left(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function right(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function center(a, x, lo = 0, hi = a.length) {
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function zero() {
  return 0;
}


/***/ }),

/***/ 1180:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ descending)
/* harmony export */ });
function descending(a, b) {
  return a == null || b == null ? NaN
    : b < a ? -1
    : b > a ? 1
    : b >= a ? 0
    : NaN;
}


/***/ }),

/***/ 3131:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ number)
/* harmony export */ });
/* unused harmony export numbers */
function number(x) {
  return x === null ? NaN : +x;
}

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}


/***/ }),

/***/ 6946:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sG: () => (/* binding */ tickStep)
/* harmony export */ });
/* unused harmony exports default, tickIncrement */
const e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log10(step)),
      error = step / Math.pow(10, power),
      factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}

function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0)) return [];
  if (start === stop) return [start];
  const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks = new Array(n);
  if (reverse) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;
  }
  return ticks;
}

function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}

function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}


/***/ }),

/***/ 5267:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tl: () => (/* binding */ axisTop)
/* harmony export */ });
/* unused harmony exports axisRight, axisBottom, axisLeft */
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2752);


var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + x + ",0)";
}

function translateY(y) {
  return "translate(0," + y + ")";
}

function number(scale) {
  return d => +scale(d);
}

function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round()) offset = Math.round(offset);
  return d => +scale(d) + offset;
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : _identity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + offset,
        range1 = +range[range.length - 1] + offset,
        position = (scale.bandwidth ? center : number)(scale.copy(), offset),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient === right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d) + offset); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = Array.from(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  axis.offset = function(_) {
    return arguments.length ? (offset = +_, axis) : offset;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),

/***/ 2752:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return x;
}


/***/ }),

/***/ 312:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tl: () => (/* reexport safe */ _axis_js__WEBPACK_IMPORTED_MODULE_0__.tl)
/* harmony export */ });
/* harmony import */ var _axis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5267);



/***/ }),

/***/ 8965:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports brushSelection, brushX, brushY */
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9902);









var MODE_DRAG = {name: "drag"},
    MODE_SPACE = {name: "space"},
    MODE_HANDLE = {name: "handle"},
    MODE_CENTER = {name: "center"};

const {abs, max, min} = Math;

function number1(e) {
  return [+e[0], +e[1]];
}

function number2(e) {
  return [number1(e[0]), number1(e[1])];
}

var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x, e) { return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) { return xy == null ? null : number2(xy); },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
  }
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush(X);
}

function brushY() {
  return brush(Y);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return brush(XY);
}

function brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      touchable = defaultTouchable,
      keys = true,
      listeners = dispatch("start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local(this).extent;
          select(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("mousedown.brush", started)
      .filter(touchable)
        .on("touchstart.brush", started)
        .on("touchmove.brush", touchmoved)
        .on("touchend.brush touchcancel.brush", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  brush.move = function(group, selection, event) {
    if (group.tween) {
      group
          .on("start.brush", function(event) { emitter(this, arguments).beforestart().start(event); })
          .on("interrupt.brush end.brush", function(event) { emitter(this, arguments).end(event); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = interpolate(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && selection1 === null ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 !== null && selection1 !== null ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            interrupt(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event).brush(event).end(event);
          });
    }
  };

  brush.clear = function(group, event) {
    brush.move(group, null, event);
  };

  function redraw() {
    var group = select(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }

  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function(event, mode) {
      if (this.starting) this.starting = false, this.emit("start", event, mode);
      else this.emit("brush", event);
      return this;
    },
    brush: function(event, mode) {
      this.emit("brush", event, mode);
      return this;
    },
    end: function(event, mode) {
      if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
      return this;
    },
    emit: function(type, event, mode) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new BrushEvent(type, {
          sourceEvent: event,
          target: brush,
          selection: dim.output(this.state.selection),
          mode,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function started(event) {
    if (touchending && !event.touches) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = event.target.__data__.type,
        mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (keys && event.altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx = 0,
        dy = 0,
        moving,
        shifting = signX && signY && keys && event.shiftKey,
        lockX,
        lockY,
        points = Array.from(event.touches || [event], t => {
          const i = t.identifier;
          t = pointer(t, that);
          t.point0 = t.slice();
          t.identifier = i;
          return t;
        });

    interrupt(that);
    var emit = emitter(that, arguments, true).beforestart();

    if (type === "overlay") {
      if (selection) moving = true;
      const pts = [points[0], points[1] || points[0]];
      state.selection = selection = [[
          w0 = dim === Y ? W : min(pts[0][0], pts[1][0]),
          n0 = dim === X ? N : min(pts[0][1], pts[1][1])
        ], [
          e0 = dim === Y ? E : max(pts[0][0], pts[1][0]),
          s0 = dim === X ? S : max(pts[0][1], pts[1][1])
        ]];
      if (points.length > 1) move(event);
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = select(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = select(event.view)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);
      if (keys) view
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)

      dragDisable(event.view);
    }

    redraw.call(that);
    emit.start(event, mode.name);

    function moved(event) {
      for (const p of event.changedTouches || [event]) {
        for (const d of points)
          if (d.identifier === p.identifier) d.cur = pointer(p, that);
      }
      if (shifting && !lockX && !lockY && points.length === 1) {
        const point = points[0];
        if (abs(point.cur[0] - point[0]) > abs(point.cur[1] - point[1]))
          lockY = true;
        else
          lockX = true;
      }
      for (const point of points)
        if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
      moving = true;
      noevent(event);
      move(event);
    }

    function move(event) {
      const point = points[0], point0 = point.point0;
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = max(W - w0, min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = max(N - n0, min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (points[1]) {
            if (signX) w1 = max(W, min(E, points[0][0])), e1 = max(W, min(E, points[1][0])), signX = 1;
            if (signY) n1 = max(N, min(S, points[0][1])), s1 = max(N, min(S, points[1][1])), signY = 1;
          } else {
            if (signX < 0) dx = max(W - w0, min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
            else if (signX > 0) dx = max(W - e0, min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0) dy = max(N - n0, min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
            else if (signY > 0) dy = max(N - s0, min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          }
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = max(W, min(E, w0 - dx * signX)), e1 = max(W, min(E, e0 + dx * signX));
          if (signY) n1 = max(N, min(S, n0 - dy * signY)), s1 = max(N, min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush(event, mode.name);
      }
    }

    function ended(event) {
      nopropagation(event);
      if (event.touches) {
        if (event.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      } else {
        dragEnable(event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (empty(selection)) state.selection = null, redraw.call(that);
      emit.end(event, mode.name);
    }

    function keydowned(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move(event);
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }

    function keyupped(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move(event);
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move(event);
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (event.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }
  }

  function touchmoved(event) {
    emitter(this, arguments).moved(event);
  }

  function touchended(event) {
    emitter(this, arguments).ended(event);
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant(number2(_)), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), brush) : filter;
  };

  brush.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), brush) : touchable;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.keyModifiers = function(_) {
    return arguments.length ? (keys = !!_, brush) : keys;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}


/***/ }),

/***/ 3537:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _brush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8965);



/***/ }),

/***/ 6957:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ color),
/* harmony export */   Qh: () => (/* binding */ rgb)
/* harmony export */ });
/* unused harmony exports Color, darker, brighter, rgbConvert, Rgb, hslConvert, hsl */
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(871);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .X)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .X)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ 871:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   X: () => (/* binding */ extend)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ 1089:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);


/***/ }),

/***/ 2101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wq: () => (/* binding */ cubicInOut)
/* harmony export */ });
/* unused harmony exports cubicIn, cubicOut */
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ 8079:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ genericArray)
/* harmony export */ });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8503);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return (isNumberArray(b) ? numberArray : genericArray)(a, b);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = (0,_value_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}


/***/ }),

/***/ 6160:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   H: () => (/* binding */ basis)
/* harmony export */ });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ 9804:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6160);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__/* .basis */ .H)((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ 4709:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ nogamma),
/* harmony export */   uN: () => (/* binding */ gamma)
/* harmony export */ });
/* unused harmony export hue */
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3116);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(isNaN(a) ? b : a);
}


/***/ }),

/***/ 3116:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ 8172:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}


/***/ }),

/***/ 8981:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}


/***/ }),

/***/ 128:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   p: () => (/* binding */ isNumberArray)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


/***/ }),

/***/ 4287:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8503);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = (0,_value_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}


/***/ }),

/***/ 1197:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports rgbBasis, rgbBasisClosed */
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6957);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6160);
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9804);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4709);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function rgbGamma(y) {
  var color = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__/* .gamma */ .uN)(y);

  function rgb(start, end) {
    var r = color((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* .rgb */ .Qh)(start)).r, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* .rgb */ .Qh)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* .rgb */ .Qh)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A);


/***/ }),

/***/ 9770:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}


/***/ }),

/***/ 7737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8981);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}


/***/ }),

/***/ 1852:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   D: () => (/* binding */ identity)
/* harmony export */ });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}


/***/ }),

/***/ 1957:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ interpolateTransformSvg),
/* harmony export */   T: () => (/* binding */ interpolateTransformCss)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8981);
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1226);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__/* .parseCss */ .P, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__/* .parseSvg */ .i, ", ", ")", ")");


/***/ }),

/***/ 1226:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ parseCss),
/* harmony export */   i: () => (/* binding */ parseSvg)
/* harmony export */ });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1852);


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? _decompose_js__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .D : (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .D;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .D;
  value = value.matrix;
  return (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ 8503:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6957);
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1197);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8079);
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8172);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8981);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4287);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7737);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3116);
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(128);










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(b)
      : (t === "number" ? _number_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
      : t === "string" ? ((c = (0,d3_color__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay) : _string_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay ? _rgb_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay
      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A
      : (0,_numberArray_js__WEBPACK_IMPORTED_MODULE_6__/* .isNumberArray */ .p)(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A
      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_7__/* .genericArray */ .$
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A
      : _number_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(a, b);
}


/***/ }),

/***/ 9279:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ constants)
/* harmony export */ });
function constants(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ 1052:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ continuous),
/* harmony export */   C: () => (/* binding */ copy)
/* harmony export */ });
/* unused harmony exports identity, transformer */
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2016);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8503);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8981);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9770);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9279);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(414);





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = (0,d3_array__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}


/***/ }),

/***/ 1303:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pp: () => (/* reexport safe */ _utcTime_js__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   w7: () => (/* reexport safe */ _time_js__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7910);
/* harmony import */ var _utcTime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1232);



































/***/ }),

/***/ 9065:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ initRange)
/* harmony export */ });
/* unused harmony export initInterpolator */
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}


/***/ }),

/***/ 8206:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ nice)
/* harmony export */ });
function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}


/***/ }),

/***/ 414:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ number)
/* harmony export */ });
function number(x) {
  return +x;
}


/***/ }),

/***/ 7910:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ time),
/* harmony export */   B: () => (/* binding */ calendar)
/* harmony export */ });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(526);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4355);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5878);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8926);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5334);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4612);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3298);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5030);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3705);
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1052);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9065);
/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8206);






function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
  var scale = (0,_continuous_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)(),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain((0,_nice_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(d, interval)) : scale;
  };

  scale.copy = function() {
    return (0,_continuous_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
  };

  return scale;
}

function time() {
  return _init_js__WEBPACK_IMPORTED_MODULE_2__/* .initRange */ .C.apply(calendar(d3_time__WEBPACK_IMPORTED_MODULE_3__/* .timeTicks */ .Cf, d3_time__WEBPACK_IMPORTED_MODULE_3__/* .timeTickInterval */ .yE, d3_time__WEBPACK_IMPORTED_MODULE_4__/* .timeYear */ .he, d3_time__WEBPACK_IMPORTED_MODULE_5__/* .timeMonth */ .Ui, d3_time__WEBPACK_IMPORTED_MODULE_6__/* .timeSunday */ .YP, d3_time__WEBPACK_IMPORTED_MODULE_7__/* .timeDay */ .UA, d3_time__WEBPACK_IMPORTED_MODULE_8__/* .timeHour */ .Ag, d3_time__WEBPACK_IMPORTED_MODULE_9__/* .timeMinute */ .wX, d3_time__WEBPACK_IMPORTED_MODULE_10__/* .second */ .R, d3_time_format__WEBPACK_IMPORTED_MODULE_11__/* .timeFormat */ .DC).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}


/***/ }),

/***/ 1232:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ utcTime)
/* harmony export */ });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(526);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4355);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5878);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8926);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5334);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4612);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3298);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5030);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3705);
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7910);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9065);





function utcTime() {
  return _init_js__WEBPACK_IMPORTED_MODULE_0__/* .initRange */ .C.apply((0,_time_js__WEBPACK_IMPORTED_MODULE_1__/* .calendar */ .B)(d3_time__WEBPACK_IMPORTED_MODULE_2__/* .utcTicks */ .$Z, d3_time__WEBPACK_IMPORTED_MODULE_2__/* .utcTickInterval */ .lk, d3_time__WEBPACK_IMPORTED_MODULE_3__/* .utcYear */ .Mb, d3_time__WEBPACK_IMPORTED_MODULE_4__/* .utcMonth */ .R6, d3_time__WEBPACK_IMPORTED_MODULE_5__/* .utcSunday */ .Hl, d3_time__WEBPACK_IMPORTED_MODULE_6__/* .utcDay */ .dA, d3_time__WEBPACK_IMPORTED_MODULE_7__/* .utcHour */ .pz, d3_time__WEBPACK_IMPORTED_MODULE_8__/* .utcMinute */ .vD, d3_time__WEBPACK_IMPORTED_MODULE_9__/* .second */ .R, d3_time_format__WEBPACK_IMPORTED_MODULE_10__/* .utcFormat */ .aL).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
}


/***/ }),

/***/ 5478:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ array)
/* harmony export */ });
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


/***/ }),

/***/ 9731:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ 3663:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7268);
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7947);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* .xhtml */ .g && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* .xhtml */ .g
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}


/***/ }),

/***/ 7875:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lt: () => (/* reexport safe */ _select_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   Ub: () => (/* reexport safe */ _selectAll_js__WEBPACK_IMPORTED_MODULE_1__.A)
/* harmony export */ });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4984);

















/***/ }),

/***/ 6541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   j: () => (/* binding */ childMatcher)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}



/***/ }),

/***/ 7268:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7947);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}


/***/ }),

/***/ 7947:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   g: () => (/* binding */ xhtml)
/* harmony export */ });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ 183:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1882);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .LN([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .LN([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .root */ .zr);
}


/***/ }),

/***/ 4984:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5478);
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1882);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .LN([document.querySelectorAll(selector)], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .LN([(0,_array_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(selector)], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .root */ .zr);
}


/***/ }),

/***/ 8072:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3663);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}


/***/ }),

/***/ 7339:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7268);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}


/***/ }),

/***/ 5152:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}


/***/ }),

/***/ 8235:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}


/***/ }),

/***/ 9063:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}


/***/ }),

/***/ 8664:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1882);
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4916);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9731);




function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__/* .EnterNode */ .L(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__/* .EnterNode */ .L(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Selection */ .LN(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}


/***/ }),

/***/ 9433:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}


/***/ }),

/***/ 202:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6747);


function dispatchEvent(node, type, params) {
  var window = (0,_window_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}


/***/ }),

/***/ 2901:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}


/***/ }),

/***/ 807:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return !this.node();
}


/***/ }),

/***/ 4916:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   L: () => (/* binding */ EnterNode)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6732);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1882);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .LN(this._enter || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ 2672:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6732);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1882);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .LN(this._exit || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A), this._parents);
}


/***/ }),

/***/ 9734:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1882);
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6541);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .LN(subgroups, this._parents);
}


/***/ }),

/***/ 697:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}


/***/ }),

/***/ 1882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   LN: () => (/* binding */ Selection),
/* harmony export */   zr: () => (/* binding */ root)
/* harmony export */ });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7952);
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9713);
/* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7408);
/* harmony import */ var _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7867);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9734);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8664);
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4916);
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2672);
/* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5232);
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7610);
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4510);
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2920);
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5152);
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3455);
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4784);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(165);
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(807);
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2901);
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7339);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3683);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(461);
/* harmony import */ var _classed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8235);
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7499);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(697);
/* harmony import */ var _raise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2582);
/* harmony import */ var _lower_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(9215);
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(8072);
/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1429);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(3900);
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(9063);
/* harmony import */ var _datum_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(9433);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(5233);
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(202);
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(1322);



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
  selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  selectChildren: _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
  data: _data_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
  enter: _enter_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
  exit: _exit_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
  join: _join_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,
  selection: selection_selection,
  order: _order_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,
  call: _call_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,
  nodes: _nodes_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,
  node: _node_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,
  size: _size_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,
  empty: _empty_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,
  each: _each_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,
  style: _style_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,
  property: _property_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A,
  classed: _classed_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,
  text: _text_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,
  html: _html_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,
  raise: _raise_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,
  lower: _lower_js__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,
  append: _append_js__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A,
  insert: _insert_js__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A,
  clone: _clone_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A,
  datum: _datum_js__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A,
  on: _on_js__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A,
  dispatch: _dispatch_js__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A,
  [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selection);


/***/ }),

/***/ 1429:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3663);
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(574);



function constantNull() {
  return null;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, before) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0,_selector_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}


/***/ }),

/***/ 1322:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}


/***/ }),

/***/ 5232:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}


/***/ }),

/***/ 9215:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(lower);
}


/***/ }),

/***/ 7610:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1882);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .LN(merges, this._parents);
}


/***/ }),

/***/ 4784:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}


/***/ }),

/***/ 3455:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return Array.from(this);
}


/***/ }),

/***/ 5233:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}


/***/ }),

/***/ 4510:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}


/***/ }),

/***/ 461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}


/***/ }),

/***/ 2582:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(raise);
}


/***/ }),

/***/ 3900:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(remove);
}


/***/ }),

/***/ 7952:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1882);
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(574);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select !== "function") select = (0,_selector_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .LN(subgroups, this._parents);
}


/***/ }),

/***/ 9713:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1882);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5478);
/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);




function arrayAll(select) {
  return function() {
    return (0,_array_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(select.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = (0,_selectorAll_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Selection */ .LN(subgroups, parents);
}


/***/ }),

/***/ 7408:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6541);


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__/* .childMatcher */ .j)(match)));
}


/***/ }),

/***/ 7867:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6541);


var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__/* .childMatcher */ .j)(match)));
}


/***/ }),

/***/ 165:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}


/***/ }),

/***/ 2920:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1882);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .LN(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ 6732:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(update) {
  return new Array(update.length);
}


/***/ }),

/***/ 3683:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   j: () => (/* binding */ styleValue)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6747);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || (0,_window_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ 7499:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}


/***/ }),

/***/ 574:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function none() {}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}


/***/ }),

/***/ 747:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function empty() {
  return [];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}


/***/ }),

/***/ 6747:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}


/***/ }),

/***/ 3705:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DC: () => (/* binding */ timeFormat),
/* harmony export */   T6: () => (/* binding */ timeParse),
/* harmony export */   aL: () => (/* binding */ utcFormat)
/* harmony export */ });
/* unused harmony exports utcParse, default */
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4398);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),

/***/ 8090:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T6: () => (/* reexport safe */ _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__.T6),
/* harmony export */   aL: () => (/* reexport safe */ _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__.aL)
/* harmony export */ });
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3705);






/***/ }),

/***/ 4398:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ formatLocale)
/* harmony export */ });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8926);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5334);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4355);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcMonday */ .rt.ceil(week) : (0,d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcMonday */ .rt)(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_1__/* .utcDay */ .dA.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeMonday */ .AB.ceil(week) : (0,d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeMonday */ .AB)(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_1__/* .timeDay */ .UA.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_1__/* .timeDay */ .UA.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .timeYear */ .he)(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeSunday */ .YP.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .timeYear */ .he)(d) - 1, d), p, 2);
}

function dISO(d) {
  var day = d.getDay();
  return (day >= 4 || day === 0) ? (0,d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeThursday */ .Mo)(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeThursday */ .Mo.ceil(d);
}

function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeThursday */ .Mo.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .timeYear */ .he)(d), d) + ((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .timeYear */ .he)(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeMonday */ .AB.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .timeYear */ .he)(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? (0,d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeThursday */ .Mo)(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeThursday */ .Mo.ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_1__/* .utcDay */ .dA.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .utcYear */ .Mb)(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcSunday */ .Hl.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .utcYear */ .Mb)(d) - 1, d), p, 2);
}

function UTCdISO(d) {
  var day = d.getUTCDay();
  return (day >= 4 || day === 0) ? (0,d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcThursday */ .pT)(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcThursday */ .pT.ceil(d);
}

function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcThursday */ .pT.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .utcYear */ .Mb)(d), d) + ((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .utcYear */ .Mb)(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcMonday */ .rt.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .utcYear */ .Mb)(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? (0,d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcThursday */ .pT)(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcThursday */ .pT.ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),

/***/ 5334:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TW: () => (/* binding */ unixDay),
/* harmony export */   UA: () => (/* binding */ timeDay),
/* harmony export */   dA: () => (/* binding */ utcDay)
/* harmony export */ });
/* unused harmony exports timeDays, utcDays, unixDays */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7591);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1134);



const timeDay = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)(
  date => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .rR) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationDay */ .Nm,
  date => date.getDate() - 1
);

const timeDays = timeDay.range;

const utcDay = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationDay */ .Nm;
}, (date) => {
  return date.getUTCDate() - 1;
});

const utcDays = utcDay.range;

const unixDay = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationDay */ .Nm;
}, (date) => {
  return Math.floor(date / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationDay */ .Nm);
});

const unixDays = unixDay.range;


/***/ }),

/***/ 1134:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fq: () => (/* binding */ durationWeek),
/* harmony export */   JJ: () => (/* binding */ durationHour),
/* harmony export */   MP: () => (/* binding */ durationYear),
/* harmony export */   Nm: () => (/* binding */ durationDay),
/* harmony export */   Pv: () => (/* binding */ durationMonth),
/* harmony export */   Tt: () => (/* binding */ durationSecond),
/* harmony export */   rR: () => (/* binding */ durationMinute)
/* harmony export */ });
const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;


/***/ }),

/***/ 4612:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ag: () => (/* binding */ timeHour),
/* harmony export */   pz: () => (/* binding */ utcHour)
/* harmony export */ });
/* unused harmony exports timeHours, utcHours */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7591);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1134);



const timeHour = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationSecond */ .Tt - date.getMinutes() * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .rR);
}, (date, step) => {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationHour */ .JJ);
}, (start, end) => {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationHour */ .JJ;
}, (date) => {
  return date.getHours();
});

const timeHours = timeHour.range;

const utcHour = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
  date.setUTCMinutes(0, 0, 0);
}, (date, step) => {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationHour */ .JJ);
}, (start, end) => {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationHour */ .JJ;
}, (date) => {
  return date.getUTCHours();
});

const utcHours = utcHour.range;


/***/ }),

/***/ 2472:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mb: () => (/* reexport safe */ _year_js__WEBPACK_IMPORTED_MODULE_3__.Mb),
/* harmony export */   R6: () => (/* reexport safe */ _month_js__WEBPACK_IMPORTED_MODULE_2__.R6),
/* harmony export */   dA: () => (/* reexport safe */ _day_js__WEBPACK_IMPORTED_MODULE_1__.dA),
/* harmony export */   wX: () => (/* reexport safe */ _minute_js__WEBPACK_IMPORTED_MODULE_0__.wX)
/* harmony export */ });
/* harmony import */ var _minute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3298);
/* harmony import */ var _day_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5334);
/* harmony import */ var _month_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5878);
/* harmony import */ var _year_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4355);





















/***/ }),

/***/ 7591:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ timeInterval)
/* harmony export */ });
const t0 = new Date, t1 = new Date;

function timeInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = (date) => {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = (date) => {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = (date) => {
    const d0 = interval(date), d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = (date, step) => {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = (start, stop, step) => {
    const range = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    let previous;
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = (test) => {
    return timeInterval((date) => {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, (date, step) => {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = (start, end) => {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? (d) => field(d) % step === 0
              : (d) => interval.count(0, d) % step === 0);
    };
  }

  return interval;
}


/***/ }),

/***/ 2613:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ millisecond)
/* harmony export */ });
/* unused harmony export milliseconds */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7591);


const millisecond = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)(() => {
  // noop
}, (date, step) => {
  date.setTime(+date + step);
}, (start, end) => {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = (k) => {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
    date.setTime(Math.floor(date / k) * k);
  }, (date, step) => {
    date.setTime(+date + step * k);
  }, (start, end) => {
    return (end - start) / k;
  });
};

const milliseconds = millisecond.range;


/***/ }),

/***/ 3298:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vD: () => (/* binding */ utcMinute),
/* harmony export */   wX: () => (/* binding */ timeMinute)
/* harmony export */ });
/* unused harmony exports timeMinutes, utcMinutes */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7591);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1134);



const timeMinute = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationSecond */ .Tt);
}, (date, step) => {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .rR);
}, (start, end) => {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .rR;
}, (date) => {
  return date.getMinutes();
});

const timeMinutes = timeMinute.range;

const utcMinute = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
  date.setUTCSeconds(0, 0);
}, (date, step) => {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .rR);
}, (start, end) => {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .rR;
}, (date) => {
  return date.getUTCMinutes();
});

const utcMinutes = utcMinute.range;


/***/ }),

/***/ 5878:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R6: () => (/* binding */ utcMonth),
/* harmony export */   Ui: () => (/* binding */ timeMonth)
/* harmony export */ });
/* unused harmony exports timeMonths, utcMonths */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7591);


const timeMonth = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setMonth(date.getMonth() + step);
}, (start, end) => {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date) => {
  return date.getMonth();
});

const timeMonths = timeMonth.range;

const utcMonth = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCMonth(date.getUTCMonth() + step);
}, (start, end) => {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date) => {
  return date.getUTCMonth();
});

const utcMonths = utcMonth.range;


/***/ }),

/***/ 5030:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ second)
/* harmony export */ });
/* unused harmony export seconds */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7591);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1134);



const second = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
  date.setTime(date - date.getMilliseconds());
}, (date, step) => {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationSecond */ .Tt);
}, (start, end) => {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationSecond */ .Tt;
}, (date) => {
  return date.getUTCSeconds();
});

const seconds = second.range;


/***/ }),

/***/ 526:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Z: () => (/* binding */ utcTicks),
/* harmony export */   Cf: () => (/* binding */ timeTicks),
/* harmony export */   lk: () => (/* binding */ utcTickInterval),
/* harmony export */   yE: () => (/* binding */ timeTickInterval)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6037);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6946);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1134);
/* harmony import */ var _millisecond_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2613);
/* harmony import */ var _second_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5030);
/* harmony import */ var _minute_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3298);
/* harmony import */ var _hour_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4612);
/* harmony import */ var _day_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5334);
/* harmony import */ var _week_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8926);
/* harmony import */ var _month_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5878);
/* harmony import */ var _year_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4355);











function ticker(year, month, week, day, hour, minute) {

  const tickIntervals = [
    [_second_js__WEBPACK_IMPORTED_MODULE_0__/* .second */ .R,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationSecond */ .Tt],
    [_second_js__WEBPACK_IMPORTED_MODULE_0__/* .second */ .R,  5,  5 * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationSecond */ .Tt],
    [_second_js__WEBPACK_IMPORTED_MODULE_0__/* .second */ .R, 15, 15 * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationSecond */ .Tt],
    [_second_js__WEBPACK_IMPORTED_MODULE_0__/* .second */ .R, 30, 30 * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationSecond */ .Tt],
    [minute,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .rR],
    [minute,  5,  5 * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .rR],
    [minute, 15, 15 * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .rR],
    [minute, 30, 30 * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .rR],
    [  hour,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationHour */ .JJ  ],
    [  hour,  3,  3 * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationHour */ .JJ  ],
    [  hour,  6,  6 * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationHour */ .JJ  ],
    [  hour, 12, 12 * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationHour */ .JJ  ],
    [   day,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationDay */ .Nm   ],
    [   day,  2,  2 * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationDay */ .Nm   ],
    [  week,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationWeek */ .Fq  ],
    [ month,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMonth */ .Pv ],
    [ month,  3,  3 * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMonth */ .Pv ],
    [  year,  1,      _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationYear */ .MP  ]
  ];

  function ticks(start, stop, count) {
    const reverse = stop < start;
    if (reverse) [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
    return reverse ? ticks.reverse() : ticks;
  }

  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = (0,d3_array__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(([,, step]) => step).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every((0,d3_array__WEBPACK_IMPORTED_MODULE_3__/* .tickStep */ .sG)(start / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationYear */ .MP, stop / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationYear */ .MP, count));
    if (i === 0) return _millisecond_js__WEBPACK_IMPORTED_MODULE_4__/* .millisecond */ .y.every(Math.max((0,d3_array__WEBPACK_IMPORTED_MODULE_3__/* .tickStep */ .sG)(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }

  return [ticks, tickInterval];
}

const [utcTicks, utcTickInterval] = ticker(_year_js__WEBPACK_IMPORTED_MODULE_5__/* .utcYear */ .Mb, _month_js__WEBPACK_IMPORTED_MODULE_6__/* .utcMonth */ .R6, _week_js__WEBPACK_IMPORTED_MODULE_7__/* .utcSunday */ .Hl, _day_js__WEBPACK_IMPORTED_MODULE_8__/* .unixDay */ .TW, _hour_js__WEBPACK_IMPORTED_MODULE_9__/* .utcHour */ .pz, _minute_js__WEBPACK_IMPORTED_MODULE_10__/* .utcMinute */ .vD);
const [timeTicks, timeTickInterval] = ticker(_year_js__WEBPACK_IMPORTED_MODULE_5__/* .timeYear */ .he, _month_js__WEBPACK_IMPORTED_MODULE_6__/* .timeMonth */ .Ui, _week_js__WEBPACK_IMPORTED_MODULE_7__/* .timeSunday */ .YP, _day_js__WEBPACK_IMPORTED_MODULE_8__/* .timeDay */ .UA, _hour_js__WEBPACK_IMPORTED_MODULE_9__/* .timeHour */ .Ag, _minute_js__WEBPACK_IMPORTED_MODULE_10__/* .timeMinute */ .wX);




/***/ }),

/***/ 8926:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AB: () => (/* binding */ timeMonday),
/* harmony export */   Hl: () => (/* binding */ utcSunday),
/* harmony export */   Mo: () => (/* binding */ timeThursday),
/* harmony export */   YP: () => (/* binding */ timeSunday),
/* harmony export */   pT: () => (/* binding */ utcThursday),
/* harmony export */   rt: () => (/* binding */ utcMonday)
/* harmony export */ });
/* unused harmony exports timeTuesday, timeWednesday, timeFriday, timeSaturday, timeSundays, timeMondays, timeTuesdays, timeWednesdays, timeThursdays, timeFridays, timeSaturdays, utcTuesday, utcWednesday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7591);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1134);



function timeWeekday(i) {
  return (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setDate(date.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .rR) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationWeek */ .Fq;
  });
}

const timeSunday = timeWeekday(0);
const timeMonday = timeWeekday(1);
const timeTuesday = timeWeekday(2);
const timeWednesday = timeWeekday(3);
const timeThursday = timeWeekday(4);
const timeFriday = timeWeekday(5);
const timeSaturday = timeWeekday(6);

const timeSundays = timeSunday.range;
const timeMondays = timeMonday.range;
const timeTuesdays = timeTuesday.range;
const timeWednesdays = timeWednesday.range;
const timeThursdays = timeThursday.range;
const timeFridays = timeFriday.range;
const timeSaturdays = timeSaturday.range;

function utcWeekday(i) {
  return (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationWeek */ .Fq;
  });
}

const utcSunday = utcWeekday(0);
const utcMonday = utcWeekday(1);
const utcTuesday = utcWeekday(2);
const utcWednesday = utcWeekday(3);
const utcThursday = utcWeekday(4);
const utcFriday = utcWeekday(5);
const utcSaturday = utcWeekday(6);

const utcSundays = utcSunday.range;
const utcMondays = utcMonday.range;
const utcTuesdays = utcTuesday.range;
const utcWednesdays = utcWednesday.range;
const utcThursdays = utcThursday.range;
const utcFridays = utcFriday.range;
const utcSaturdays = utcSaturday.range;


/***/ }),

/***/ 4355:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mb: () => (/* binding */ utcYear),
/* harmony export */   he: () => (/* binding */ timeYear)
/* harmony export */ });
/* unused harmony exports timeYears, utcYears */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7591);


const timeYear = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setFullYear(date.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, (date) => {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
timeYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

const timeYears = timeYear.range;

const utcYear = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, (date) => {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .f)((date) => {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

const utcYears = utcYear.range;


/***/ }),

/***/ 1463:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__/* .Timer */ .M4;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}


/***/ }),

/***/ 29:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M4: () => (/* binding */ Timer),
/* harmony export */   O1: () => (/* binding */ timer),
/* harmony export */   tB: () => (/* binding */ now)
/* harmony export */ });
/* unused harmony export timerFlush */
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ 9902:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7111);






/***/ }),

/***/ 7045:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3363);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .STARTING */ .xo && schedule.state < _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .ENDING */ .Op;
    schedule.state = _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .ENDED */ .hV;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}


/***/ }),

/***/ 7111:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1882);
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5868);
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4620);




d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.prototype.interrupt = _interrupt_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;
d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.prototype.transition = _transition_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;


/***/ }),

/***/ 5868:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7045);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  return this.each(function() {
    (0,_interrupt_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, name);
  });
}


/***/ }),

/***/ 4620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9064);
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3363);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2101);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_0__/* .cubicInOut */ .wq
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var id,
      timing;

  if (name instanceof _transition_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Transition */ .eB) {
    id = name._id, name = name._name;
  } else {
    id = (0,_transition_index_js__WEBPACK_IMPORTED_MODULE_1__/* .newId */ .Si)(), (timing = defaultTiming).time = (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__/* .now */ .tB)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        (0,_transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay)(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Transition */ .eB(groups, this._parents, name, id);
}


/***/ }),

/***/ 7949:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1957);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7268);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(123);
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7479);





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__/* .interpolateTransformSvg */ .I : _interpolate_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_3__/* .tweenValue */ .J)(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}


/***/ }),

/***/ 3446:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7268);


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}


/***/ }),

/***/ 1375:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3363);


function delayFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .Ts)(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .Ts)(this, id).delay = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .Jt)(this.node(), id).delay;
}


/***/ }),

/***/ 6558:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3363);


function durationFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(this, id).duration = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .Jt)(this.node(), id).duration;
}


/***/ }),

/***/ 4228:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3363);


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(this, id).ease = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .Jt)(this.node(), id).ease;
}


/***/ }),

/***/ 6066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3363);


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(this, id).ease = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}


/***/ }),

/***/ 3589:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3363);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}


/***/ }),

/***/ 4876:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6541);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9064);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__/* .Transition */ .eB(subgroups, this._parents, this._name, this._id);
}


/***/ }),

/***/ 9064:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Si: () => (/* binding */ newId),
/* harmony export */   eB: () => (/* binding */ Transition)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1882);
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7949);
/* harmony import */ var _attrTween_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3446);
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1375);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6558);
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4228);
/* harmony import */ var _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6066);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4876);
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5636);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5207);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5182);
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3206);
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1683);
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7270);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9353);
/* harmony import */ var _styleTween_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8674);
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(137);
/* harmony import */ var _textTween_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7890);
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5509);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(123);
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3589);






















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
  selection: _selection_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
  transition: _transition_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,
  attrTween: _attrTween_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,
  style: _style_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,
  styleTween: _styleTween_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,
  text: _text_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,
  textTween: _textTween_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,
  tween: _tween_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,
  delay: _delay_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,
  duration: _duration_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,
  ease: _ease_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,
  easeVarying: _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,
  end: _end_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};


/***/ }),

/***/ 7479:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6957);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8981);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1197);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7737);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay
      : (c = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(a, b);
}


/***/ }),

/***/ 5636:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9064);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Transition */ .eB(merges, this._parents, this._name, this._id);
}


/***/ }),

/***/ 5207:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3363);


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .Ts : _schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .Jt)(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}


/***/ }),

/***/ 5182:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.on("end.remove", removeFunction(this._id));
}


/***/ }),

/***/ 3363:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   Jt: () => (/* binding */ get),
/* harmony export */   Op: () => (/* binding */ ENDING),
/* harmony export */   Ts: () => (/* binding */ init),
/* harmony export */   hV: () => (/* binding */ ENDED),
/* harmony export */   hZ: () => (/* binding */ set),
/* harmony export */   xo: () => (/* binding */ STARTING)
/* harmony export */ });
/* unused harmony exports CREATED, SCHEDULED, STARTED, RUNNING */
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1089);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1463);



var emptyOn = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0,d3_timer__WEBPACK_IMPORTED_MODULE_1__/* .timer */ .O1)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ 3206:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(574);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9064);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3363);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)(subgroup[i], name, id, i, subgroup, (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .Jt)(node, id));
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .eB(subgroups, this._parents, name, id);
}


/***/ }),

/***/ 1683:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(747);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9064);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3363);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .Jt)(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .eB(subgroups, parents, name, id);
}


/***/ }),

/***/ 7270:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1882);


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.prototype.constructor;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new Selection(this._groups, this._parents);
}


/***/ }),

/***/ 9353:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1957);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3683);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3363);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(123);
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7479);






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .j)(this, name),
        string1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .j)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .j)(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .j)(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .j)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .set */ .hZ)(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* .interpolateTransformCss */ .T : _interpolate_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_4__/* .tweenValue */ .J)(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}


/***/ }),

/***/ 8674:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}


/***/ }),

/***/ 137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction((0,_tween_js__WEBPACK_IMPORTED_MODULE_0__/* .tweenValue */ .J)(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}


/***/ }),

/***/ 7890:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}


/***/ }),

/***/ 5509:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9064);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3363);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var name = this._name,
      id0 = this._id,
      id1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .newId */ .Si)();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .Jt)(node, id0);
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Transition */ .eB(groups, this._parents, name, id1);
}


/***/ }),

/***/ 123:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   J: () => (/* binding */ tweenValue)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3363);


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .Jt)(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .Jt)(node, id).value[name];
  };
}


/***/ }),

/***/ 6470:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1943);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3578);




/***/ }),

/***/ 3578:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports Transform, identity, default */
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity;
  return node.__zoom;
}


/***/ }),

/***/ 1943:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9902);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3578);










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = interpolateZoom,
      listeners = dispatch("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, {passive: false})
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = pointer(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }

    noevent(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event.currentTarget,
        g = gesture(this, args, true).event(event),
        v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = pointer(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;

    dragDisable(event.view);
    nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();

    function mousemoved(event) {
      noevent(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      dragEnable(event.view, g.moved);
      noevent(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    noevent(event);
    if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      interrupt(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    noevent(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = pointer(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}


/***/ }),

/***/ 756:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ltv: () => (/* reexport safe */ d3_selection__WEBPACK_IMPORTED_MODULE_3__.Lt),
/* harmony export */   MbY: () => (/* reexport safe */ d3_time__WEBPACK_IMPORTED_MODULE_4__.Mb),
/* harmony export */   Pps: () => (/* reexport safe */ d3_scale__WEBPACK_IMPORTED_MODULE_2__.Pp),
/* harmony export */   R6t: () => (/* reexport safe */ d3_time__WEBPACK_IMPORTED_MODULE_4__.R6),
/* harmony export */   T6w: () => (/* reexport safe */ d3_time_format__WEBPACK_IMPORTED_MODULE_5__.T6),
/* harmony export */   Ubm: () => (/* reexport safe */ d3_selection__WEBPACK_IMPORTED_MODULE_3__.Ub),
/* harmony export */   aLc: () => (/* reexport safe */ d3_time_format__WEBPACK_IMPORTED_MODULE_5__.aL),
/* harmony export */   dAM: () => (/* reexport safe */ d3_time__WEBPACK_IMPORTED_MODULE_4__.dA),
/* harmony export */   tlR: () => (/* reexport safe */ d3_axis__WEBPACK_IMPORTED_MODULE_0__.tl),
/* harmony export */   w7C: () => (/* reexport safe */ d3_scale__WEBPACK_IMPORTED_MODULE_2__.w7),
/* harmony export */   wXd: () => (/* reexport safe */ d3_time__WEBPACK_IMPORTED_MODULE_4__.wX)
/* harmony export */ });
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(312);
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3537);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1303);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7875);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2472);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8090);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9902);
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6470);
































/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it declares 'ganttChart_DEBUG' on top-level, which conflicts with the current library output.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4283);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var ganttChart_DEBUG = {
    name: 'ganttChart_DEBUG',
    displayName: 'Gantt Chart',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .b) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .b(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId, options, initialState) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["ganttChart_DEBUG"] = ganttChart_DEBUG;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ganttChart_DEBUG);

})();

ganttChart_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=https://localhost:8080/assets/visual.js.map