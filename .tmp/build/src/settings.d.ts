import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
 * Data Point Formatting Card
 */
declare class DataPointCardSettings extends FormattingSettingsCard {
    fontSize: formattingSettings.NumUpDown;
    fontColor: formattingSettings.ColorPicker;
    fontFamily: formattingSettings.ItemDropdown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class CustomCardSettings extends FormattingSettingsCard {
    corHierarquiaUm: formattingSettings.ColorPicker;
    corHierarquiaDois: formattingSettings.ColorPicker;
    corHierarquiaTres: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
* visual settings model class
*
*/
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    dataPointCard: DataPointCardSettings;
    customCardBack: CustomCardSettings;
    cards: (DataPointCardSettings | CustomCardSettings)[];
}
export {};
