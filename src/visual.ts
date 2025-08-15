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

import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;

//imports usado para personalizaçao
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import { VisualFormattingSettingsModel } from "./settings";

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
var customData;
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
var dataAgrupado = []; //usado em agrupamentoHierarquia
var jsonAgrupado = [];
var temAgrupamento = false;
var temPredecessor = false;
let dadosJson = [];

// as 3 variaveis abaixo sao utilizados para predecessorSucessor
var idsFilhos = [];
var idsPredecessores = [];
var htmlPredecessoresSelecionados = [];
// var predecessoresDadosAdd = []
// a variavel abaixo recebe a posiça em que a barra de rolagem verticcal esta para compensar na hora das setas
var posRolagemVertical = 0;
var posRolagemHorizontal = 0;

var formatoEscala = d3.utcFormat("%b %Y");

var corLinha = ["#F1F3F5", "#DEE2E6"];

var tamanhoScalaExib = 100;
var corPrimaria = { "1": "#006432", "2": "#93A100", "3": "#00867F" };
var corFonteHierarquia = "#FFFFFF";
var fontePrimaria = "Trebuchet MS";
var tamanhoFonteHierarquia = "16px";
var tamanhoComponenteNome = "28";

var principalPortView;

var tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("visibility", "hidden")
  .style("background-color", "#f9f9f9")
  .style("border", "1px solid #d3d3d3")
  .style("padding", "5px")
  .style("border-radius", "5px")
  .style("box-shadow", "0px 0px 5px 0px #000000")
  .style("width", "fit-content")
  .html(`tooltip inicial do visual de gantt`);

interface VisualSettings {
  enableAxis: {
    show: boolean;
  };
}

export class Visual implements IVisual {
  private svgRootHTML: Selection<any>;
  private settings: VisualSettings;
  private formattingSettings: VisualFormattingSettingsModel;
  private formattingSettingsService: FormattingSettingsService;

  constructor(options: VisualConstructorOptions) {
    this.formattingSettingsService = new FormattingSettingsService();
    this.svgRootHTML = d3
      .select(options.element)
      .append("div")
      .classed("card", true);
    svgBase = this.svgRootHTML;
    console.log("version: " + "3.0.1.3");
  }

  public update(options: VisualUpdateOptions) {
    // console.log("update exibir: " + exibir);
    //update exibir: row-modulo-1-0-BID 14 e 15 - Naru, Urissanê, Yba, Mairarê
    // console.log("update1");
    this.formattingSettings =
      this.formattingSettingsService.populateFormattingSettingsModel(
        VisualFormattingSettingsModel,
        options.dataViews[0]
      );
    // console.log("this.formattingSettings: " + JSON.stringify(this.formattingSettings))
    customData = this.formattingSettings.cards;
    //custom[0] é o card "Customização de Fonte"
    //custom[1] é o card "Personalizados"
    // console.log("customData: " + JSON.stringify(customData))
    // console.log("update2")
    dadosCustom(customData);
    // console.log("update3");

    dataMap = [];
    estruturaDados = [];
    dadosEstruturais = [];
    dataHoje = d3.timeMinute(new Date());
    DATA_INICIAL = new Date("3000-01-01");
    DATA_FINAL = new Date("1500-01-01");
    temAgrupamento = false;
    temPredecessor = false;

    const dataView: DataView = options.dataViews[0];
    CHART_HEIGHT = options.viewport.height;
    CHART_WIDTH = options.viewport.width;

    const matrixDataView: DataViewMatrix = dataView.matrix;

    const categorias = matrixDataView.rows.root.children;
    const estrutura = matrixDataView.rows.levels;
    const dadoEstrutura = estrutura[estrutura.length - 1].sources;
    const tipoDeEscala = options.dataViews[0].metadata.columns;
    // console.log("matrixDataView: " + JSON.stringify(matrixDataView));

    estruturaEscala(tipoDeEscala);

    estruturaHierarquia(dadoEstrutura, estruturaDados); //retorna quais campos no visual foram preenchidos
    // console.log("estruturaHierarquia - estruturaDados: " + JSON.stringify(estruturaDados))
    dadosEstruturais = estruturaDados;

    // console.log("hierarquiaTree antes: " + JSON.stringify(dataMap));
    hierarquiaTree(categorias, 0, dataMap);
    dadosJson = dataMap;
    console.log("hierarquiaTree depois: " + JSON.stringify(dataMap));
    preencheDataInicioFim(dataMap);

    defineEscala();

    //as duas funçoes so sao totalmente executadas caso tenha agrupamento, caso alguma informaçao nao deva ser aplicada junto com agrupamento entao nao é necessario aplicar nas funçoes abaixo
    agrupamentoHierarquia(dataMap, dataAgrupado);
    organizaJsonAgrupado(dataAgrupado, jsonAgrupado);

    const tagMainDiv = d3.selectAll(".main-div");
    tagMainDiv.remove();

    const tagMainSvg = d3.selectAll(".main-svg");
    tagMainSvg.remove();

    var mainDivTable = svgBase
      .append("div")
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

    nomesEventoTdHTML = mainTableTr
      .append("td")
      .attr("class", "mainTdNomes")
      .style("background-color", "white")
      .style("max-width", "305px")
      .style("height", "-webkit-fill-available")
      .style("margin-top", "21px")
      .style("vertical-align", "top")
      .style("position", "fixed")
      .style("overflow-x", "overlay")
      .style("overflow-y", "auto")
      .style("border", "1px solid")
      .style("padding-right", "25px");

    dadosEventoTdHTML = mainTableTr
      .append("td")
      .attr("class", "mainTdEventos")
      .style("width", tamanhoScalaExib + "px")
      .style("height", "-webkit-fill-available")
      .style("background-color", "white")
      .style("margin-top", "21px")
      .style("vertical-align", "top")
      .style("overflow-y", "auto")
      .style("position", "fixed")
      .style("max-width", "75%")
      .style("border", "1px solid")
      .style("left", "310px");

    var testeRegulagemAltura = dadosEventoTdHTML
      .append("div")
      .attr("class", "divMainTdEventos")
      .style("max-width", CHART_WIDTH - 300 + "px");

    // principalPortView = testeRegulagemAltura

    //necessario para criar as escalas
    svgRoot = testeRegulagemAltura
      .append("svg")
      .attr("class", "main-svg")
      .style("width", tamanhoScalaExib + "px")
      .style("height", "-webkit-fill-available")
      .style("position", "absolute")
      .style("top", "-40px")
      .style("left", "0px")
      .style("z-index", "0");

    dadosEventoScaleTdHTML = mainTableTr
      .append("td")
      .attr("class", "mainTdScale")
      .style("height", "30px")
      .style("width", CHART_WIDTH + "px")
      .style("max-width", CHART_WIDTH + "px")
      .style("vertical-align", "top")
      .style("overflow-x", "hidden")
      .style("left", "310px")
      .style("padding-left", "5px");

    var testeRegulagemScala2 = dadosEventoScaleTdHTML
      .append("div")
      .style("width", "310px")
      .style("height", "20px")
      .style("left", "00px")
      .style("position", "absolute")
      .style("background-color", "white");

    var testeRegulagemScala = dadosEventoScaleTdHTML
      .append("div")
      .attr("class", "divMainTdScala")
      .style("max-width", CHART_WIDTH - 300 + "px");

    //necessario para criar as escalas
    fixedScale = testeRegulagemScala
      .append("svg")
      .attr("class", "fixed-scale")
      .style("width", tamanhoScalaExib + "px")
      .style("height", "30px")
      .style("margin-left", "302px")
      .style("padding-right", "50px")
      .style("top", "0px")
      .style("left", "0px");

    var dadosEventoHTML = testeRegulagemAltura
      .append("div")
      .attr("class", "main-eventos")
      .style("width", tamanhoScalaExib + "px");

    principalPortView = dadosEventoHTML;

    const tagsetupScales = d3.selectAll(".grid");
    tagsetupScales.remove();
    const tagmilestone = d3.selectAll(".milestone");
    tagmilestone.remove();
    const tagtreeModulos = d3.selectAll('[class^="row-modulo-nome-"]');
    tagtreeModulos.remove();

    const tagfixedScales = d3.selectAll(".grid2");
    tagfixedScales.remove();

    posDataFinal = timeScale(DATA_FINAL);

    setupScales(svgRoot);
    fixedScales(fixedScale);
    //verificar se a data hoje esta entre DATA_INICIAL e DATA_FINAL
    if (dataHoje >= DATA_INICIAL && dataHoje <= DATA_FINAL) {
      milestone(svgRoot);
    }

    if (temAgrupamento) {
      treeModulos2(dataAgrupado, nomesEventoTdHTML, dadosEventoHTML);
    } else {
      treeModulos2(dataMap, nomesEventoTdHTML, dadosEventoHTML);
    }
    dadosExpandidos(nomesEventoTdHTML, dadosEventoHTML); // mantem as linhas em exibição apos atualizar o visual
    alternaCores();

    //seleciona as td que tem os nomes e os eventos e cria um listener para caso seja feita a rolagem em uma o evento tb ser executada na outra
    const mainTdNomes = document.querySelector(".mainTdNomes");
    const mainTdEventos = document.querySelector(".mainTdEventos");
    const mainTdScale = document.querySelector(".mainTdScale");
    mainTdNomes.addEventListener("scroll", function () {
      // Define a posição de rolagem da segunda tabela para a posição de rolagem da primeira
      mainTdEventos.scrollTop = mainTdNomes.scrollTop;
    });

    // Adiciona um listener de evento para o evento de rolagem na segunda tabela
    mainTdEventos.addEventListener("scroll", function () {
      // Define a posição de rolagem da primeira tabela para a posição de rolagem da segunda
      mainTdNomes.scrollTop = mainTdEventos.scrollTop;
      posRolagemVertical = mainTdNomes.scrollTop;
    });

    const td = document.querySelector(".mainTdNomes") as HTMLTableCellElement;
    alturaRolagem = td.scrollWidth;

    // Adiciona um listener de evento para o evento de rolagem na segunda tabela
    mainTdScale.addEventListener("scroll", function () {
      // Define a posição de rolagem da primeira tabela para a posição de rolagem da segunda
      mainTdEventos.scrollLeft = mainTdScale.scrollLeft;
    });

    // Adiciona um listener de evento para o evento de rolagem na segunda tabela
    mainTdEventos.addEventListener("scroll", function () {
      // Define a posição de rolagem da primeira tabela para a posição de rolagem da segunda
      mainTdScale.scrollLeft = mainTdEventos.scrollLeft;
      posRolagemHorizontal = mainTdScale.scrollLeft;
    });
    atualizaLarguraMainTdNomes("inicioZerado", "inicioZerado", -1, 0);

    // ajustaFonte()
  }

  public getFormattingModel(): powerbi.visuals.FormattingModel {
    return this.formattingSettingsService.buildFormattingModel(
      this.formattingSettings
    );
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function estruturaEscala(element) {
  var key = "escala";

  for (var i = 0; i < element.length; i++) {
    if (key in element[i].roles) {
      tipoEscalaGrafico = element[i].displayName;
    }
  }
}

function defineEscala() {
  const inicio = new Date(DATA_INICIAL);
  const fim = new Date(DATA_FINAL);
  var resultadoTamanhoEscala;

  if (tipoEscalaGrafico == "Ano") {
    resultadoTamanhoEscala = fim.getFullYear() - inicio.getFullYear();
    if (resultadoTamanhoEscala > 12) {
      tamanhoScalaExib = resultadoTamanhoEscala * (CHART_WIDTH / 12);
    } else {
      tamanhoScalaExib = CHART_WIDTH - 304;
    }
    escalaTickSize = d3.utcYear.every(1);
  }
  if (tipoEscalaGrafico == "Trimestre") {
    resultadoTamanhoEscala =
      (fim.getFullYear() - inicio.getFullYear()) * 12 +
      fim.getMonth() -
      inicio.getMonth();
    if (resultadoTamanhoEscala > 12) {
      tamanhoScalaExib = resultadoTamanhoEscala * (CHART_WIDTH / 12 / 3);
    } else {
      tamanhoScalaExib = CHART_WIDTH - 304;
    }
    escalaTickSize = d3.utcMonth.every(3);
  }
  if (tipoEscalaGrafico == "Mês") {
    resultadoTamanhoEscala =
      (fim.getFullYear() - inicio.getFullYear()) * 12 +
      fim.getMonth() -
      inicio.getMonth();
    if (resultadoTamanhoEscala > 12) {
      tamanhoScalaExib = resultadoTamanhoEscala * (CHART_WIDTH / 12);
    } else {
      tamanhoScalaExib = CHART_WIDTH - 304;
    }
    escalaTickSize = d3.utcMonth.every(1);
  }
  if (tipoEscalaGrafico == "Dia") {
    resultadoTamanhoEscala = Math.floor(
      (fim.getTime() - inicio.getTime()) / (1000 * 3600 * 24)
    );
    if (resultadoTamanhoEscala > 12) {
      tamanhoScalaExib = resultadoTamanhoEscala * 80;
    } else {
      tamanhoScalaExib = CHART_WIDTH - 304;
    }
    formatoEscala = d3.utcFormat("%d %b %Y");
    escalaTickSize = d3.utcDay.every(1);
  }
}


//!TODO
//! verificar a funçao abaixo
//!
function dadosExpandidos(svgHierarquiaNomes, svgHierarquiaEventos) {
  // console.log("dadosExpandidos exibir: " + exibir);
  //dadosExpandidos exibir: row-modulo-1-0-BID 14 e 15 - Naru, Urissanê, Yba, Mairarê
  exibir.forEach((e) => {
    console.log("exibir.forEach: " + e);
    var categoriaExibirNomes = svgHierarquiaNomes.selectAll('[class^="' + e + '"]');
    // console.log("categoriaExibirNomes: ", categoriaExibirNomes.nodes()[0].outerHTML);
    if (categoriaExibirNomes.nodes().length > 0) {
      // console.log("categoriaExibirNomes: ", categoriaExibirNomes.nodes()[0]);
      var teste = categoriaExibirNomes.select('[class^="row-linhaEvento-"]');
      console.log("teste: ", teste)




      var eventoHide = categoriaExibirNomes.select('[class^="iconPlus-div"]');
      if (eventoHide) {
        //   console.log("if (eventoHide)");
        eventoHide.style("display", eventoHide.style("display") === "none" ? "block" : "none");
      }
      var eventoShow = categoriaExibirNomes.select('[class^="iconMinus-div"]');
      if (eventoShow) {
        //   console.log("if (eventoShow)");
        eventoShow.style("display", eventoShow.style("display") === "none" ? "block" : "none");
      }

      //!TODO rgb(204,0,0) verificar a logica abaixo pois pode ser otimizada para uso parecido do else .querySelectorAll(`.${e} > [class*="row-modulo2-"]`).length > 0)
      var segundaHierarquia = categoriaExibirNomes.selectAll('[class^="row-modulo2-"]');

      console.log("antes if (segundaHierarquia)")
      if (segundaHierarquia) {
        if (!categoriaExibirNomes.selectAll('[class^="ocultar"]').empty()) {
          var segundaHierarquia2 = categoriaExibirNomes.selectAll('[class^="row-modulo2-null"]');
          if (segundaHierarquia2) {
            segundaHierarquia2.style("display", segundaHierarquia2.style("display") === "none" ? "contents" : "none");
          }
          var segundaHierarquia2 =
            categoriaExibirNomes.selectAll('[class^="ocultar"]');
          if (segundaHierarquia2.size() > 0) {
            segundaHierarquia2.style("display", "none");
          }

          var terceiraHierarquia = categoriaExibirNomes.selectAll('[class^="row-linhaEvento-"]');
          if (terceiraHierarquia) {
            terceiraHierarquia.style("display", terceiraHierarquia.style("display") === "none" ? "contents" : "none");
          }
        } else {
          try {
            if (categoriaExibirNomes.nodes()[0].querySelectorAll(`.${e} > [class*="row-modulo2-"]`).length > 0) {
              var filhos = categoriaExibirNomes.nodes()[0].querySelectorAll(`.${e} > [class*="row-modulo2-"]`);
              filhos.forEach(function (filho) {
                filho.style.display = "contents";
              });
            }
            if (categoriaExibirNomes.nodes()[0].querySelectorAll(`.${e} > [class*="row-linhaEvento-"]`).length > 0) {
              // if (categoriaExibirNomes.querySelectorAll(`.${e} > [class*="row-linhaEvento-"]`).length > 0) {
              console.log("categoriaExibirNomes.querySelectorAll")
              var filhos = categoriaExibirNomes.nodes()[0].querySelectorAll(`.${e} > [class*="row-linhaEvento-"]`);
              //   var filhos = categoriaExibirNomes.querySelectorAll(`.${e} > [class*="row-linhaEvento-"]`);
              filhos.forEach(function (filho) {
                filho.style.display = "contents";
              });
            }
          } catch (error) { }
        }
      }
    } else {
      console.log("falha em: if (categoriaExibirNomes.nodes().length > 0) ")
    }

    console.log("parte 2!!!!")
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

          var segundaHierarquia2Evento =
            categoriaExibirEventos.selectAll('[class^="ocultar"]');
          if (segundaHierarquia2Evento.size() > 0) {
            segundaHierarquia2Evento.style("display", "none");
          }

          var terceiraHierarquiaEvento = categoriaExibirEventos.selectAll('[class^="row-linhaEvento-"]');
          if (terceiraHierarquiaEvento) {
            terceiraHierarquiaEvento.style("display", terceiraHierarquiaEvento.style("display") === "none" ? "contents" : "none");
          }
        } else {
          try {
            if (categoriaExibirEventos.nodes()[0].querySelectorAll(`.${e} > [class*="row-modulo2-"]`).length > 0) {
              var filhosEvento = categoriaExibirEventos.nodes()[0].querySelectorAll(`.${e} > [class*="row-modulo2-"]`);
              filhosEvento.forEach(function (filho) {
                filho.style.display = "contents";
              });
            }
            if (
              categoriaExibirEventos.nodes()[0].querySelectorAll(`.${e} > [class*="row-linhaEvento-"]`).length > 0) {
              var filhosEvento = categoriaExibirEventos.nodes()[0].querySelectorAll(`.${e} > [class*="row-linhaEvento-"]`);
              filhosEvento.forEach(function (filho) {
                filho.style.display = "contents";
              });
            }
          } catch (error) { }
        }
      }
    }
  });
}

function agrupamentoHierarquia(dataMap, dataAgrupado) {
  // Objeto para rastrear agrupamentos já processados
  const agrupamentosMap = {};

  dataMap.forEach((data) => {
    if (data.dados) {
      const novoGrupo = {
        level: data.level,
        nome: data.nome,
        qtdSub: data.qtdSub,
        dados: [],
      };
      dataAgrupado.push(novoGrupo);
      agrupamentoHierarquia(data.dados, novoGrupo.dados);
    } else if (data.levelValues) {
      if (data.levelValues[0].agrupamento) {
        temAgrupamento = true;
      }
      const agrupamentoNome = data.levelValues[0].agrupamento;

      // Verifica se o agrupamento já foi processado
      if (agrupamentosMap[agrupamentoNome]) {
        // Se já existe, adiciona os novos levelValues ao existente
        agrupamentosMap[agrupamentoNome].levelValues.push(...data.levelValues);
      } else {
        // Se não existe, cria um novo agrupamento
        const novoAgrupamento = {
          level: data.level,
          agrupamento: agrupamentoNome,
          levelValues: [...data.levelValues], // Copia os levelValues
        };
        agrupamentosMap[agrupamentoNome] = novoAgrupamento; // Adiciona ao mapa
        dataAgrupado.push(novoAgrupamento); // Adiciona ao array de agrupados
      }
    } else {
      dataAgrupado.push({
        evento: data.evento,
        dataInicio: data.dataInicio,
        dataFim: data.dataFim,
        ...(data.rot && { rot: data.rot }),
        ...(data.icon && { icon: data.icon }),
        ...(data.cor && { cor: data.cor }),
      });
    }
  });
}

function organizaJsonAgrupado(dados, jsonAgrupado) {
  dados.forEach((data) => {
    if (data.dados) {
      // Adiciona o objeto atual ao jsonAgrupado
      const novoGrupo = {
        level: data.level,
        nome: data.nome,
        qtdSub: data.qtdSub,
        dados: [],
      };
      jsonAgrupado.push(novoGrupo);

      // Verifica se o primeiro item de dados tem levelValues
      if (data.dados[0].levelValues) {
        data.dados.forEach((event) => {
          // Cria um novo objeto para o agrupamento
          const agrupamentoExistente = novoGrupo.dados.find(
            (item) => item.agrupamento === event.agrupamento
          );
          if (agrupamentoExistente) {
            // Se o agrupamento já existe, adiciona o evento ao levelValues existente
            agrupamentoExistente.levelValues.push({
              evento: event.levelValues[0].evento,
              dataInicio: event.levelValues[0].dataInicio,
              dataFim: event.levelValues[0].dataFim,
              ...(event.levelValues[0].rot && {
                rot: event.levelValues[0].rot,
              }),
              ...(event.levelValues[0].icon && {
                icon: event.levelValues[0].icon,
              }),
              ...(event.levelValues[0].cor && {
                cor: event.levelValues[0].cor,
              }),
            });
          } else {
            // Se não existe, cria um novo agrupamento
            const eventosAdd = {
              level: data.level + 1,
              agrupamento: event.agrupamento,
              levelValues: [
                {
                  evento: event.levelValues[0].evento,
                  dataInicio: event.levelValues[0].dataInicio,
                  dataFim: event.levelValues[0].dataFim,
                  ...(event.levelValues[0].rot && {
                    rot: event.levelValues[0].rot,
                  }),
                  ...(event.levelValues[0].icon && {
                    icon: event.levelValues[0].icon,
                  }),
                  ...(event.levelValues[0].cor && {
                    cor: event.levelValues[0].cor,
                  }),
                },
              ],
            };
            novoGrupo.dados.push(eventosAdd);
          }
        });
      } else {
        // Chama a função recursivamente se não houver levelValues
        organizaJsonAgrupado(data.dados, novoGrupo.dados);
      }
    }
  });
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
      displayName: displayName,
    });
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
        marcosEventos: [],
      });
      hierarquiaTree(element[i].children, lvl + 1, dataMap[i].dados);
    } else if ("levelValues" in element[i]) {
      dataMap.push({
        level: lvl,
        levelValues: [],
      });
      hierarquiaTree(element[i].levelValues, lvl + 1, dataMap[i].levelValues);
    } else if ("levelSourceIndex" in element[i]) {
      var cat = null; //categoria
      var sTipo = null; //subTipo = Agrupamento
      var dIni = null; //dataInicial
      var dFim = null; //dataFim
      var rot = []; //rotulo
      var icon = null; //icone
      var cor = null; //cor
      var idEvento = null; //id do Evento
      var predecessor = null; //predecessor
      var caminhoCritico = null; //caminhoCritico
      var previstoInicio = null; //previstoInicio
      var previstoFinal = null; //previstoFinal
      var toolTipDados = []; //toolTipDados

      dadosEstruturais.forEach((e) => {
        if (e.roleName == "category") {
          cat = e.index;
        } else if (e.roleName == "agrupamento") {
          sTipo = e.index;
        } else if (e.roleName == "dataInicial") {
          dIni = e.index;
        } else if (e.roleName == "dataFinal") {
          dFim = e.index;
        } else if (e.roleName == "rotulo") {
          rot.push(e.index);
        } else if (e.roleName == "icone") {
          icon = e.index;
        } else if (e.roleName == "cor") {
          cor = e.index;
        } else if (e.roleName == "idEvento") {
          idEvento = e.index;
        } else if (e.roleName == "predecessor") {
          predecessor = e.index;
          temPredecessor = true;
        } else if (e.roleName == "caminhoCritico") {
          caminhoCritico = e.index;
        } else if (e.roleName == "previstoInicio") {
          previstoInicio = e.index;
        } else if (e.roleName == "previstoFinal") {
          previstoFinal = e.index;
        } else if (e.roleName == "toolTipDados") {
          toolTipDados.push(e.index);
        }
      });

      if (dataMap.length == 0) {
        dataMap.push({
          evento: element[cat].value,
          ...(element[sTipo] && { agrupamento: element[sTipo].value }),
          dataInicio: element[dIni].value,
          dataFim: element[dFim].value,
          ...(rot
            .map((r) => element[r].value)
            .filter((v) => v !== null && v !== undefined && v !== "null")
            .join(" - ") !== "" && {
            rot: rot
              .map((r) => element[r].value)
              .filter((v) => v !== null && v !== undefined && v !== "null")
              .join(" - "),
          }),
          ...(element[icon] && { icon: element[icon].value }),
          ...(element[cor] && { cor: element[cor].value }),
          ...(element[idEvento] && { idEvento: element[idEvento].value }),
          ...(element[predecessor] && {
            predecessor: element[predecessor].value,
          }),
          ...(element[caminhoCritico] && {
            caminhoCritico: element[caminhoCritico].value,
          }),
          ...(element[previstoInicio] && {
            previstoInicio: element[previstoInicio].value,
          }),
          ...(element[previstoFinal] && {
            previstoFinal: element[previstoFinal].value,
          }),
          // ...(element[toolTipDados] && {
          //   toolTipDados: element[toolTipDados].value,
          // }),
          ...(toolTipDados
            .map((td) => element[td].value)
            .filter((v) => v !== null && v !== undefined && v !== "null")
            .join(" <br> ") !== "" && {
            toolTipDados: toolTipDados
              .map((td) => element[td].value)
              .filter((v) => v !== null && v !== undefined && v !== "null")
              .join(" <br> "),
          }),
        });
        return dataMap;
      } else {
        return "";
      }
    } else {
      return "";
    }
  }
}

function preencheDataInicioFim(jsonData) {
  DATA_INICIAL = new Date("3000-01-01");
  DATA_FINAL = new Date("1500-01-01");

  calculaDatasInicioFim(jsonData);
  var nextMonthInicio = DATA_INICIAL.getMonth();
  var nextYearInicio = DATA_INICIAL.getFullYear();
  if (nextMonthInicio > 11) {
    nextMonthInicio = 0;
    nextYearInicio++;
  }
  const lastDayOfNextMonthInicio = new Date(
    nextYearInicio,
    nextMonthInicio + 1,
    0
  ).getDate();
  DATA_INICIAL_SF = new Date(nextYearInicio, nextMonthInicio, 1);
  DATA_INICIAL = DATA_INICIAL_SF;

  const year = DATA_FINAL.getFullYear();
  const month = DATA_FINAL.getMonth() + 1;
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  const lastDayOfMonthString = `${year}-${month
    .toString()
    .padStart(2, "0")}-${lastDayOfMonth.toString().padStart(2, "0")}`;
  //faz com que a data final seja o ultimo dia do mes
  DATA_FINAL = new Date(lastDayOfMonthString);

  var nextMonthFinal = DATA_FINAL.getMonth() + 1;
  var nextYearFinal = DATA_FINAL.getFullYear();
  if (nextMonthFinal > 11) {
    nextMonthFinal = 0;
    nextYearFinal++;
  }
  const lastDayOfNextMonthFinal = new Date(
    nextYearFinal,
    nextMonthFinal + 1,
    0
  ).getDate();
  DATA_FINAL_SF = new Date(nextYearFinal, nextMonthFinal, 1);
  DATA_FINAL = DATA_FINAL_SF;
}

function calculaDatasInicioFim(jsonData) {
  jsonData.forEach((d) => {
    if (d.dados) {
      calculaDatasInicioFim(d.dados);
    } else if (d.levelValues) {
      let currentDate = new Date(d.levelValues[0].dataInicio);
      if (currentDate < DATA_INICIAL) {
        DATA_INICIAL = currentDate;
      }
      if (currentDate > DATA_FINAL) {
        DATA_FINAL = currentDate;
      }
    } else {
    }
  });
}

function tamanhoEscala() {
  console.log("tamanhoEscala dataInicio: " + DATA_INICIAL);
  console.log("tamanhoEscala dataFim: " + DATA_FINAL);

  const inicio = new Date(DATA_INICIAL);
  const fim = new Date(DATA_FINAL);
  var resultadoTamanhoEscala;
  if (tipoEscalaGrafico == "Ano") {
    resultadoTamanhoEscala = fim.getFullYear() - inicio.getFullYear();
    console.log("tamanhoEscala: " + resultadoTamanhoEscala);
  }
  if (tipoEscalaGrafico == "Trimestre") {
    resultadoTamanhoEscala =
      (fim.getFullYear() - inicio.getFullYear()) * 12 +
      fim.getMonth() -
      inicio.getMonth();
    console.log("tamanhoEscala: " + resultadoTamanhoEscala / 3);
  }
  if (tipoEscalaGrafico == "Mês") {
    resultadoTamanhoEscala =
      (fim.getFullYear() - inicio.getFullYear()) * 12 +
      fim.getMonth() -
      inicio.getMonth();
    console.log("tamanhoEscala: " + resultadoTamanhoEscala);
  }
  if (tipoEscalaGrafico == "Dia") {
    resultadoTamanhoEscala = Math.floor(
      (fim.getTime() - inicio.getTime()) / (1000 * 3600 * 24)
    );
    console.log("tamanhoEscala: " + resultadoTamanhoEscala);
  }
}

function timeScaleAxis() {
  var tamanhoData = d3
    .scaleUtc()
    .domain([DATA_INICIAL, DATA_FINAL])
    .clamp(true)
    .range([0, tamanhoScalaExib]);
  return tamanhoData;
}

function timeScaleAxisNice() {
  var tamanhoData = d3
    .scaleUtc()
    .domain([DATA_INICIAL, DATA_FINAL])
    .nice()
    .clamp(true)
    .range([0, tamanhoScalaExib]);
  return tamanhoData;
}

const xScale = d3
  .scaleTime()
  .domain([DATA_INICIAL, DATA_FINAL])
  .range([0, tamanhoScalaExib]);

function timeScale(data) {
  var parser = d3.timeParse("%d/%m/%Y");
  var parsedData = parser(data);

  var tamanhoData = d3
    .scaleUtc()
    .domain([DATA_INICIAL, DATA_FINAL])
    .clamp(true)
    .range([0, tamanhoScalaExib]);
  if (!parsedData) {
    return tamanhoData(new Date(data));
  } else {
    return tamanhoData(parsedData);
  }
}

function setupScales(svg) {
  var grid = svg
    .append("g")
    .attr("class", "grid")
    .style("height", alturaRolagem + "px")
    // .style("height", "1200px")
    .attr("transform", `translate(0, ${MARGIN_TOP})`)
    .call(
      d3
        .axisTop(timeScaleAxis())
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
    .attr("dy", "1em");
}

function fixedScales(svg) {
  const anoInicial = DATA_INICIAL.getFullYear();
  const mesInicial = DATA_INICIAL.getMonth(); // Lembre-se que os meses começam em 0 (Janeiro)

  const anoFinal = DATA_FINAL.getFullYear();
  const mesFinal = DATA_FINAL.getMonth();

  // Verifica se o ano é o mesmo e se o mês é o seguinte
  if (anoFinal === anoInicial && mesFinal === mesInicial + 1) {
    var grid = svg
      .append("g")
      .attr("class", "grid2")
      .style("height", "30px")
      .attr("transform", `translate(0, ${MARGIN_TOP})`)
      .call(
        d3
          .axisTop(timeScaleAxisNice())
          .ticks(escalaTickSize)
          .tickFormat(formatoEscala)
      );
  } else if (
    anoFinal === anoInicial + 1 &&
    mesFinal === 0 &&
    mesInicial === 11
  ) {
    var grid = svg
      .append("g")
      .attr("class", "grid2")
      .style("height", "30px")
      .attr("transform", `translate(0, ${MARGIN_TOP})`)
      .call(
        d3
          .axisTop(timeScaleAxisNice())
          .ticks(escalaTickSize)
          .tickFormat(formatoEscala)
      );
  } else {
    var grid = svg
      .append("g")
      .attr("class", "grid2")
      .style("height", "30px")
      .attr("transform", `translate(0, ${MARGIN_TOP})`)
      .call(
        d3
          .axisTop(timeScaleAxis())
          .ticks(escalaTickSize)
          .tickFormat(formatoEscala)
      );
  }
}

function milestone(svg) {
  var mile = svg
    .append("g")
    .attr("transform", function () {
      var hoje = timeScale(dataHoje);
      return `translate(${hoje})`;
    })
    .attr("class", "milestone")
    .append("line")
    .attr("y2", 9995 + 20)
    .attr("stroke", "#ED1D29");
}

function atualizaAlturaMainTdNomes() {
  const td = document.querySelector(".mainTdNomes") as HTMLTableCellElement;
  alturaRolagem = td.scrollHeight;
  svgRoot.style("height", alturaRolagem + "px");
}

function atualizaLarguraMainTdNomes(tipo, hierarquia, index, level) {
  const queryMainTdNomes = document.querySelector(
    ".mainTdNomes"
  ) as HTMLTableCellElement;
  const tds = queryMainTdNomes.querySelectorAll(
    `[class^="row-modulo-"][class*="-0-"]`
  ) as unknown as HTMLTableCellElement[];

  var tamanhoDomaior = 0;
  var nomeDoMaior = "inicioZerado";

  if (tipo == "inicioZerado") {
    const tdsArray = Array.from(tds);
    tdsArray.forEach((td, index) => {
      if (td.scrollWidth > tamanhoDomaior) {
        tamanhoDomaior = td.scrollWidth;
        nomeDoMaior = hierarquia;
      }
    });
    if (index == -1) {
      larguraRolagem.push({
        nomeHierarquia: nomeDoMaior,
        tamanho: tamanhoDomaior,
      });
    }
    const maior = Math.max(...larguraRolagem.map((item) => item.tamanho));
    tds.forEach((td) => {
      td.style.width = maior + "px";
    });
  } else if (tipo == "expande") {
    tds.forEach((td) => {
      td.style.width = "305px";
    });

    const tdsArray = Array.from(tds);
    tdsArray.forEach((td, index) => {
      if (td.scrollWidth > tamanhoDomaior) {
        tamanhoDomaior = td.scrollWidth;
        nomeDoMaior = hierarquia;
      }
    });
    larguraRolagem.push({
      nomeHierarquia: nomeDoMaior,
      tamanho: tamanhoDomaior,
    });
    const maior = Math.max(...larguraRolagem.map((item) => item.tamanho));
    tds.forEach((td) => {
      td.style.width = maior + "px";
    });
  } else if (tipo == "comprime") {
    larguraRolagem = larguraRolagem.filter(
      (item) => item.nomeHierarquia !== hierarquia
    );
    const maior = Math.max(...larguraRolagem.map((item) => item.tamanho));
    tds.forEach((td) => {
      td.style.width = maior + "px";
    });
  }
}

function treeModulos2(data, svgHierarquiaNomes, svgHierarquiaEventos) {
  data.forEach((d, index) => {
    defineNivelHierarquico(d, svgHierarquiaNomes, svgHierarquiaEventos, index);
  });
}

// esssa funçao deve ser chamada quando é passado somente um array de itens
function recursividadeHierarquiaArray(
  data,
  svgHierarquiaNomes,
  svgHierarquiaEventos,
  index
) {
  var dadosRetornar = [];
  if (data[0].agrupamento) {
    var recursividadeHierarquiaNull = defineNivelHierarquicoComAgrupamento(
      data,
      svgHierarquiaNomes,
      svgHierarquiaEventos,
      index
    );
    dadosRetornar.push(recursividadeHierarquiaNull);
  } else if (!data[0].agrupamento) {
    data.forEach((d) => {
      var recursividadeHierarquiaNull = defineNivelHierarquico(
        d,
        svgHierarquiaNomes,
        svgHierarquiaEventos,
        index
      );
      dadosRetornar.push(recursividadeHierarquiaNull);
    });
  }
  return dadosRetornar;
}

function defineNivelHierarquicoComAgrupamento(
  data,
  svgHierarquiaNomes,
  svgHierarquiaEventos,
  index
) {
  var posRetorno = [];
  data.forEach((d) => {
    var eventoLinhaHierarquia = hierarquiaEvento(
      d.levelValues,
      svgHierarquiaNomes,
      svgHierarquiaEventos,
      index,
      d.agrupamento
    );
    posRetorno.push(eventoLinhaHierarquia[0]);
  });
  return posRetorno;
}

// esssa funçao deve ser chamada quando é passado somente um unico item
function defineNivelHierarquico(
  d,
  svgHierarquiaNomes,
  svgHierarquiaEventos,
  index
) {
  if (d.level == 0) {
    if (index != 0) {
      var espacamentoNomes = svgHierarquiaNomes
        .append("table")
        .attr("class", "row-modulo-espacamentoNomes")
        .style("height", "5px");

      var espacamentoEventos = svgHierarquiaEventos
        .append("table")
        .attr("class", "row-modulo-espacamentoEventos")
        .style("height", "5px");
    }
    var barrasEvento = hierarquiaPrimeiroNivel(
      d,
      svgHierarquiaNomes,
      svgHierarquiaEventos,
      index
    );
  } else if (d.level !== 0 && d.dados) {
    if (d.nome == "null" || d.nome == null) {
      var hierarquiaNull = recursividadeHierarquiaArray(
        d.dados,
        svgHierarquiaNomes,
        svgHierarquiaEventos,
        index
      );
      return hierarquiaNull;
    } else {
      var hierarquiaNotNull = hierarquiaPrimeiroNivel(
        d,
        svgHierarquiaNomes,
        svgHierarquiaEventos,
        index
      );
      return hierarquiaNotNull;
    }
  } else if (d) {
    var eventoLinhaHierarquia = hierarquiaEvento(
      d.levelValues,
      svgHierarquiaNomes,
      svgHierarquiaEventos,
      index,
      d.agrupamento
    );
    return eventoLinhaHierarquia[0];
  }
}

function hierarquiaPrimeiroNivel(
  data,
  svgHierarquiaNomes,
  svgHierarquiaEventos,
  index
) {
  // adiciona a estrutura inicial da parte de eventos (direita)
  var tableModulosHierarquiaEventos = svgHierarquiaEventos
    .append("table")
    .attr("class", "row-modulo-" + index + "-" + data.level + "-" + data.nome)
    .attr("id", "hierarquia1-evento")
    // .style("background-color", "aqua")
    .style("height", tamanhoComponenteNome + 9 + "px")
    // .style("height", "20px")
    .style("display", function () {
      if (data.level != 0) {
        return "none";
      }
    });

  var rowEventos = tableModulosHierarquiaEventos
    .append("tr")
    .attr("class", "tr-modulo-" + index + "-" + data.level + "-" + data.nome)
    .classed("showLinhaAlternada", function () {
      if (data.level == 0) {
        return true;
      }
    })
    .style("display", "flex")
    .style("height", tamanhoComponenteNome + 5 + "px")
    // .style("height", tamanhoComponenteNome + 4 + "px")
    // .style("height", "25px")
    .style("width", tamanhoScalaExib + "px");
  // fim da adição da estrutura inicial da parte de eventos (direita)

  // adiciona a estrutura da primeira hierarquia(esquerda), juntamente com os botoes e nomes
  var tableModulosHierarquiaNomes = svgHierarquiaNomes
    .append("table")
    .attr("class", "row-modulo-" + index + "-" + data.level + "-" + data.nome)
    .attr("id", "hierarquia1-nome")
    .style("width", "305px")
    .style("height", tamanhoComponenteNome + "px")
    // .style("height", "20px")
    // .style("background-color", "#" + Object.values(corPrimaria)[index % Object.keys(corPrimaria).length])
    .style(
      "background-color",
      Object.values(corPrimaria)[index % Object.keys(corPrimaria).length]
    )
    .style("padding-left", function () {
      if (data.level != 0) {
        return "15px";
      } else {
        return "0px";
      }
    })
    .style("display", function () {
      if (data.level != 0) {
        return "none";
      }
    });

  var rowHierarquia = tableModulosHierarquiaNomes
    .append("tr")
    .style("display", "flex")
    .style("height", tamanhoComponenteNome + "px")
    // .style("height", "20px")
    .attr("class", "alterando")
    .style("width", function () {
      if (data.level == 0) return "max-content";
      else {
        return "max-content";
      }
    })
    .style("margin-bottom", "5px")
    // .style("margin-bottom", "4px")
    .style("margin-left", function () {
      var margem = 15;
      return margem * data.level + "px";
    });

  var buttonPlus = rowHierarquia
    .append("button")
    .attr("class", "iconPlus-div")
    .style("padding-left", "0px")
    .style("width", "36px")
    .style("background-color", "transparent")
    .style("border", "none")
    .on("click", function () {
      const td = document.querySelector(".mainTdNomes") as HTMLTableCellElement;

      exibir.push("row-modulo-" + index + "-" + data.level + "-" + data.nome);

      var eventoHide = rowHierarquia.select(".iconPlus-div");
      if (eventoHide) {
        eventoHide.style(
          "display",
          eventoHide.style("display") === "none" ? "block" : "none"
        );
      }
      var eventoShow = rowHierarquia.select(".iconMinus-div");
      if (eventoShow) {
        eventoShow.style(
          "display",
          eventoShow.style("display") === "none" ? "block" : "none"
        );
      }

      try {
        var alteraLinhaEvento = tableModulosHierarquiaNomes.selectAll(
          `:scope > [class^="row-linhaEvento-${index}"]`
        );
        // Altera o estilo apenas dos filhos diretos
        alteraLinhaEvento.style("display", function () {
          return d3.select(this).style("display") === "none"
            ? "contents"
            : "none";
        });
      } catch (error) { }

      try {
        var segundaHierarquia = tableModulosHierarquiaNomes.selectAll(
          `:scope > [class^="row-modulo-${index}"]`
        );
        if (segundaHierarquia) {
          segundaHierarquia.style(
            "display",
            segundaHierarquia.style("display") === "none" ? "contents" : "none"
          );
        }
      } catch (error) { }
      try {
        var segundaHierarquia2 =
          tableModulosHierarquiaNomes.selectAll('[class^="ocultar"]');
        if (segundaHierarquia2) {
          segundaHierarquia2.style(
            "display",
            segundaHierarquia2.style("display") === "none" ? "contents" : "none"
          );
        }

        var terceiraHierarquia = tableModulosHierarquiaNomes.selectAll(
          `[class^="row-linhaEvento-${index}"]`
        );
        if (terceiraHierarquia) {
          terceiraHierarquia.style(
            "display",
            terceiraHierarquia.style("display") === "none" ? "contents" : "none"
          );
        }
      } catch (error) { }

      // altera a propriedade de exibição na parte de eventos
      try {
        var eventoDiv = rowEventos.select(".evento-div");
        if (eventoDiv) {
          eventoDiv.style(
            "display",
            eventoDiv.style("display") === "none" ? "block" : "none"
          );
        }
      } catch (error) { }

      try {
        var eventoDiv2 = rowEventos.select(".evento-div2");
        if (eventoDiv2) {
          eventoDiv2.style(
            "display",
            eventoDiv2.style("display") === "none" ? "block" : "none"
          );
        }
      } catch (error) { }

      try {
        var alteraLinhaEvento = tableModulosHierarquiaEventos.selectAll(
          `:scope > [class^="row-linhaEvento-${index}"]`
        );
        // Altera o estilo apenas dos filhos diretos
        alteraLinhaEvento.style("display", function () {
          return d3.select(this).style("display") === "none"
            ? "contents"
            : "none";
        });
        var alternadoLinhaEvento = alteraLinhaEvento.selectAll(".linha-evento");
        alternadoLinhaEvento.classed("showLinhaAlternada", true);
      } catch (error) { }

      try {
        var segundaHierarquiaEventos = tableModulosHierarquiaEventos.selectAll(
          `:scope > [class^="row-modulo-${index}"]`
        );
        if (segundaHierarquiaEventos) {
          segundaHierarquiaEventos.style(
            "display",
            segundaHierarquiaEventos.style("display") === "none"
              ? "contents"
              : "none"
          );
        }
      } catch (error) { }

      try {
        var segundaHierarquiaEventos2 = tableModulosHierarquiaEventos.selectAll(
          `[class^="tr-modulo-${index}-${data.level + 1}"]`
        );
        if (segundaHierarquiaEventos2) {
          segundaHierarquiaEventos2.classed("showLinhaAlternada", true);
        }
      } catch (error) { }

      //!TODO
      //! verificar essa classe ocultar
      try {
        var segundaHierarquia2Eventos =
          tableModulosHierarquiaEventos.selectAll('[class^="ocultar"]');
        if (segundaHierarquia2Eventos) {
          segundaHierarquia2Eventos.style(
            "display",
            segundaHierarquia2Eventos.style("display") === "none"
              ? "contents"
              : "none"
          );
        }
        var terceiraHierarquiaEventos = tableModulosHierarquiaEventos.selectAll(
          `[class^="row-linhaEvento-${index}"]`
        );
        if (terceiraHierarquiaEventos) {
          terceiraHierarquiaEventos.style(
            "display",
            terceiraHierarquiaEventos.style("display") === "none"
              ? "contents"
              : "none"
          );
        }
      } catch (error) { }

      atualizaAlturaMainTdNomes();
      atualizaLarguraMainTdNomes("expande", data.nome, index, data.level);
      alternaCores();
      // console.log("data predecessorSucessor: " + JSON.stringify(data))
      // if (data.predecessor) {
      if (temPredecessor) {
        predecessorSucessor(data.nome, tableModulosHierarquiaEventos, true);
      }
      // console.log("---------------------------------------------")
    })
    .append("svg")
    .attr("viewBox", [0, 0, 590, 670])
    .attr("height", 11)
    .attr("width", 25)
    .append("path")
    .attr("d", iconsBase.arrow_down)
    .style("fill", "white");

  var buttonMinus = rowHierarquia
    .append("button")
    .style("display", "none")
    .style("padding-left", "0px")
    .style("width", "36px")
    .style("background-color", "transparent")
    .style("border", "none")
    .attr("class", "iconMinus-div")
    .on("click", function () {
      exibir = exibir.filter(
        (elemento) =>
          elemento !==
          "row-modulo-" + index + "-" + data.level + "-" + data.nome
      );

      atualizaLarguraMainTdNomes("comprime", data.nome, index, data.level);

      var eventoHide = rowHierarquia.select(".iconPlus-div");
      if (eventoHide) {
        eventoHide.style(
          "display",
          eventoHide.style("display") === "none" ? "block" : "none"
        );
      }
      var eventoShow = rowHierarquia.select(".iconMinus-div");
      if (eventoShow) {
        eventoShow.style(
          "display",
          eventoShow.style("display") === "none" ? "block" : "none"
        );
      }

      try {
        var alteraLinhaEvento = tableModulosHierarquiaNomes.selectAll(
          `:scope > [class^="row-linhaEvento-${index}"]`
        );
        // Altera o estilo apenas dos filhos diretos
        alteraLinhaEvento.style("display", function () {
          return d3.select(this).style("display") === "none"
            ? "contents"
            : "none";
        });
      } catch (error) { }

      try {
        var segundaHierarquia = tableModulosHierarquiaNomes.selectAll(
          `:scope > [class^="row-modulo-${index}"]`
        );
        if (segundaHierarquia) {
          segundaHierarquia.style(
            "display",
            segundaHierarquia.style("display") === "none" ? "contents" : "none"
          );
        }
      } catch (error) { }

      try {
        var segundaHierarquia2 =
          tableModulosHierarquiaNomes.selectAll('[class^="ocultar"]');
        if (segundaHierarquia2) {
          segundaHierarquia2.style(
            "display",
            segundaHierarquia2.style("display") === "none" ? "contents" : "none"
          );
        }

        var terceiraHierarquia = tableModulosHierarquiaNomes.selectAll(
          `[class^="row-linhaEvento-${index}"]`
        );
        if (terceiraHierarquia) {
          terceiraHierarquia.style(
            "display",
            terceiraHierarquia.style("display") === "none" ? "contents" : "none"
          );
        }
      } catch (error) { }

      // altera a propriedade de exibição na parte de eventos
      try {
        var eventoDiv = rowEventos.select(".evento-div");
        if (eventoDiv) {
          eventoDiv.style(
            "display",
            eventoDiv.style("display") === "none" ? "block" : "none"
          );
        }
      } catch (error) { }

      try {
        var eventoDiv2 = rowEventos.select(".evento-div2");
        if (eventoDiv2) {
          eventoDiv2.style(
            "display",
            eventoDiv2.style("display") === "none" ? "block" : "none"
          );
        }
      } catch (error) { }

      try {
        var alteraLinhaEvento = tableModulosHierarquiaEventos.selectAll(
          `:scope > [class^="row-linhaEvento-${index}"]`
        );
        // Altera o estilo apenas dos filhos diretos
        alteraLinhaEvento.style("display", function () {
          return d3.select(this).style("display") === "none"
            ? "contents"
            : "none";
        });

        var alternadoLinhaEvento = alteraLinhaEvento.selectAll(".linha-evento");
        alternadoLinhaEvento.classed("showLinhaAlternada", false);
      } catch (error) { }

      try {
        var segundaHierarquiaEventos = tableModulosHierarquiaEventos.selectAll(
          `:scope > [class^="row-modulo-${index}"]`
        );
        if (segundaHierarquiaEventos) {
          segundaHierarquiaEventos.style(
            "display",
            segundaHierarquiaEventos.style("display") === "none"
              ? "contents"
              : "none"
          );
          segundaHierarquiaEventos.classed("showLinhaAlternada", false);
        }
      } catch (error) { }

      try {
        var segundaHierarquiaEventos2 = tableModulosHierarquiaEventos.selectAll(
          `[class^="tr-modulo-${index}-${data.level + 1}"]`
        );
        if (segundaHierarquiaEventos2) {
          segundaHierarquiaEventos2.classed("showLinhaAlternada", false);
        }
      } catch (error) { }

      try {
        var segundaHierarquia2Eventos =
          tableModulosHierarquiaEventos.selectAll('[class^="ocultar"]');
        if (segundaHierarquia2Eventos) {
          segundaHierarquia2Eventos.style(
            "display",
            segundaHierarquia2Eventos.style("display") === "none"
              ? "contents"
              : "none"
          );
        }

        var terceiraHierarquiaEventos = tableModulosHierarquiaEventos.selectAll(
          `[class^="row-linhaEvento-${index}"]`
        );
        if (terceiraHierarquiaEventos) {
          terceiraHierarquiaEventos.style(
            "display",
            terceiraHierarquiaEventos.style("display") === "none"
              ? "contents"
              : "none"
          );
        }
      } catch (error) { }
      // console.log("posRolagemHorizontal antes: " + posRolagemHorizontal)
      // console.log("posRolagemVertical antes: " + posRolagemVertical)
      // console.log("alturaRolagem antes: " + alturaRolagem)
      atualizaAlturaMainTdNomes();
      alternaCores();
      // console.log("posRolagemHorizontal: " + posRolagemHorizontal)
      // console.log("posRolagemVertical: " + posRolagemVertical)
      // console.log("alturaRolagem: " + alturaRolagem)
      // if (data.predecessor) {
      if (temPredecessor) {
        predecessorSucessor(data.nome, tableModulosHierarquiaEventos, false);
      }
    })
    .append("svg")
    .attr("viewBox", [0, 0, 590, 670])
    .attr("height", 11)
    .attr("width", 25)
    .append("path")
    .attr("d", iconsBase.arrow_right)
    .style("fill", "white");

  rowHierarquia
    .append("div")
    .style("padding-left", "5px")
    .attr("class", "text-div")

    .append("tr")
    .attr("class", "text-nome")
    .text(function () {
      if (data.level == 0) {
        return data.nome.toUpperCase();
      } else {
        return data.nome;
      }
    })
    // .style("font-size", "25px")
    .style("font-size", tamanhoFonteHierarquia + "px")
    // .style("font-size", function () {
    // //   console.log("tamanhoFonteHierarquia:" + tamanhoFonteHierarquia + "px");
    //   return tamanhoFonteHierarquia + "px";
    // })
    .style("font-weight", "bold")
    .style("color", corFonteHierarquia)
    .style("font-family", fontePrimaria)
    .style("width", "max-content");

  var marcosRecursivos = recursividadeHierarquiaArray(
    data.dados,
    tableModulosHierarquiaNomes,
    tableModulosHierarquiaEventos,
    index
  );

  //o bloco abaixo eh usado para transformar o array, foi verificado que em alguns casos ele vinha como Array de arrays [[]] com isso os marcos nao sao exibidos
  const arrayTransformado =
    Array.isArray(marcosRecursivos) &&
      marcosRecursivos.length > 0 &&
      Array.isArray(marcosRecursivos[0])
      ? marcosRecursivos.flat()
      : marcosRecursivos;
  eventoColapsado(arrayTransformado, rowEventos);
  return arrayTransformado;
}

function hierarquiaEvento(
  data,
  svgHierarquiaNomes,
  svgHierarquiaEventos,
  index,
  nomeAgrupamento
) {
  var dadosEventoAgrupamento = [];
  var tipoEventoBar = [];
  var dItem = data[0];
  var tipoCategoriaBar = [];

  data.forEach((dItem, i) => {
    // console.log("dItem: " + JSON.stringify(dItem))
    if (dItem.agrupamento) {
      var tamanhoBarraEvento = timeScale(dItem.dataInicio);
      var dataInicio = timeScale(dItem.dataInicio) + tickEspacamento;
      var posicaoTextoEvento;
      var dataFimTeste = "null";
      if (dItem.dataFim != "null" && dItem.dataFim != null) {
        dataFimTeste = dItem.dataFim;
      }
      if (dataFimTeste != "null") {
        if (
          new Date(DATA_FINAL).getTime() < new Date(dItem.dataFim).getTime()
        ) {
          dItem.dataFim = DATA_FINAL;
        }
        var dataFim = timeScale(dItem.dataFim);
        tamanhoBarraEvento = dataFim - dataInicio;
        posicaoTextoEvento = dataInicio;
      } else {
        posicaoTextoEvento = dataInicio;
        tamanhoBarraEvento = 0;
      }
      if (dItem.agrupamento == "null" || dadosEventoAgrupamento.length == 0) {
        dadosEventoAgrupamento.push({
          [dItem.agrupamento]: [
            {
              posInin: dataInicio,
              width: tamanhoBarraEvento,
              dataInicio: dItem.dataInicio,
              dataFim: dItem.dataFim,
              evento: dItem.evento,
              group: false,
              cor: dItem.cor,
              rot: dItem.rot,
            },
          ],
        });
      } else {
        const existingAgrupamento = dadosEventoAgrupamento.find(
          (item) => Object.keys(item)[0] === dItem.agrupamento
        );
        if (!existingAgrupamento) {
          dadosEventoAgrupamento.push({
            [dItem.agrupamento]: [
              {
                dataInicio: dItem.dataInicio,
                dataFim: dItem.dataFim,
                evento: dItem.evento,
                posInin: dataInicio,
                width: tamanhoBarraEvento,
                cor: dItem.cor,
                group: true,
              },
            ],
          });
        } else {
          existingAgrupamento[dItem.agrupamento].push({
            dataInicio: dItem.dataInicio,
            dataFim: dItem.dataFim,
            evento: dItem.evento,
            posInin: dataInicio,
            width: tamanhoBarraEvento,
            cor: dItem.cor,
            group: true,
          });
        }
      }
    }
    if (!dItem.agrupamento) {
      var tamanhoBarraEvento = timeScale(dItem.dataInicio);
      var dataInicio = timeScale(dItem.dataInicio) + tickEspacamento;
      var posicaoTextoEvento;
      var dataFimTeste = "null";
      if (dItem.dataFim != "null" && dItem.dataFim != null) {
        dataFimTeste = dItem.dataFim;
      }
      if (dataFimTeste != "null") {
        if (
          new Date(DATA_FINAL).getTime() < new Date(dItem.dataFim).getTime()
        ) {
          dItem.dataFim = DATA_FINAL;
        }
        var dataFim = timeScale(dItem.dataFim);
        tamanhoBarraEvento = dataFim - dataInicio;
        posicaoTextoEvento = dataInicio;
      } else {
        posicaoTextoEvento = dataInicio;
        tamanhoBarraEvento = 0;
      }

      var posicaoTextoEvento;
      var dataFimTeste = "null";
      if (dItem.dataFim != "null" && dItem.dataFim != null) {
        dataFimTeste = dItem.dataFim;
      }
      if (dataFimTeste != "null") {
        if (
          new Date(DATA_FINAL).getTime() < new Date(dItem.dataFim).getTime()
        ) {
          dItem.dataFim = DATA_FINAL;
        }
        var dataFim = timeScale(dItem.dataFim);
        tamanhoBarraEvento = dataFim - dataInicio;
        posicaoTextoEvento = dataInicio;
      } else {
        posicaoTextoEvento = dataInicio;
        tamanhoBarraEvento = 0;
      }

      //terceiro nivel dos eventos das hierarquias
      var tableModulos3HierarquiaEventos = svgHierarquiaEventos
        .append("table")
        .attr("class", "row-linhaEvento-" + index + "-" + dItem.evento)
        .style("display", "none");
      var row3HierarquiaEventos = tableModulos3HierarquiaEventos
        .append("tr")
        .attr("class", "linha-evento")
        .attr("id", "testando2")
        .style("background-color", function () {
          return corLinha[index % 2];
        })
        .style("display", "flex")
        .style("width", tamanhoScalaExib + "px")
        .style("height", tamanhoComponenteNome + "px")
        // .style("height", "26px")
        .style("align-items", "center");

      //terceiro nivel dos nomes das hierarquias
      var tableModulos3HierarquiaNomes = svgHierarquiaNomes
        .append("table")
        .attr("class", "row-linhaEvento-" + index + "-" + dItem.evento)
        .style("display", "none");

      var row3HierarquiaNomes = tableModulos3HierarquiaNomes
        .append("tr")
        .attr("id", "subhierarquia-nome")
        .style("display", "flex")
        .style("padding-left", "30px")
        .style("height", tamanhoComponenteNome + "px")
        // .style("height", "21px")
        .style("align-items", "center")
        // .style("margin-bottom", "5px")
        .style("width", "-webkit-fill-available");
      var testeRow3HierarquiaNomes = row3HierarquiaNomes
        .append("tr")
        .attr("class", "row-modulo-segundo")
        .text(dItem.evento)
        .style("font-family", fontePrimaria)
        .style("font-size", parseInt(tamanhoFonteHierarquia) - 5 + "px")
        // .style("font-size", function(){
        // if(parseInt(tamanhoFonteHierarquia) <= 16){
        //     return (parseInt(tamanhoFonteHierarquia) - 1) + "px"
        // }
        //     return (parseInt(tamanhoFonteHierarquia) - 5) + "px"
        // })
        .style("padding-left", "30px")
        .style("color", corFonteHierarquia)
        // .style("color", "#FFFFFF")
        .style("width", "max-content");
      // console.log("dItem: " + JSON.stringify(dItem))
      var eventoBarDiv = row3HierarquiaEventos
        .append("svg")
        // .attr("transform", `translate(${timeScale(dItem.previstoInicio)}, 0)`)
        // .attr("transform", `translate(${timeScale(dItem.previstoInicio || dItem.dataInicio)}, 0)`)
        .attr("transform", function (d, i) {
          if (dataFimTeste == "null") {
            return `translate(${dataInicio}, 0)`;
          } else {
            return `translate(${dataInicio + tickEspacamento}, 0)`;
          }
        })

        // .attr("height", 20)
        // .style("height", "20px")
        .style("height", function () {
          if (dItem.caminhoCritico == true) {
            return "14px";
          } else {
            return parseInt(tamanhoComponenteNome) - 10 + "px";
          }
        })
        .attr("width", function () {
          if (tamanhoBarraEvento < 0) {
          }
          if (dataFimTeste !== "null") {
            tipoEventoBar.push({
              posInin: dataInicio,
              width: tamanhoBarraEvento,
              cor: dItem.cor,
              dataInicio: dItem.dataInicio,
              dataFim: dItem.dataFim,
              evento: dItem.evento,
            });
            return tamanhoBarraEvento;
          } else {
            tipoEventoBar.push({
              posInin: dataInicio,
              width: 0,
              cor: dItem.cor,
              dataInicio: dItem.dataInicio,
              evento: dItem.evento,
              icone: dItem.icon,
            });
            return tamanhoBarraEvento + 20;
          }
        })
        .attr("class", "eventoBarDiv")
        .attr("id", dItem.idEvento)
        .style("display", "flex")
        .style("position", "absolute");

      if (dataFimTeste == "null" || dItem.dataFim == dItem.dataInicio) {
        var iconeDiv = eventoBarDiv
          .style("left", "-11px")
          .attr("viewBox", function () {
            if (dItem.icon) {
              return iconsBase.vb[dItem.icon];
            } else {
              return "0, 0, 448, 512";
            }
          })
          .attr("width", 20)
          .append("path")
          .attr("fill", function () {
            // console.log("ditem verifica cor: " + JSON.stringify(dItem));
            if (dItem.cor) {
              return dItem.cor;
            } else {
              // return "#F2A840"
              return Object.values(corPrimaria)[
                index % Object.keys(corPrimaria).length
              ];
            }
          })
          .attr("d", function () {
            if (dItem.icon) {
              return iconsBase.icons[dItem.icon];
            } else {
              return iconsBase.base;
            }
          });
      } else {
        eventoBarDiv
          .style("left", "-1px")
          .style("border-radius", function (f) {
            var soma = dataInicio + tamanhoBarraEvento;
            if (soma >= posDataFinal) {
              return "10px 0 0 10px";
            } else {
              return "10px";
            }
          })
          .style("border", function () {
            if (dItem.caminhoCritico == true) {
              return "3px solid black";
            }
          });
        //!TODO
        //!alterar o nome dessa classe....
        //!verificar o width pois o rect esta coom dois diferentes
        var iconeDiv = eventoBarDiv
          .append("rect")
          .attr("fill", function () {
            if (dItem.cor) {
              return dItem.cor;
            } else {
              return Object.values(
                corPrimaria
              )[index % Object.keys(corPrimaria).length];
            }
          })
          // .attr("fill", "#E67E22") // vermelho = realizado
          // .style("height", "21.25px")
          .style("height", parseInt(tamanhoComponenteNome) - 5 + "px")
          .attr("width", function () {
            if (dataFimTeste !== "null") {
              var dataFim = timeScale(dItem.dataFim);
              tamanhoBarraEvento = dataFim - dataInicio;
              return tamanhoBarraEvento;
            } else {
              return tamanhoBarraEvento + 20;
            }
          })

          // .style("height", "21.25px")
          .attr("width", function (d) {
            if (dataFimTeste != "null") {
              if (
                new Date(DATA_FINAL).getTime() <
                new Date(dItem.dataFim).getTime()
              ) {
                dItem.dataFim = DATA_FINAL;
              }
              var dataFim = timeScale(dItem.dataFim);
              tamanhoBarraEvento = dataFim - dataInicio;
              return tamanhoBarraEvento;
            } else {
              return tamanhoBarraEvento + 20;
            }
          });
      }
      //? Adiciona barra "Previsto" em verde (#008542) se houver datas e for diferente da real
      // if (dItem.previstoInicio && dItem.previstoFinal && dItem.previstoFinal !== dItem.dataFim) {
      if (dItem.previstoInicio && dItem.previstoFinal) {
        const dataInicioPrevisto = timeScale(dItem.previstoInicio);
        const dataFimPrevisto = timeScale(dItem.previstoFinal);
        const tamanhoPrevisto = dataFimPrevisto - dataInicioPrevisto;
        if (dataInicioPrevisto < timeScale(DATA_FINAL)) {
          var eventoPrevisto = row3HierarquiaEventos
            .append("svg")
            // .attr("transform", `translate(${timeScale(dItem.previstoInicio)}, 0)`)
            // .attr("transform", `translate(${timeScale(dItem.previstoInicio || dItem.dataInicio)}, 0)`)
            .attr("transform", function (d, i) {
              if (dataFimTeste == "null") {
                return `translate(${dataInicioPrevisto}, 0)`;
              } else {
                return `translate(${dataInicioPrevisto + tickEspacamento}, 0)`;
              }
            })
            .style("height", 6)
            .attr("width", function () {
              if (tamanhoPrevisto >= 1) {
                return tamanhoPrevisto;
              } else {
                return tamanhoBarraEvento + 20;
              }
            })
            .style("left", "-1px")
            .style("position", "absolute");

          // eventoBarDiv.append("rect")
          eventoPrevisto
            .append("rect")
            .attr("class", "barra-previsto")
            .attr("x", dataInicioPrevisto - dataInicio)
            .attr("y", 0)
            .attr("height", 6)
            .attr("width", tamanhoPrevisto)
            .attr("fill", "#2C3E50") // verde = previsto
            .attr("opacity", 0.9)
            .on("mouseover", function (event, d) {
              showTooltip(dItem, event, index)
            })
            .on("mouseout", hideTooltip)
          // .append("title")
          // .text(
          //   `Previsto: ${formatDate(dItem.previstoInicio)} até ${formatDate(
          //     dItem.previstoFinal
          //   )}`
          // );
          // }
        }
      }
      eventoBarDiv
        .on("mouseover", function (event, d) {
          showTooltip(dItem, event, index)
        })
        .on("mouseout", hideTooltip);

      var dadosEventoDiv = row3HierarquiaEventos
        .append("svg")
        .attr("transform", function () {
          if (tamanhoBarraEvento == 0) {
            return `translate(${posicaoTextoEvento + 10}, 0)`;
          }
          return `translate(${posicaoTextoEvento + tamanhoBarraEvento + 5}, 0)`;
        })
        // .attr("height", 20)
        .attr("height", parseInt(tamanhoFonteHierarquia) - 5)
        .attr("class", "evento-div-nome")
        .style("display", "flex")
        .style("position", "absolute")
        .style("width", function (f) {
          var soma = dataInicio + tamanhoBarraEvento;
          if (soma >= posDataFinal) {
            return "0px";
          }
          if (soma + 300 >= posDataFinal) {
            return posDataFinal - soma + "px";
          } else if (dataInicio + 300 >= posDataFinal) {
            return posDataFinal - posicaoTextoEvento + "px";
          }
        })
        .append("g")
        // .attr("transform", function(){
        //     // ajustaFonte()
        //     // return `translate(0, ${(parseInt(tamanhoFonteHierarquia))/2})`
        //     return `translate(0, 15)`
        // } )
        // .append("tr")
        .append("text")
        // .attr("y", 15)
        .attr("y", 0)
        .style("dominant-baseline", "hanging")
        // .attr("font-size", 12)
        .attr("font-size", parseInt(tamanhoFonteHierarquia) - 5)
        .style("font-family", fontePrimaria)
        .text(function () {
          if ("rot" in dItem) {
            return dItem.rot;
          } else {
            return dItem.evento;
          }
        });
      return tipoEventoBar;
    }
  });

  if (dadosEventoAgrupamento.length != 0) {
    dadosEventoAgrupamento.forEach((item, i) => {
      var tableModulos3Eventos = svgHierarquiaEventos
        .append("table")
        .attr("class", "row-linhaEvento-" + index + "-" + dItem.evento)
        .style("display", "none");

      var row3Eventos = tableModulos3Eventos
        .append("tr")
        .style("display", "flex")
        .style("height", tamanhoComponenteNome + "px")
        // .style("height", "21px")
        .style("margin-bottom", "5px")
        .attr("class", "linha-evento")
        .attr("id", "testando1")
        .style("background-color", function () {
          return corLinha[i % 2];
        });

      var testeRowEventos = row3Eventos
        .append("tr")
        .attr("class", "row-modulo-evento");

      var barraGeralEvento = row3Eventos
        .append("g")
        .attr("transform", `translate(0,0)`)
        .attr("class", "evento-div3");

      //parte referente ao nome dos eventos
      var tableModulos3Nomes = svgHierarquiaNomes
        .append("table")
        .attr("class", "row-linhaEvento-" + index + "-" + dItem.evento)
        .style("display", "none");

      var row3Nomes = tableModulos3Nomes
        .append("tr")
        .style("display", "flex")
        .style("padding-left", "30px")
        .style("margin-bottom", "5px");

      var testeRowNomes = row3Nomes
        .append("tr")
        .attr("class", "row-modulo-evento")
        .style("padding-left", "5px")
        .style("width", "max-content")
        .text(Object.keys(dadosEventoAgrupamento[i])[0])
        .style("color", "#FFFFFF");

      Object.keys(item).forEach((key, j) => {
        item[key].forEach((gov, k) => {
          var barraGeralEventoAgrupado = barraGeralEvento
            .append("svg")
            .style("display", "flex")
            .style("position", "absolute")
            .attr("height", 20)
            .attr("class", "barraGeralEventoAgrupado")
            .attr("transform", function (f) {
              if (gov.width != 0) {
                return `translate(${gov.posInin},0)`;
              } else {
                return `translate(${gov.posInin},0)`;
              }
            })
            .style("left", function (f) {
              if (gov.width == 0) {
                return "-11px";
              }
            })
            .attr("width", function (f) {
              if (gov.width != 0) {
                tipoEventoBar.push({
                  //adicionar a posição x do translate e o tamanho do width
                  posInin: gov.posInin,
                  width: gov.width,
                  dataInicio: gov.dataInicio,
                  evento: gov.evento,
                });
                tipoCategoriaBar.push({
                  //adicionar a posição x do translate e o tamanho do width
                  posInin: gov.posInin,
                  width: gov.width,
                  dataInicio: gov.dataInicio,
                  evento: gov.evento,
                });
                return gov.width;
              } else {
                tipoEventoBar.push({
                  //adicionar a posição x do translate e o tamanho do width
                  posInin: gov.posInin,
                  width: 0,
                  dataInicio: gov.dataInicio,
                  evento: gov.evento,
                });
                tipoCategoriaBar.push({
                  //adicionar a posição x do translate e o tamanho do width
                  posInin: gov.posInin,
                  width: 0,
                  dataInicio: gov.dataInicio,
                  evento: gov.evento,
                });
                return "30px";
              }
            });
          if (gov.width != 0) {
            barraGeralEventoAgrupado.style("border-radius", "10px");
            barraGeralEventoAgrupado
              .append("rect")
              .attr("fill", function () {
                if (gov.cor) {
                  return "#" + gov.cor;
                } else {
                  return "rgb(64, 197, 191)";
                }
              })
              .attr("width", gov.width)
              .attr("height", 20);
          } else {
            barraGeralEventoAgrupado
              .attr("viewBox", [0, 0, 448, 512])
              .attr("height", 20)
              .attr("width", 20)
              .append("path")
              .attr("fill", function () {
                if (gov.cor) {
                  return "#" + gov.cor;
                } else {
                  return "rgb(242, 168, 64)";
                  // return "rgb(64, 197, 191)"
                }
              })
              .attr("d", function () {
                if (gov.icon) {
                  return gov.icon;
                } else {
                  return iconsBase.base;
                }
              });
          }

          if (!gov.group) {
            barraGeralEvento
              .append("svg")
              .attr("transform", function () {
                if (gov.width != 0) {
                  return `translate(${gov.posInin + gov.width + 5}, 0)`;
                } else {
                  return `translate(${gov.posInin + 15}, 0)`;
                }
              })
              .attr("height", 20)
              .attr("class", "evento-div")
              .style("display", "flex")
              .style("position", "absolute")
              .append("g")
              .append("text")
              .attr("y", 15)
              .attr("font-size", 12)
              .text(function () {
                if (gov.rot && gov.rot != "null" && gov.rot != null) {
                  return gov.rot;
                } else {
                  return key;
                }
              });
          }

          barraGeralEventoAgrupado
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
                .style("left", posX + 10 + "px")
                .style("top", posY + 10 + "px").html(`
                                Data inicio: ${formatDate(gov.dataInicio)};<BR>
                             ${gov.dataFim
                    ? `Data Fim: ${formatDate(gov.dataFim)};<BR>`
                    : ""
                  }
                             Evento: ${gov.evento}`);
            })
            .on("mouseout", function () {
              tooltip.style("visibility", "hidden");
            });
        });
      });
    });
  }
  dadosEventoAgrupamento.push({
    [tipoEventoBar[0].evento]: [
      {
        posInin: tipoEventoBar[0].posInin,
        width: tipoEventoBar[0].width,
        dataInicio: tipoEventoBar[0].dataInicio,
        dataFim: tipoEventoBar[0].dataFim,
        evento: tipoEventoBar[0].evento,
        group: false,
        cor: tipoEventoBar[0].cor,
        rot: tipoEventoBar[0].rot,
      },
    ],
  });
  return dadosEventoAgrupamento;
}

// Exibe/oculta os marcos e barras ao colapsar/expandir uma hierarquia
function eventoColapsado(marcosRecursivos, rowEventos) {
  var barraGeralTeste = rowEventos
    .append("g")
    .attr("transform", `translate(0,0)`)
    .attr("class", "evento-div2");

  marcosRecursivos.forEach((item, i) => {
    const chave = Object.keys(item)[0];
    item[chave].forEach((dadosComprimidos) => {
      var barraGeralTeste2 = barraGeralTeste
        .append("svg")
        .attr("class", "svg-colapsado")
        .style("display", "flex")
        .style("position", "absolute")
        .attr("transform", function (f) {
          if (dadosComprimidos.width != 0) {
            return `translate(${dadosComprimidos.posInin},0)`;
          } else {
            return `translate(${dadosComprimidos.posInin},0)`;
          }
        })
        .style("height", tamanhoComponenteNome + "px")
        // .attr("height", 20)
        .attr("width", function (f) {
          if (dadosComprimidos.width != 0) {
            return dadosComprimidos.width;
          } else {
            return "30px";
          }
        });
      if (dadosComprimidos.width != 0) {
        barraGeralTeste2.style("left", "-0.5px");
        barraGeralTeste2.style("border-radius", function (f) {
          var soma = dadosComprimidos.posInin + dadosComprimidos.width;
          if (soma >= posDataFinal) {
            return "10px 0 0 10px";
          } else {
            return "10px";
          }
        });
        barraGeralTeste2
          .append("rect")
          .attr("class", "barra-recolhida")
          .attr("fill", function (f) {
            if (dadosComprimidos.cor) {
              // return "#" + dadosComprimidos.cor
              return dadosComprimidos.cor;
            } else {
              return "#008542";
            }
          })
          .attr("width", dadosComprimidos.width)
          .style("height", tamanhoComponenteNome + 4 + "px");
        // .attr("height", 20)
      } else {
        barraGeralTeste2.style("left", "-11px").style("z-index", "1");
        barraGeralTeste2
          .append("svg")
          .attr("class", "svg-colapsado-icon")
          //   .attr("transform", `translate(${dadosComprimidos.posInin},0)`)
          .attr("height", 20)
          .attr("width", 20)
          .attr("viewBox", function () {
            if (dadosComprimidos.icone) {
              return iconsBase.vb[dadosComprimidos.icone];
            } else {
              return "0, 0, 448, 512";
            }
          })
          .attr("height", 20)
          .attr("width", 20)
          .append("path")
          .attr("fill", function (f) {
            if (dadosComprimidos.cor) {
              //   return "#" + dadosComprimidos.cor;
              return dadosComprimidos.cor;
            } else {
              return "#F2A840";
            }
          })
          .attr("d", function () {
            if (dadosComprimidos.icone) {
              return iconsBase.icons[dadosComprimidos.icone];
            } else {
              return iconsBase.base;
            }
          });
      }

      barraGeralTeste2
        .on("mouseover", function (event, d) {

          showTooltip(dadosComprimidos, event, d)

          // var posX = event.pageX;
          // var posY = event.pageY;

          // // Obter a largura e altura do tooltip
          // var tooltipWidth = tooltip.node().offsetWidth;
          // var tooltipHeight = tooltip.node().offsetHeight;

          // // Ajustar a posição do tooltip se estiver perto da borda direita ou inferior
          // if (posX + tooltipWidth + 10 > window.innerWidth) {
          //   posX = window.innerWidth - tooltipWidth - 10; // Ajusta para a borda direita
          // }
          // if (posY + tooltipHeight + 10 > window.innerHeight) {
          //   posY = window.innerHeight - tooltipHeight - 10; // Ajusta para a borda inferior
          // }

          // tooltip
          //   .style("visibility", "visible")
          //   .style("left", posX + 10 + "px")
          //   .style("top", posY + 10 + "px").html(`
          //     Data inicio: ${formatDate(dadosComprimidos.dataInicio)}<BR>
          //     ${dadosComprimidos.dataFim ? `Data Fim: ${formatDate(dadosComprimidos.dataFim)} <BR>` : ""}
          //     Evento: ${dadosComprimidos.evento}`);

          // showTooltip(dadosComprimidos, posX, posY, d)

          // tooltip
          //   .style("visibility", "visible")
          //   .style("left", posX + 10 + "px")
          //   .style("top", posY + 10 + "px").html(`
          //     <b>${dadosComprimidos.evento}</b><br>
          //     Início: ${formatDate(dadosComprimidos.dataInicio)}<BR>
          //     ${dadosComprimidos.dataFim ? `Termino: ${formatDate(dadosComprimidos.dataFim)} <BR>` : ""}
          //     `);

        })
        .on("mouseout", hideTooltip);
    });
  });
}

function alternaCores() {
  var cont = 0;
  var alternadoLinhaEvento = svgBase.selectAll(".showLinhaAlternada");
  alternadoLinhaEvento.style("background-color", function (d, i) {
    var corExib = corLinha[cont % 2];
    cont++;
    return corExib;
  });
}

function predecessorSucessor(
  data,
  tableModulosHierarquiaEventos,
  adicionaIsTrue
) {
  // console.log("predecessorSucessor data: " + data)

  const tagSVGSetas = d3.selectAll(".svg-setas");
  tagSVGSetas.remove();

  const firstClass = tableModulosHierarquiaEventos.node().getAttribute("class");

  if (adicionaIsTrue == true) {
    // console.log("tableModulosHierarquiaEventos: " + JSON.stringify(tableModulosHierarquiaEventos.node().outerHTML))
    var resultado = pesquisaFilhos(data);
    // console.log("predecessorSucessor - predecessoresDadosAdd: " + JSON.stringify(predecessoresDadosAdd))

    // var idsFilhos = resultado.idsFilhos
    // var idsPredecessores = resultado.idsPredecessores
    // console.log("resultado.idsFilhosPesquisaFilhos: " + JSON.stringify(resultado.idsFilhosPesquisaFilhos));
    // console.log("resultado.idsPredecessoresPesquisaFilhos: " + JSON.stringify(resultado.idsPredecessoresPesquisaFilhos));
    idsFilhos.push(resultado.idsFilhosPesquisaFilhos[0]);
    idsPredecessores.push(resultado.idsPredecessoresPesquisaFilhos[0]);
    htmlPredecessoresSelecionados.push(firstClass);
  } else {
    const removeItemByName = (array, name) => {
      for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].hasOwnProperty(name)) {
          array.splice(i, 1); // Remove o item do array original
        }
      }
    };
    // Remove o item dos arrays originais
    removeItemByName(idsFilhos, data);
    removeItemByName(idsPredecessores, data);
    removeItemByName(htmlPredecessoresSelecionados, data);
    // console.log("remove idsFilhos: " + JSON.stringify(idsFilhos));
    // console.log("remove idsPredecessores: " + JSON.stringify(idsPredecessores));
    // console.log("remove htmlPredecessoresSelecionados: " + JSON.stringify(htmlPredecessoresSelecionados));
  }
  // console.log("idsFilhos: " + JSON.stringify(idsFilhos));
  // console.log("idsPredecessores: " + JSON.stringify(idsPredecessores));
  // console.log("htmlPredecessoresSelecionados: " + JSON.stringify(htmlPredecessoresSelecionados));
  // console.log("tableModulosHierarquiaEventos: " + JSON.stringify(tableModulosHierarquiaEventos.node().outerHTML))
  // const firstClass = tableElement.node().getAttribute('class');
  // console.log("htmlPredecessoresSelecionados: " + JSON.stringify(htmlPredecessoresSelecionados));

  const svgElement = document.querySelector(".main-svg");
  const heightTag = svgElement.clientHeight; // Altura
  // console.log("heightTag: " + heightTag)
  // console.log("alturaRolagem: " + alturaRolagem)

  const svg = principalPortView
    .append("svg")
    .attr("class", "svg-setas")
    .attr("width", tamanhoScalaExib + "px") // Defina a largura do SVG conforme necessário
    .attr("height", alturaRolagem + 17 + "px") // Defina a altura do SVG conforme necessário
    // .attr("height", heightTag + 17 + "px") // Defina a altura do SVG conforme necessário
    .style("position", "absolute")
    .style("top", "-17px")
    .style("left", "0px")
    .style("z-index", "0");

  idsPredecessores.forEach((idPre, i) => {
    // console.log("idsPredecessores.forEach: " + i + " - " + JSON.stringify(idPre))
    const firstKey = Object.keys(idPre)[0];
    const filhosArray = idsFilhos[i][firstKey];
    // console.log("idsFilhos: " + JSON.stringify(idsFilhos));
    // console.log("filhosArray: " + JSON.stringify(filhosArray));
    idPre[firstKey].forEach((item) => {
      for (const id in item) {
        // console.log("idPre[firstKey].forEach item: " + JSON.stringify(item));
        // console.log("idPre[firstKey].forEach id: " + JSON.stringify(id));
        // console.log("idPre[firstKey].forEach item[id]: " + JSON.stringify(item[id]));
        if (item.hasOwnProperty(id)) {
          const valorIdPredecessor = item[id];
          // Separar valores caso tenha vírgulas
          const valuesArray = valorIdPredecessor.split(",");

          // Verificar se algum desses valores está contido no array filhosArray
          if (
            valuesArray.some((val) =>
              filhosArray.includes(parseInt(val.trim()))
            )
          ) {
            const matchingItem = htmlPredecessoresSelecionados.find((item) =>
              item.includes(firstKey)
            );
            // console.log("matchingItem: " + JSON.stringify(matchingItem));
            verificaPosicao(svg, valorIdPredecessor, id, matchingItem);
          } else {
            // console.log(`ID: ${id}, Valor: ${value}, Nao esca contido em idsFilhos`)
          }
        }
      }
    });
  });
}

//o id nao eh totalmente unico, em casa hierarquia de primeiro nivel ele se repete
//verifica quais sao os filhos da hierarquia selecionada e retorna para idsFilhos
//tambem verifica quais possuem predecessor e retorna a informacao para idsPredecessores
function pesquisaFilhos(selecionado) {
  // const existeNome = dadosJson.some(item => item.nome === selecionado);
  const itemEncontrado = dadosJson.find((item) => item.nome === selecionado);
  // console.log("predecessoresDadosAdd antes: " + JSON.stringify(predecessoresDadosAdd))

  let dadosFilhos = [];
  let idsFilhosPesquisaFilhos = [];
  let idsPredecessoresPesquisaFilhos = [];

  if (itemEncontrado) {
    dadosFilhos = itemEncontrado.dados; // Atribui os dados encontrados à variável dadosFilhos
    var idDadosAdd = [];
    var predecessoresDadosAdd = [];
    dadosFilhos.forEach((d) => {
      // console.log(`Evento: "${d.levelValues[0].evento}" -  id: "${d.levelValues[0].idEvento}"`);
      // idsFilhos.push(d.levelValues[0].idEvento)
      idDadosAdd.push(d.levelValues[0].idEvento);
      d.levelValues[0].predecessor
        ? predecessoresDadosAdd.push({
          [d.levelValues[0].idEvento]: d.levelValues[0].predecessor,
        })
        : null;
      // d.levelValues[0].idEvento
    });
    idsFilhosPesquisaFilhos.push({ [selecionado]: idDadosAdd });
    idsPredecessoresPesquisaFilhos.push({
      [selecionado]: predecessoresDadosAdd,
    });
    // console.log("pesquisaFilhos idsFilhos: " + JSON.stringify(idsFilhos));
    // console.log("pesquisaFilhos idsPredecessores: " + JSON.stringify(idsPredecessores));
    // console.log(`O nome "${selecionado}" foi encontrado.`);
    // console.log(JSON.stringify(dadosFilho)); // Exibe os dadosFilho
    return { idsFilhosPesquisaFilhos, idsPredecessoresPesquisaFilhos };
  } else {
    console.log(`O nome "${selecionado}" não foi encontrado.`);
  }
}

function verificaPosicao(svg, valorIdPredecessor, valorIdItem, matchingItem) {
  // console.log("verificaPosicao svgHTML: " + svgHTML.node().outerHTML)
  // console.log("verificaPosicao valorIdItem: " + valorIdItem)

  const svgHTML = principalPortView.selectAll(
    `:scope > [class^="${matchingItem}"]`
  );

  // console.log("svgHTML2: " + JSON.stringify(svgHTML2.node().outerHTML))
  //matchingItem: "row-modulo-2-0-Campanha da MEQ"

  var HTMLPredecessor = svgHTML.selectAll(`[id^="${valorIdPredecessor}"]`);
  var HTMLItemAtual = svgHTML.selectAll(`[id^="${valorIdItem}"]`);
  // var HTMLPredecessor = svgHTML.selectAll(`[id^="${valorIdPredecessor}"]`);
  // var HTMLItemAtual = svgHTML.selectAll(`[id^="${valorIdItem}"]`);
  // console.log("verificaPosicao valorIdItem - valorIdPredecessor: " + valorIdItem + " - " + valorIdPredecessor)
  var dadosAtual = HTMLItemAtual.node().getBoundingClientRect();
  var atualPosX = dadosAtual.left;
  var atualPosY = dadosAtual.top;

  const scrollContainerVertical = document.querySelector(".mainTdEventos"); //main-eventos
  const scrollPositionVertical = scrollContainerVertical.scrollTop;
  const scrollContainerHorizontal = document.querySelector(".mainTdScale"); //main-eventos
  const scrollPositionHorizontal = scrollContainerHorizontal.scrollLeft;

  var primeiroElemento = HTMLPredecessor.node();

  // const scrollContainer = principalPortView.select('.mainTdEventos');
  // const scrollPosition = scrollContainer.node().scrollTop;

  // if(valorIdItem == 4){
  //     // console.log("matchingItem: " + matchingItem)
  //     console.log("verificaPosicao valorIdItem - valorIdPredecessor: " + valorIdItem + " - " + valorIdPredecessor)
  //     console.log(`atualPosX: ${atualPosX} - atualPosY: ${atualPosY}`)
  //     // console.log("Posição da rolagem no eixo Y:", scrollPosition);
  //     // console.log(`mainEventosX: ${mainEventos.node().getBoundingClientRect().left} - mainEventosY: ${mainEventos.node().getBoundingClientRect().left}`)

  //     //clicando primeiro em contrataçao de dados: atualPosX: 734.3887939453125 - atualPosY: 261 -- x="75.91366577148438" y="209"
  //     //clicando primeiro em cambanha da meq: atualPosX: 734.3887939453125 - atualPosY: 493 -- x="75.91366577148438" y="441"
  //     //dados corretos: atualPosX: 734.3887939453125 - atualPosY: 15263 -- x="75.91366577148438" y="15211"
  // }
  // console.log("posRolagemHorizontal: " + posRolagemHorizontal)
  // console.log("posRolagemVertical: " + posRolagemVertical)
  if (primeiroElemento) {
    // Obtém as informações de posição e dimensões do elemento
    var dadosPredecessor = primeiroElemento.getBoundingClientRect();
    var predecessorPosX = dadosPredecessor.left + dadosPredecessor.width;
    var predecessorPosY = dadosPredecessor.top;
    setasPredecessor(
      svg,
      predecessorPosX + scrollPositionHorizontal - 12,
      predecessorPosY + scrollPositionVertical,
      atualPosX + scrollPositionHorizontal,
      atualPosY + scrollPositionVertical
    );
    // setasPredecessor(svg, predecessorPosX + posRolagemHorizontal - 12, predecessorPosY + posRolagemVertical, atualPosX + posRolagemHorizontal, atualPosY + posRolagemVertical)
  }
}

function setasPredecessor(
  svg,
  predecessorPosX,
  predecessorPosY,
  atualPosX,
  atualPosY
) {
  var tamanhoLinha = 1;

  // Criando o quadrado
  svg
    .append("rect")
    .attr("x", predecessorPosX - 300) // Posição X do quadrado
    .attr("y", predecessorPosY) // Posição Y do quadrado
    .attr("width", 5) // Largura do quadrado
    .attr("height", 5) // Altura do quadrado
    .style("fill", "black"); // Cor do quadrado

  // Definindo o marcador para a seta
  svg
    .append("defs")
    .append("marker")
    .attr("id", "arrow")
    .attr("viewBox", "0 0 10 10") // Área de visualização menor
    .attr("refX", 5) // Ponto de referência ajustado
    .attr("refY", 5) // Ponto de referência ajustado
    .attr("markerWidth", 6) // Largura da seta menor
    .attr("markerHeight", 6) // Altura da seta menor
    .attr("orient", "auto")
    .append("polygon")
    .attr("points", "0,0 10,5 0,10")
    .style("fill", "black");

  svg
    .append("line")
    .attr("x1", predecessorPosX - 300 + 2.5) // Posição X do quadrado + metade da largura
    .attr("y1", predecessorPosY + 2.5) // Posição Y do quadrado + metade da altura
    .attr("x2", predecessorPosX - 300 + 2.5) // Posição X do ângulo
    .attr("y2", predecessorPosY + 15) // Posição Y do ângulo
    .style("stroke", "black") // Cor da linha
    .style("stroke-width", tamanhoLinha); // Largura da linha
  // Segundo segmento: do ângulo até (atualPosX, predecessorPosY + 10)
  svg
    .append("line")
    .attr("x1", predecessorPosX - 300 + 2.5) // Posição X do ângulo
    .attr("y1", predecessorPosY + 15) // Posição Y do ângulo
    .attr("x2", atualPosX - 321) // Posição X atual
    .attr("y2", predecessorPosY + 15) // Posição Y do ângulo
    .style("stroke", "black") // Cor da linha
    .style("stroke-width", tamanhoLinha); // Largura da linha
  // Terceiro segmento: do ângulo até (atualPosX, atualPosY)
  svg
    .append("line")
    .attr("x1", atualPosX - 321) // Posição X atual
    .attr("y1", predecessorPosY + 15) // Posição Y do ângulo
    .attr("x2", atualPosX - 321) // Posição X atual
    .attr("y2", atualPosY + 2.5) // Posição Y atual
    .style("stroke", "black") // Cor da linha
    .style("stroke-width", tamanhoLinha); // Largura da linha
  svg
    .append("line")
    .attr("x1", atualPosX - 321) // Posição X atual
    .attr("y1", atualPosY + 2.5) // Posição Y do ângulo
    .attr("x2", atualPosX - 314) // Posição X atual
    .attr("y2", atualPosY + 2.5) // Posição Y atual
    .style("stroke", "black") // Cor da linha
    .style("stroke-width", tamanhoLinha) // Largura da linha
    .attr("marker-end", "url(#arrow)"); // Adicionando a seta
}

/*
1) Customizar o tamanho, fonte, cor da letra no texto das hierarquias.

2) Customizar a cor de fundo no texto das hierarquias e das barras dos eventos.
*/
function dadosCustom(customData) {
  var tamanhoFonte = "16px";
  var corFonte = "#FFFFFF";
  var estiloFonte;
  var corBackground1;
  var corBackground2;
  var corBackground3;
  /*
    tamanhoFonte = fontSize
    corFonte = fontColor
    backgroundFonte = backgroundFontColor
    corBackground = backgroundFontTeste
    */

  customData.forEach((item) => {
    corPrimaria = { "1": "#006432", "2": "#93A100", "3": "#00867F" };
    // console.log("item: " + JSON.stringify(item))
    if (item.fontSize) {
      tamanhoFonte = item.fontSize.value != 16 ? item.fontSize.value : 16;
      // tamanhoFonteHierarquia = tamanhoFonte + "px"
      tamanhoFonteHierarquia = tamanhoFonte;
      //   console.log("tamanho fonte: " + item.fontSize.value);
      tamanhoComponenteNome = tamanhoFonte + 5;

      // const queryMainTdNomes = document.querySelector('.mainTdNomes') as HTMLTableCellElement;
      // console.log("queryMainTdNomes:" + queryMainTdNomes)

      // const tds = queryMainTdNomes.querySelector(`[class^="text-nome"]`) as unknown as HTMLTableCellElement[];
      // console.log("tamanho fonte:" + tds)
    }
    if (item.fontColor) {
      corFonte =
        item.fontColor.value.value != ""
          ? item.fontColor.value.value
          : "#FFFFFF";
      corFonteHierarquia = corFonte;
      // console.log("cor da fonte: " + item.fontColor.value.value)
    }
    if (item.fontFamily) {
      estiloFonte =
        item.fontFamily.value.value != ""
          ? item.fontFamily.value.value
          : "Trebuchet MS";
      fontePrimaria = estiloFonte;
      // console.log("fontFamily value: " + item.fontFamily.value.value)
    }
    if (item.corHierarquiaUm) {
      // console.log("corHierarquiaUm: " + JSON.stringify(item.corHierarquiaUm))
      corBackground1 =
        item.corHierarquiaUm.value.value != ""
          ? item.corHierarquiaUm.value.value
          : corPrimaria[1];
      corPrimaria[1] = corBackground1;
    }
    if (item.corHierarquiaDois) {
      corBackground2 =
        item.corHierarquiaDois.value.value != ""
          ? item.corHierarquiaDois.value.value
          : corPrimaria[2];
      corPrimaria[2] = corBackground2;
    }
    if (item.corHierarquiaTres) {
      corBackground3 =
        item.corHierarquiaTres.value.value != ""
          ? item.corHierarquiaTres.value.value
          : corPrimaria[3];
      corPrimaria[3] = corBackground3;
    }
  });
}

function ajustaFonte() {
  // const queryMainTdNomes = document.querySelector('.mainTdNomes') as HTMLTableCellElement;
  // // console.log("queryMainTdNomesfdsfs:" + queryMainTdNomes)
  // const tds = queryMainTdNomes.querySelector(`[class^="text-nome"]`) as unknown as HTMLTableCellElement[];
  // console.log("tamanho fontefsdfsdf:" + tds)

  const queryMainTdNomes = document.querySelector(
    ".mainTdNomes"
  ) as HTMLElement;
  const primeiroTd = queryMainTdNomes.querySelector(
    `[class^="row-modulo-segundo"]`
  ) as HTMLTableCellElement;
  if (primeiroTd) {
    // console.log("Primeiro elemento encontrado:", primeiroTd);
    // console.log("Texto do primeiro elemento:", primeiroTd.textContent);
    const rect = primeiroTd.getBoundingClientRect();
    const altura = rect.height; // altura em pixels, número decimal
    console.log("Altura do elemento em px:", altura);
  } else {
    console.log("Nenhum elemento encontrado com essa classe.");
  }
}


// Função para gerar o conteúdo HTML do tooltip
function getTooltipContent(dItem, index) {
  return `
    <b>${dItem.evento}</b><br>
    <div style="margin-top: 4px;">
      <span style="display:inline-block;width:10px;height:10px;background:#2C3E50;margin-right:5px;border-radius:2px;"></span>
      <b>Realizado:</b> ${formatDate(dItem.dataInicio)} até ${formatDate(dItem.dataFim)}
    </div>
    ${dItem.previstoInicio && dItem.previstoFinal
      ? `<div style="margin-top: 4px;">
            <span style="display:inline-block;width:10px;height:10px;background:${dItem.cor ? dItem.cor : Object.values(corPrimaria)[index % Object.keys(corPrimaria).length]
      };margin-right:5px;border-radius:2px;"></span>
            <b>Previsto:</b> ${formatDate(dItem.previstoInicio)} até ${formatDate(dItem.previstoFinal)}
          </div>`
      : ""
    }
    ${dItem.predecessor
      ? `<div style="margin-top: 4px;"><b>Predecessor:</b> ${dItem.predecessor}</div>`
      : ""
    }
    ${dItem.idEvento
      ? `<div style="margin-top: 4px;"><b>ID:</b> ${dItem.idEvento}</div>`
      : ""
    }
    ${dItem.toolTipDados
      ? `<div style="margin-top: 4px;"><b></b> ${dItem.toolTipDados}</div>`
      : ""
    }
  `;
}

// Função para mostrar o tooltip
// function showTooltip(dItem, posX, posY, index) {
function showTooltip(dItem, event, index) {
  console.log("showTooltip: ", dItem)
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
    .html(getTooltipContent(dItem, index));
}

// E para esconder o tooltip
function hideTooltip() {
  tooltip.style("visibility", "hidden");
}

/*
consoles logs:
console.log("treeModulos2: " + svgHierarquiaNomes.node().outerHTML) //*exibe o codigo html do elemento
console.log("inicio hierarquiaPrimeiroNivel data: " + JSON.stringify(data)) //*Json.stringfy transforma um object em string na hora de exibir
*/
