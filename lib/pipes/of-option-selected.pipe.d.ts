import { PipeTransform } from '@angular/core';
import { OfSelectBaseModel } from '../models/of-select-base.model';
export declare class OfOptionSelectedPipe implements PipeTransform {
    transform(value: any, label: string, field: OfSelectBaseModel): string;
}
