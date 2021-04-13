import { OfType } from './of-type';
import { Observable } from 'rxjs';
import { OfExtendControlModel } from './of-extend-control.model';
export interface OrdValidator {
    name: string | 'email' | 'password' | 'phone';
    validator?: any;
    message?: string;
}
export interface OfControlModelConfig {
    dataField: string;
    label: string;
    hiddenLabel?: boolean;
    width?: number;
    css?: string;
    required?: boolean;
    errorEmpty?: string;
    placeholder?: string;
    disabled?: boolean;
    disabledAsync?: Observable<boolean>;
    hidden?: boolean;
    hiddenAsync?: Observable<boolean>;
    validations?: OrdValidator[];
    value?: any | 'sessionTinh' | 'sessionHuyen' | 'sessionXa' | 'sessionBenhVienId';
    bottomHtml?: string;
}
export declare abstract class OfControlModel {
    type: OfType;
    dataField: string;
    label: string;
    hiddenLabel: boolean;
    width: number;
    css: string;
    required: boolean;
    errorEmpty: string;
    placeholder: string;
    disabled: boolean;
    disabledAsync: Observable<boolean>;
    hidden: boolean;
    hiddenAsync: Observable<boolean>;
    validations: OrdValidator[];
    value: any | null | 'sessionTinh' | 'sessionHuyen' | 'sessionXa' | 'sessionBenhVienId';
    bottomHtml: string;
    controls: OfExtendControlModel[];
    protected constructor(config: OfControlModelConfig);
}
