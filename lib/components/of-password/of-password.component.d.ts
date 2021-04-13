import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OfSchemaModel } from '../../models';
import { OfPwdModel } from './of-pwd.model';
export declare class OfPasswordComponent implements OnInit {
    schemaModel: OfSchemaModel;
    field: OfPwdModel;
    group: FormGroup;
    passwordVisible: boolean;
    constructor();
    ngOnInit(): void;
}
