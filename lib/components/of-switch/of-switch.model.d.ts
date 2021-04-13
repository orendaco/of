import { OfControlModel, OfControlModelConfig } from '../../models';
export interface OfSwitchModelConfig extends OfControlModelConfig {
    yesText?: string;
    noText?: string;
}
export declare class OfSwitchModel extends OfControlModel {
    yesText: string | null;
    noText: string | null;
    constructor(config: OfSwitchModelConfig);
}
