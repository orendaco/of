import { ChangeDetectionStrategy, Component } from '@angular/core';
export class OfContentHtmlComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfContentHtmlComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-content-html',
                template: `
      <div [innerHTML]="field.content"></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfContentHtmlComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtY29udGVudC1odG1sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1jb250ZW50LWh0bWwvb2YtY29udGVudC1odG1sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBVTNFLE1BQU0sT0FBTyxzQkFBc0I7SUFHakM7SUFDQSxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7OENBQ2tDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPZkNvbnRlbnRIdG1sTW9kZWwgfSBmcm9tICcuL29mLWNvbnRlbnQtaHRtbC5tb2RlbCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvZi1jb250ZW50LWh0bWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxkaXYgW2lubmVySFRNTF09XCJmaWVsZC5jb250ZW50XCI+PC9kaXY+YCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT2ZDb250ZW50SHRtbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZmllbGQ6IE9mQ29udGVudEh0bWxNb2RlbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==