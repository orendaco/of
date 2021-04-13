import { Component } from '@angular/core';
export class OfTextAreaComponent {
}
OfTextAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-text-area',
                template: `
      <form [formGroup]="group">
          <textarea nz-input
                    [formControlName]="field.dataField"
                    [placeholder]="field.placeholder"
                    [rows]="field.rows"
                    maxlength="{{field.maxLength}}"></textarea>
      </form>
  `
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtdGV4dC1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi10ZXh0LWFyZWEvb2YtdGV4dC1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBaUIxQyxNQUFNLE9BQU8sbUJBQW1COzs7WUFaL0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9mU2NoZW1hTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBPZlRleHRBcmVhTW9kZWwgfSBmcm9tICcuL29mLXRleHQtYXJlYS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29mLXRleHQtYXJlYScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgICAgICAgPHRleHRhcmVhIG56LWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5kYXRhRmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3Jvd3NdPVwiZmllbGQucm93c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwie3tmaWVsZC5tYXhMZW5ndGh9fVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgIDwvZm9ybT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPZlRleHRBcmVhQ29tcG9uZW50IHtcclxuICBzY2hlbWFNb2RlbDogT2ZTY2hlbWFNb2RlbDtcclxuICBmaWVsZDogT2ZUZXh0QXJlYU1vZGVsO1xyXG4gIGdyb3VwOiBGb3JtR3JvdXA7XHJcbn1cclxuIl19