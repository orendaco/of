import { OfControlModel, OfControlModelConfig } from '../../models';
export interface OfNumberModelConfig extends OfControlModelConfig {
    min?: number;
    max?: number;
    step?: number;
    onlyKeyNumber?: boolean;
    maxlength?: number;
}
export declare class OfNumberModel extends OfControlModel {
    min: number | null;
    max: number | null;
    step: number;
    onlyKeyNumber: boolean;
    maxlength: number | null;
    constructor(config: OfNumberModelConfig);
}
