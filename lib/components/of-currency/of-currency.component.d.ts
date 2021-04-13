import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OfCurrencyModel } from './of-currency.model';
export declare class OfCurrencyComponent implements OnInit {
    field: OfCurrencyModel;
    group: FormGroup;
    options: any;
    constructor();
    ngOnInit(): void;
}
