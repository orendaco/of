import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { of } from 'rxjs';
import { AppUtilityService } from '../../services/app-utility-service';
import { takeUntil } from 'rxjs/operators';
export class OfSelectApiComponent {
    constructor(destroy$) {
        this.destroy$ = destroy$;
    }
    get hasCacheOption() {
        return !AppUtilityService.isNullOrEmpty(this.field.keyCache);
    }
    get key() {
        return 'selectOpt_' + this.field.keyCache;
    }
    getOptionsFromApi() {
        if (this.hasCacheOption) {
            const cache = sessionStorage.getItem(this.key);
            if (cache) {
                return of(JSON.parse(cache));
            }
        }
        return this.field.functionService;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.getOptionsFromApi().pipe(takeUntil(this.destroy$))
                .subscribe(opt => {
                if (this.hasCacheOption && !AppUtilityService.isNotAnyItem(opt)) {
                    sessionStorage.setItem(this.key, JSON.stringify(opt));
                }
                this.field.options = opt;
                if (this.vcSelect) {
                    this.vcSelect.setOptionsView(opt);
                }
            });
        });
    }
}
OfSelectApiComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-of-select-api',
                template: `
      <of-select #vcSelect [schemaModel]="schemaModel" [group]="group" [field]="field"></of-select>`,
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfSelectApiComponent.ctorParameters = () => [
    { type: DestroyRxjsService }
];
OfSelectApiComponent.propDecorators = {
    vcSelect: [{ type: ViewChild, args: ['vcSelect',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LWFwaS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2NvbXBvbmVudHMvb2Ytc2VsZWN0LWFwaS9vZi1zZWxlY3QtYXBpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFekUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTM0MsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQixZQUFvQixRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtJQUNoRCxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDNUMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQyxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDOUI7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDcEMsQ0FBQztJQUVELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3BELFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQy9ELGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZEO2dCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDbkM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7b0dBQ3dGO2dCQUNsRyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQVpRLGtCQUFrQjs7O3VCQWN4QixTQUFTLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPZlNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL29mLXNlbGVjdC9vZi1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSU9mU2VsZWN0T3B0aW9uRHRvLCBPZlNjaGVtYU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEZXN0cm95Unhqc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kZXN0cm95LXJ4anMuc2VydmljZSc7XHJcbmltcG9ydCB7IE9mU2VsZWN0QXBpTW9kZWwgfSBmcm9tICcuL29mLXNlbGVjdC1hcGktbW9kZWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcHBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwcC11dGlsaXR5LXNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1vZi1zZWxlY3QtYXBpJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8b2Ytc2VsZWN0ICN2Y1NlbGVjdCBbc2NoZW1hTW9kZWxdPVwic2NoZW1hTW9kZWxcIiBbZ3JvdXBdPVwiZ3JvdXBcIiBbZmllbGRdPVwiZmllbGRcIj48L29mLXNlbGVjdD5gLFxyXG4gIHByb3ZpZGVyczogW0Rlc3Ryb3lSeGpzU2VydmljZV0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE9mU2VsZWN0QXBpQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgndmNTZWxlY3QnKSB2Y1NlbGVjdDogT2ZTZWxlY3RDb21wb25lbnQ7XHJcbiAgc2NoZW1hTW9kZWw6IE9mU2NoZW1hTW9kZWw7XHJcbiAgZmllbGQ6IE9mU2VsZWN0QXBpTW9kZWw7XHJcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXN0cm95JDogRGVzdHJveVJ4anNTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzQ2FjaGVPcHRpb24oKSB7XHJcbiAgICByZXR1cm4gIUFwcFV0aWxpdHlTZXJ2aWNlLmlzTnVsbE9yRW1wdHkodGhpcy5maWVsZC5rZXlDYWNoZSk7XHJcbiAgfVxyXG5cclxuICBnZXQga2V5KCkge1xyXG4gICAgcmV0dXJuICdzZWxlY3RPcHRfJyArIHRoaXMuZmllbGQua2V5Q2FjaGU7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25zRnJvbUFwaSgpOiBPYnNlcnZhYmxlPElPZlNlbGVjdE9wdGlvbkR0b1tdPiB7XHJcbiAgICBpZiAodGhpcy5oYXNDYWNoZU9wdGlvbikge1xyXG4gICAgICBjb25zdCBjYWNoZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpO1xyXG4gICAgICBpZiAoY2FjaGUpIHtcclxuICAgICAgICByZXR1cm4gb2YoSlNPTi5wYXJzZShjYWNoZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC5mdW5jdGlvblNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5nZXRPcHRpb25zRnJvbUFwaSgpLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUob3B0ID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmhhc0NhY2hlT3B0aW9uICYmICFBcHBVdGlsaXR5U2VydmljZS5pc05vdEFueUl0ZW0ob3B0KSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShvcHQpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZmllbGQub3B0aW9ucyA9IG9wdDtcclxuICAgICAgICAgIGlmICh0aGlzLnZjU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmNTZWxlY3Quc2V0T3B0aW9uc1ZpZXcob3B0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==