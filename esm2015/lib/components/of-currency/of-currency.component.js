import { ChangeDetectionStrategy, Component } from '@angular/core';
export class OfCurrencyComponent {
    constructor() {
        this.options = {};
    }
    ngOnInit() {
        this.options = {
            prefix: this.field.prefix,
            suffix: this.field.suffix,
            thousands: '.',
            decimal: ',',
            precision: this.field.precision
        };
    }
}
OfCurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-currency',
                template: `
      <form [formGroup]="group">
          <input
                  currencyMask
                  nz-input
                  [formControlName]="field.dataField"
                  class="ord-dynamic-input"
                  [disabled]="field.disabled"
                  [placeholder]="field.placeholder"
                  [options]="field"
          />
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      input::placeholder {
          text-align: left;
      }
  `]
            },] }
];
OfCurrencyComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtY3VycmVuY3kuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLWN1cnJlbmN5L29mLWN1cnJlbmN5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBMEIzRSxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCO1FBRkEsWUFBTyxHQUFRLEVBQUUsQ0FBQztJQUdsQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDekIsU0FBUyxFQUFFLEdBQUc7WUFDZCxPQUFPLEVBQUUsR0FBRztZQUNaLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7U0FDaEMsQ0FBQztJQUNKLENBQUM7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBQ3RDOzs7O0dBSVI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9mQ3VycmVuY3lNb2RlbCB9IGZyb20gJy4vb2YtY3VycmVuY3kubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvZi1jdXJyZW5jeScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5TWFza1xyXG4gICAgICAgICAgICAgICAgICBuei1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLmRhdGFGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwib3JkLWR5bmFtaWMtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJmaWVsZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE9mQ3VycmVuY3lDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZpZWxkOiBPZkN1cnJlbmN5TW9kZWw7XHJcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICBvcHRpb25zOiBhbnkgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgcHJlZml4OiB0aGlzLmZpZWxkLnByZWZpeCxcclxuICAgICAgc3VmZml4OiB0aGlzLmZpZWxkLnN1ZmZpeCxcclxuICAgICAgdGhvdXNhbmRzOiAnLicsXHJcbiAgICAgIGRlY2ltYWw6ICcsJyxcclxuICAgICAgcHJlY2lzaW9uOiB0aGlzLmZpZWxkLnByZWNpc2lvblxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==