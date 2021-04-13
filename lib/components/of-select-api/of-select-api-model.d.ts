import { OfSelectBaseModel, OfSelectBaseModelConfig } from '../../models/of-select-base.model';
import { Observable } from 'rxjs';
import { IOfSelectOptionDto } from '../../models';
export interface OfSelectApiModelConfig extends OfSelectBaseModelConfig {
    functionService: Observable<IOfSelectOptionDto[]>;
    keyCache?: string;
}
export declare class OfSelectApiModel extends OfSelectBaseModel {
    functionService: Observable<IOfSelectOptionDto[]>;
    keyCache: string;
    constructor(config: OfSelectApiModelConfig);
}
