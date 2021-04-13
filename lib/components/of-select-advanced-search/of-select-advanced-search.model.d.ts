import { ISelectSearchServerDto, PagedResultDtoOfSelectOption } from '../../models';
import { OfSelectBaseModel, OfSelectBaseModelConfig } from '../../models/of-select-base.model';
import { Observable } from 'rxjs';
import { Type } from '@angular/core';
import { ModalOptions, NzDrawerOptions } from 'ng-zorro-antd';
export interface OfSelectAdvancedSearchModelConfig<T> extends OfSelectBaseModelConfig {
    showPagination?: boolean;
    functionService: (dto: ISelectSearchServerDto) => Observable<PagedResultDtoOfSelectOption>;
    componentAdvanced: Type<T>;
    showComponentType?: 'drawer' | 'modal';
    nzDrawerOptions?: NzDrawerOptions;
    nzModalConfig?: ModalOptions;
}
export declare class OfSelectAdvancedSearchModel<T> extends OfSelectBaseModel {
    showPagination: boolean;
    functionService: (dto: ISelectSearchServerDto) => Observable<PagedResultDtoOfSelectOption>;
    componentAdvanced: Type<T>;
    showComponentType: 'drawer' | 'modal';
    nzDrawerOptions: NzDrawerOptions | null;
    nzModalConfig: ModalOptions | null;
    constructor(config: OfSelectAdvancedSearchModelConfig<T>);
}
