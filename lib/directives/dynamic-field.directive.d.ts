import { ComponentFactoryResolver, EventEmitter, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DestroyRxjsService } from '../services/destroy-rxjs.service';
import { OfControlModel, OfSchemaModel } from '../models';
import { OfFieldComponent } from '../components/of-template-ref/of-field.component';
export declare class DynamicFieldDirective implements OnInit {
    private resolver;
    private container;
    private destroy$;
    schemaModel: OfSchemaModel;
    field: OfControlModel;
    group: FormGroup;
    ofFieldTempates: OfFieldComponent[];
    searchEvent: EventEmitter<any>;
    private componentRef;
    private component;
    constructor(resolver: ComponentFactoryResolver, container: ViewContainerRef, destroy$: DestroyRxjsService);
    ngOnInit(): Promise<void>;
    mapComponent(): Promise<void>;
    get f(): import("@angular/forms").AbstractControl;
    private init$;
    private disableExtendControl;
}
