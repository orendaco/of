import { FormBuilder, FormGroup } from '@angular/forms';
import { OfControlModel, OfExtendControlModel } from '../models';
import { OfValidatorService } from './of-validator.service';
export declare class OfCreateControlFormService {
    private fb;
    private validatorService;
    constructor(fb: FormBuilder, validatorService: OfValidatorService);
    createControl(fields: OfControlModel[]): FormGroup;
    createExtendControl(group: FormGroup, controls: OfExtendControlModel[]): void;
    getDataFieldAndNameConstrols(fields: OfControlModel[]): any[];
    updateControl(fields: OfControlModel[], group: FormGroup): void;
    private createField;
    createValidations(field: OfControlModel | OfExtendControlModel): void;
    bindValidations(field: OfControlModel | OfExtendControlModel): import("@angular/forms").ValidatorFn;
}
