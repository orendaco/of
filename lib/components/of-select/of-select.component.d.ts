import { AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IOfSelectOptionDto, OfSchemaModel } from '../../models';
import { OfSelectModel } from './of-select-model';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
export declare class OfSelectComponent implements OnInit, AfterViewInit {
    private cdr;
    private destroy$;
    schemaModel: OfSchemaModel;
    field: OfSelectModel;
    group: FormGroup;
    options: IOfSelectOptionDto[];
    constructor(cdr: ChangeDetectorRef, destroy$: DestroyRxjsService);
    ngOnInit(): void;
    trackBySelect(index: number, item: IOfSelectOptionDto): string;
    search(value: string): void;
    setOptionsView(options: any): void;
    selectAll(): void;
    unSelectAll(): void;
    private handlerValueDataFieldChange;
    private getItemSelected;
    ngAfterViewInit(): void;
}
