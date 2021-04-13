import { OrdValidator } from './of-control.model';
export interface OfExtendControlModelConfig {
    label?: string;
    dataField: string;
    validations?: OrdValidator[];
    value?: any;
    required?: boolean;
    disabled?: boolean;
    errorEmpty?: string;
}
export declare class OfExtendControlModel {
    label: string;
    dataField: string;
    validations?: OrdValidator[];
    value?: any;
    required?: boolean;
    disabled: boolean;
    errorEmpty: string;
    constructor(config: OfExtendControlModelConfig);
}
