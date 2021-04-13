import { OfSelectBaseModel, OfSelectBaseModelConfig } from '../../models/of-select-base.model';
import { IOfSelectOptionDto } from '../../models';
import { Observable } from 'rxjs';
export interface OfSelectAsyncModelConfig extends OfSelectBaseModelConfig {
    optionsAsync: Observable<IOfSelectOptionDto[]>;
    keyCache?: string;
}
export declare class OfSelectAsyncModel extends OfSelectBaseModel {
    optionsAsync: Observable<IOfSelectOptionDto[]>;
    keyCache: string;
    constructor(config: OfSelectAsyncModelConfig);
}
