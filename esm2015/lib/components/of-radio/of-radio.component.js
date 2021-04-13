import { ChangeDetectionStrategy, Component } from '@angular/core';
export class OfRadioComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-radio',
                template: `
      <form [formGroup]="group">
          <nz-radio-group [formControlName]="field.dataField"
                          [nzDisabled]="field.disabled"
                          style="width: 100%">
              <label *ngFor="let op of field.items" nz-radio [nzValue]="op.value">{{ op.label }}</label>
          </nz-radio-group>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfRadioComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLXJhZGlvL29mLXJhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBa0IzRSxNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCO0lBQ0EsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPZlNjaGVtYU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgT2ZSYWRpb01vZGVsIH0gZnJvbSAnLi9vZi1yYWRpby5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29mLXJhZGlvJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcbiAgICAgICAgICA8bnotcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5kYXRhRmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsICpuZ0Zvcj1cImxldCBvcCBvZiBmaWVsZC5pdGVtc1wiIG56LXJhZGlvIFtuelZhbHVlXT1cIm9wLnZhbHVlXCI+e3sgb3AubGFiZWwgfX08L2xhYmVsPlxyXG4gICAgICAgICAgPC9uei1yYWRpby1ncm91cD5cclxuICAgICAgPC9mb3JtPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE9mUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHNjaGVtYU1vZGVsOiBPZlNjaGVtYU1vZGVsO1xyXG4gIGZpZWxkOiBPZlJhZGlvTW9kZWw7XHJcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==