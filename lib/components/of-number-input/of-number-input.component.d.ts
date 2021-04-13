import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OfNumberModel } from './of-number.model';
export declare class OfNumberInputComponent implements OnInit {
    field: OfNumberModel;
    group: FormGroup;
    constructor();
    ngOnInit(): void;
}
