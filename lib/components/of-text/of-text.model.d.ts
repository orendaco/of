import { OfControlModel, OfControlModelConfig } from '../../models';
export interface OrdTextModelConfig extends OfControlModelConfig {
    maxLength?: number;
    minLength?: number;
}
export declare class OfTextModel extends OfControlModel {
    maxLength?: number | null;
    minLength?: number | null;
    constructor(config: OrdTextModelConfig);
}
