import { OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OfFieldComponent } from './of-field.component';
import { OfTemplateRefModel } from './of-template-ref.model';
import { OfCreateControlFormService } from '../../services/of-create-control-form-service';
export declare class OfTemplateRefComponent implements OnInit {
    private formService;
    ofFieldTempates: OfFieldComponent[];
    field: OfTemplateRefModel;
    group: FormGroup;
    id: number;
    templateRef: TemplateRef<any>;
    constructor(formService: OfCreateControlFormService);
    ngOnInit(): void;
}
