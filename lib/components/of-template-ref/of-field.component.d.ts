import { TemplateRef } from '@angular/core';
import { OfDynamicComponent } from '../of-dynamic/of-dynamic.component';
export declare class OfFieldComponent {
    ofDynamic: OfDynamicComponent;
    id: string;
    controlTemplate: TemplateRef<any>;
    constructor(ofDynamic: OfDynamicComponent);
}
