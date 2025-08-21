"use strict";

import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

/**
 * Data Point Formatting Card
 */
class DataPointCardSettings extends FormattingSettingsCard {
    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Tamanho de fonte",
        value: 18
    });

    fontColor = new formattingSettings.ColorPicker({
        name: "fontColor",
        displayName: "Cor da fonte",
        value: { value: "" }
    });
    fontFamily = new formattingSettings.ItemDropdown({
        name: "fontFamily",
        displayName: "Fonte",
        value: { value: "Trebuchet MS", displayName: "Trebuchet MS" },
        items: [
            { displayName: "Arial", value: "Arial, sans-serif" },
            { displayName: "Courier New", value: "'Courier New', Courier, monospace" },
            { displayName: "Georgia", value: "Georgia, serif" },
            { displayName: "Impact", value: "Impact, Charcoal, sans-serif" },
            { displayName: "Tahoma", value: "Tahoma, Geneva, sans-serif" },
            { displayName: "Times New Roman", value: "'Times New Roman', Times, serif" },
            { displayName: "Trebuchet MS", value: "'Trebuchet MS', Helvetica, sans-serif" },
            { displayName: "Verdana", value: "Verdana, Geneva, sans-serif" }
        ]
    });

    name: string = "dataPoint";
    displayName: string = "Customização de Fonte";
    slices: Array<FormattingSettingsSlice> = [this.fontSize, this.fontColor, this.fontFamily];
}

class CustomCardSettings extends FormattingSettingsCard {
    corHierarquiaUm = new formattingSettings.ColorPicker({
        name: "corHierarquiaUm",
        displayName: "Cor 1",
        value: { value: "" }
    });
    corHierarquiaDois = new formattingSettings.ColorPicker({
        name: "corHierarquiaDois",
        displayName: "Cor 2",
        value: { value: "" }
    });
    corHierarquiaTres = new formattingSettings.ColorPicker({
        name: "corHierarquiaTres",
        displayName: "Cor 3",
        value: { value: "" }
    });

    name: string = "customSettings";
    displayName: string = "Cores Hierarquia/Evento";
    slices: Array<FormattingSettingsSlice> = [this.corHierarquiaUm, this.corHierarquiaDois, this.corHierarquiaTres];
}


/**
* visual settings model class
*
*/
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
    // Create formatting settings model formatting cards
    dataPointCard = new DataPointCardSettings();
    customCardBack = new CustomCardSettings();

    //so aparece os cards adicionados no array abaixo
    // cards = [this.dataPointCard];
    cards = [this.dataPointCard, this.customCardBack];
}
