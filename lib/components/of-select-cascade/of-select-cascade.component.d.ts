import { AfterViewInit } from '@angular/core';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { OfSelectComponent } from '../of-select/of-select.component';
import { IOfSelectOptionDto, OfSchemaModel } from '../../models';
import { FormGroup } from '@angular/forms';
import { OfSelectCascadeModel } from './of-select-cascade-model';
import { Observable } from 'rxjs';
export declare class OfSelectCascadeComponent implements AfterViewInit {
    private destroy$;
    vcSelect: OfSelectComponent;
    schemaModel: OfSchemaModel;
    field: OfSelectCascadeModel;
    group: FormGroup;
    constructor(destroy$: DestroyRxjsService);
    getOptionsFromApi(cascade: string): Observable<IOfSelectOptionDto[]>;
    get ctrl(): import("@angular/forms").AbstractControl;
    get hasCacheOption(): boolean;
    key(cascade: string): string;
    disableIfCascadeEmpty(cascade: string): void;
    setOptionsForView(options: any): void;
    checkCurrentValue(options: IOfSelectOptionDto[]): void;
    handlerCascadeChange(): void;
    ngAfterViewInit(): void;
}
