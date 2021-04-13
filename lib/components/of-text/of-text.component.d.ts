import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { OfSchemaModel } from '../../models';
import { OfTextModel } from './of-text.model';
import { Subject } from 'rxjs';
export declare class OfTextComponent implements OnInit {
    private destroy$;
    searchEvent: EventEmitter<any>;
    schemaModel: OfSchemaModel;
    field: OfTextModel;
    group: FormGroup;
    keyEnter$: Subject<unknown>;
    nzSpinning: boolean;
    constructor(destroy$: DestroyRxjsService);
    ngOnInit(): void;
    onKeyEnterControl(): void;
}
