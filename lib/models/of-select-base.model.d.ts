import { IOfSelectOptionDto } from './ord-combo-box-dto';
import { OfControlModel, OfControlModelConfig } from './of-control.model';
export interface OfSelectBaseModelConfig extends OfControlModelConfig {
    nzMode?: 'multiple' | 'tags' | 'default';
    nzAllowClear?: boolean;
    nzMaxMultipleCount?: number;
    nzMaxTagCount?: number;
    renderOptionFunc?: (option: IOfSelectOptionDto) => string;
    renderSelectedFunc?: (option: IOfSelectOptionDto) => string;
}
export declare class OfSelectBaseModel extends OfControlModel {
    nzAllowClear: boolean;
    nzMode: 'multiple' | 'tags' | 'default';
    nzMaxMultipleCount: number | null;
    nzMaxTagCount: number | null;
    options: IOfSelectOptionDto[];
    renderOptionFunc: (option: IOfSelectOptionDto) => string;
    renderSelectedFunc: (option: IOfSelectOptionDto) => string;
    itemSelected: IOfSelectOptionDto;
    constructor(config: OfSelectBaseModelConfig);
}
