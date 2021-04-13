import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OfSchemaModel } from '../../models';
import { OfRadioModel } from './of-radio.model';
export declare class OfRadioComponent implements OnInit {
    schemaModel: OfSchemaModel;
    field: OfRadioModel;
    group: FormGroup;
    constructor();
    ngOnInit(): void;
}
