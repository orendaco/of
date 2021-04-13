import { PipeTransform } from '@angular/core';
import { OrdValidator } from '../models';
export declare class ShowValidationErrorPipe implements PipeTransform {
    transform(errors: any, validations: OrdValidator[], submitted: boolean): string;
}
