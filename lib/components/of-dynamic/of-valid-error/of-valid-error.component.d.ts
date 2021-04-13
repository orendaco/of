import { OrdValidator } from '../../../models';
import { FormGroup } from '@angular/forms';
export declare class OfValidErrorComponent {
    submitted: boolean;
    validations: OrdValidator[];
    form: FormGroup;
    controlName: string;
    get f(): import("@angular/forms").AbstractControl;
}
