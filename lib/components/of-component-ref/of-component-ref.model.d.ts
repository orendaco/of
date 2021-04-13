import { Type } from '@angular/core';
import { OfControlModel, OfControlModelConfig } from '../../models';
export interface OfComponentRefModelConfig<T> extends OfControlModelConfig {
    componentRef: Type<T>;
}
export declare class OfComponentRefModel<T> extends OfControlModel {
    componentRef: Type<T>;
    constructor(config: OfComponentRefModelConfig<T>);
}
