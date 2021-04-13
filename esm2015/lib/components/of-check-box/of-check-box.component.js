import { ChangeDetectionStrategy, Component } from '@angular/core';
export class OfCheckBoxComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfCheckBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-check-box',
                template: `
      <form [formGroup]="group">
          <label nz-checkbox [formControlName]="field.dataField">{{ field.checkBoxLabel }}</label>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfCheckBoxComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtY2hlY2stYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1jaGVjay1ib3gvb2YtY2hlY2stYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBYTNFLE1BQU0sT0FBTyxtQkFBbUI7SUFJOUI7SUFDQSxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2ZDaGVja0JveE1vZGVsIH0gZnJvbSAnLi9vZi1jaGVjay1ib3gubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvZi1jaGVjay1ib3gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLmRhdGFGaWVsZFwiPnt7IGZpZWxkLmNoZWNrQm94TGFiZWwgfX08L2xhYmVsPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT2ZDaGVja0JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZmllbGQ6IE9mQ2hlY2tCb3hNb2RlbDtcclxuICBncm91cDogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIl19