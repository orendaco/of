import { AbstractControl, FormGroup } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { OfControlModel } from './of-control.model';
import { Observable, Subject } from 'rxjs';
export interface OfSchemaModelConfig {
    layout?: 'horizontal' | 'vertical';
    fields: OfControlModel[];
    focusFisrtInit?: boolean;
    errorNotValid?: string;
    isSearchBox?: boolean;
}
export declare class OfSchemaModel {
    id: number;
    layout?: 'horizontal' | 'vertical';
    fields: OfControlModel[];
    form: FormGroup;
    focusFisrtInit: boolean;
    errorNotValid: string;
    private backUpDisables;
    private render$;
    isSearchBox: boolean;
    searchBtnBusy: boolean;
    searchEvent$: Subject<any>;
    rebuilder$: Subject<number>;
    submitted: boolean;
    constructor(config: OfSchemaModelConfig);
    get value(): any;
    get valueValid(): any;
    getField(name: string): OfControlModel;
    getFormControl(name: string): AbstractControl | null;
    disableField(name: string, f?: boolean): void;
    disableAll(f?: boolean): void;
    hiddenFields(fields: string[]): void;
    showFields(fields: string[]): void;
    setHidden(fields: string[], hiddens: boolean[]): void;
    setShow(fields: string[], shows: boolean[]): void;
    fieldValueChanges(name: string, time?: number): Observable<any>;
    valueChanges(time?: number): Observable<any>;
    patchValue(value: any): void;
    triggerRender(): void;
    subRender(cdr: ChangeDetectorRef, destroy$: Observable<any>): void;
    addControls(controls: OfControlModel[], indexBegin?: number): void;
    rebuilder(): void;
    search(): void;
}
