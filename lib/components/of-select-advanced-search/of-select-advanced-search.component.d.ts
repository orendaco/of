import { OnInit } from '@angular/core';
import { OfSchemaModel } from '../../models';
import { FormGroup } from '@angular/forms';
import { NzDrawerService, NzModalService } from 'ng-zorro-antd';
import { OfSelectAdvancedSearchModel } from './of-select-advanced-search.model';
export declare class OfSelectAdvancedSearchComponent implements OnInit {
    private drawerService;
    private modalService;
    schemaModel: OfSchemaModel;
    field: OfSelectAdvancedSearchModel<any>;
    group: FormGroup;
    constructor(drawerService: NzDrawerService, modalService: NzModalService);
    ngOnInit(): void;
    onClickAdvancedBtn(): void;
    openDrawer(): void;
    openModal(): void;
}
