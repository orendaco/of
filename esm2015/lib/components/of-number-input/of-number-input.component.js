import { ChangeDetectionStrategy, Component } from '@angular/core';
export class OfNumberInputComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfNumberInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-number-input',
                template: `
      <form [formGroup]="group">
          <input nz-input *ngIf="field.onlyKeyNumber;else tplNumberInput"
                 numbersOnlyInput [formControlName]="field.dataField"
                 [placeholder]="field.placeholder"
                 maxlength="{{ field.maxlength }}"
          />
          <ng-template #tplNumberInput>
              <nz-input-number [formControlName]="field.dataField"
                               [nzPlaceHolder]="field.placeholder"
                               style="width: 100%"
                               [nzMin]="field.min"
                               [nzMax]="field.max"
                               [nzStep]="field.step">
              </nz-input-number>
          </ng-template>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfNumberInputComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtbnVtYmVyLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1udW1iZXItaW5wdXQvb2YtbnVtYmVyLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBMEIzRSxNQUFNLE9BQU8sc0JBQXNCO0lBSWpDO0lBQ0EsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPZk51bWJlck1vZGVsIH0gZnJvbSAnLi9vZi1udW1iZXIubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvZi1udW1iZXItaW5wdXQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dCBuei1pbnB1dCAqbmdJZj1cImZpZWxkLm9ubHlLZXlOdW1iZXI7ZWxzZSB0cGxOdW1iZXJJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgbnVtYmVyc09ubHlJbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLmRhdGFGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7eyBmaWVsZC5tYXhsZW5ndGggfX1cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjdHBsTnVtYmVySW5wdXQ+XHJcbiAgICAgICAgICAgICAgPG56LWlucHV0LW51bWJlciBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLmRhdGFGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJmaWVsZC5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuek1pbl09XCJmaWVsZC5taW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW256TWF4XT1cImZpZWxkLm1heFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpTdGVwXT1cImZpZWxkLnN0ZXBcIj5cclxuICAgICAgICAgICAgICA8L256LWlucHV0LW51bWJlcj5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvZm9ybT5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPZk51bWJlcklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmaWVsZDogT2ZOdW1iZXJNb2RlbDtcclxuICBncm91cDogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIl19