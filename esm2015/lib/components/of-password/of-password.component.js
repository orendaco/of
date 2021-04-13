import { ChangeDetectionStrategy, Component } from '@angular/core';
export class OfPasswordComponent {
    constructor() {
        this.passwordVisible = false;
    }
    ngOnInit() {
        this.field.placeholder = this.field.placeholder || 'Nhập mật khẩu';
    }
}
OfPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-password',
                template: `
      <form [formGroup]="group">
          <nz-input-group nzPrefixIcon="lock" [nzSuffix]="suffixTemplate">
              <input [type]="passwordVisible ? 'text' : 'password'" nz-input placeholder="{{field.placeholder}}"
                     [formControlName]="field.dataField"/>
          </nz-input-group>
          <ng-template #suffixTemplate>
              <i nz-icon [nzType]="passwordVisible ? 'eye-invisible' : 'eye'"
                 (click)="passwordVisible = !passwordVisible"></i>
          </ng-template>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfPasswordComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLXBhc3N3b3JkL29mLXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBcUIzRSxNQUFNLE9BQU8sbUJBQW1CO0lBTzlCO1FBRkEsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFHeEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxlQUFlLENBQUM7SUFDckUsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2ZTY2hlbWFNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IE9mUHdkTW9kZWwgfSBmcm9tICcuL29mLXB3ZC5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29mLXBhc3N3b3JkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICAgICAgICA8bnotaW5wdXQtZ3JvdXAgbnpQcmVmaXhJY29uPVwibG9ja1wiIFtuelN1ZmZpeF09XCJzdWZmaXhUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBbdHlwZV09XCJwYXNzd29yZFZpc2libGUgPyAndGV4dCcgOiAncGFzc3dvcmQnXCIgbnotaW5wdXQgcGxhY2Vob2xkZXI9XCJ7e2ZpZWxkLnBsYWNlaG9sZGVyfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLmRhdGFGaWVsZFwiLz5cclxuICAgICAgICAgIDwvbnotaW5wdXQtZ3JvdXA+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI3N1ZmZpeFRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJwYXNzd29yZFZpc2libGUgPyAnZXllLWludmlzaWJsZScgOiAnZXllJ1wiXHJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInBhc3N3b3JkVmlzaWJsZSA9ICFwYXNzd29yZFZpc2libGVcIj48L2k+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT2ZQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgc2NoZW1hTW9kZWw6IE9mU2NoZW1hTW9kZWw7XHJcbiAgZmllbGQ6IE9mUHdkTW9kZWw7XHJcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcbiAgcGFzc3dvcmRWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpZWxkLnBsYWNlaG9sZGVyID0gdGhpcy5maWVsZC5wbGFjZWhvbGRlciB8fCAnTmjhuq1wIG3huq10IGto4bqpdSc7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=