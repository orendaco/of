import { OfControlModel, OfControlModelConfig } from '../../models';
export interface OfCurrencyModelConfig extends OfControlModelConfig {
    prefix?: string;
    suffix?: string;
    precision?: number;
}
export declare class OfCurrencyModel extends OfControlModel {
    prefix: string | null;
    suffix: string | null;
    precision: number | null;
    constructor(config: OfCurrencyModelConfig);
}
