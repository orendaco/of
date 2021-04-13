import { OfSelectBaseModel, OfSelectBaseModelConfig } from '../../models/of-select-base.model';
import { IOfSelectOptionDto } from '../../models';
import { Observable } from 'rxjs';
export interface OfSelectCascadeModelConfig extends OfSelectBaseModelConfig {
    functionService: (cascade: string) => Observable<IOfSelectOptionDto[]>;
    keyCache?: string;
    cascadeField: string;
}
export declare class OfSelectCascadeModel extends OfSelectBaseModel {
    functionService: (cascade: string) => Observable<IOfSelectOptionDto[]>;
    keyCache: string;
    cascadeField: string;
    constructor(config: OfSelectCascadeModelConfig);
}
