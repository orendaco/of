import { Component, Input } from '@angular/core';
export class OfValidErrorComponent {
    constructor() {
        this.submitted = false;
        this.validations = [];
        this.controlName = '';
    }
    get f() {
        return this.form.controls[this.controlName];
    }
}
OfValidErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-valid-error',
                template: `
      <span class="form-control-err text-danger" *ngIf="validations && submitted">
              {{f?.errors | showValidationError : validations : submitted}}
        </span>
  `
            },] }
];
OfValidErrorComponent.propDecorators = {
    submitted: [{ type: Input }],
    validations: [{ type: Input }],
    form: [{ type: Input }],
    controlName: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtdmFsaWQtZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLWR5bmFtaWMvb2YtdmFsaWQtZXJyb3Ivb2YtdmFsaWQtZXJyb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBWXpELE1BQU0sT0FBTyxxQkFBcUI7SUFSbEM7UUFTVyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUVqQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUs1QixDQUFDO0lBSEMsSUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7R0FJVDthQUNGOzs7d0JBRUUsS0FBSzswQkFDTCxLQUFLO21CQUNMLEtBQUs7MEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb2YtdmFsaWQtZXJyb3InLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWNvbnRyb2wtZXJyIHRleHQtZGFuZ2VyXCIgKm5nSWY9XCJ2YWxpZGF0aW9ucyAmJiBzdWJtaXR0ZWRcIj5cbiAgICAgICAgICAgICAge3tmPy5lcnJvcnMgfCBzaG93VmFsaWRhdGlvbkVycm9yIDogdmFsaWRhdGlvbnMgOiBzdWJtaXR0ZWR9fVxuICAgICAgICA8L3NwYW4+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgT2ZWYWxpZEVycm9yQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc3VibWl0dGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHZhbGlkYXRpb25zOiBPcmRWYWxpZGF0b3JbXSA9IFtdO1xuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGNvbnRyb2xOYW1lID0gJyc7XG5cbiAgZ2V0IGYoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmNvbnRyb2xOYW1lXTtcbiAgfVxufVxuIl19