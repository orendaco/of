import { ChangeDetectionStrategy, Component } from '@angular/core';
export class OfSwitchComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-switch',
                template: `
      <form [formGroup]="group">
          <nz-switch [formControlName]="field.dataField"
                     [nzCheckedChildren]="field.yesText ? field.yesText : checkedTemplate"
                     [nzUnCheckedChildren]="field.noText ? field.noText : unCheckedTemplate"
                     [nzDisabled]="field.disabled"
          >
              <ng-template #checkedTemplate><i nz-icon nzType="check"></i></ng-template>
              <ng-template #unCheckedTemplate><i nz-icon nzType="close"></i></ng-template>
          </nz-switch>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfSwitchComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1zd2l0Y2gvb2Ytc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBb0IzRSxNQUFNLE9BQU8saUJBQWlCO0lBSTVCO0lBQ0EsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0dBV1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPZlN3aXRjaE1vZGVsIH0gZnJvbSAnLi9vZi1zd2l0Y2gubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvZi1zd2l0Y2gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgICAgICAgIDxuei1zd2l0Y2ggW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5kYXRhRmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbbnpDaGVja2VkQ2hpbGRyZW5dPVwiZmllbGQueWVzVGV4dCA/IGZpZWxkLnllc1RleHQgOiBjaGVja2VkVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbbnpVbkNoZWNrZWRDaGlsZHJlbl09XCJmaWVsZC5ub1RleHQgPyBmaWVsZC5ub1RleHQgOiB1bkNoZWNrZWRUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NoZWNrZWRUZW1wbGF0ZT48aSBuei1pY29uIG56VHlwZT1cImNoZWNrXCI+PC9pPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICN1bkNoZWNrZWRUZW1wbGF0ZT48aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCI+PC9pPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L256LXN3aXRjaD5cclxuICAgICAgPC9mb3JtPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE9mU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmaWVsZDogT2ZTd2l0Y2hNb2RlbDtcclxuICBncm91cDogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIl19