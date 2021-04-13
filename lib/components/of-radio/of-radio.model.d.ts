import { OfControlModel, OfControlModelConfig } from '../../models';
export interface IRadioItem {
    label: string;
    value: string | number;
}
export interface OfRadioModelConfig extends OfControlModelConfig {
    items: IRadioItem[];
}
export declare class OfRadioModel extends OfControlModel {
    items: IRadioItem[];
    constructor(config: OfRadioModelConfig);
}
