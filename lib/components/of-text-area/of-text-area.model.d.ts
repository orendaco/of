import { OfControlModel, OfControlModelConfig } from '../../models';
export interface OfTextAreaModelConfig extends OfControlModelConfig {
    maxLength?: number;
    rows?: number;
}
export declare class OfTextAreaModel extends OfControlModel {
    maxLength: number;
    rows: number;
    constructor(config: OfTextAreaModelConfig);
}
