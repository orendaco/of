import { PipeTransform } from '@angular/core';
import { OfSelectBaseModel } from '../models/of-select-base.model';
import { IOfSelectOptionDto } from '../models';
export declare class OfSelectRenderOptionPipe implements PipeTransform {
    transform(displayText: string, field: OfSelectBaseModel, option: IOfSelectOptionDto): string;
}
