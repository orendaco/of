import { OfControlModel, OfControlModelConfig } from '../../models';
export interface OrdCheckModelConfig extends OfControlModelConfig {
    checkBoxLabel: string;
}
export declare class OfCheckBoxModel extends OfControlModel {
    checkBoxLabel: string;
    constructor(config: OrdCheckModelConfig);
}
