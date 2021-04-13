import { FormControl } from '@angular/forms';
export declare class OfValidatorService {
    constructor();
    noWhitespaceValidator(control: FormControl): {
        whiteSpace: boolean;
    };
    emailValidator(control: FormControl): {
        email: boolean;
    };
    passwordValidator(control: FormControl): {
        password: boolean;
    };
    phoneValidator(control: FormControl): {
        phone: boolean;
    };
    focusControlItem(id: number): void;
    focusFirst(id: number): void;
}
