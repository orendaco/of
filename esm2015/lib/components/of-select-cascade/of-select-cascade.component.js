import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { of } from 'rxjs';
import { AppUtilityService } from '../../services/app-utility-service';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
export class OfSelectCascadeComponent {
    constructor(destroy$) {
        this.destroy$ = destroy$;
    }
    getOptionsFromApi(cascade) {
        if (this.hasCacheOption) {
            const cache = sessionStorage.getItem(this.key(cascade));
            if (cache) {
                return of(JSON.parse(cache));
            }
        }
        return this.field.functionService(cascade);
    }
    get ctrl() {
        return this.group.get(this.field.dataField);
    }
    get hasCacheOption() {
        return !AppUtilityService.isNullOrEmpty(this.field.keyCache);
    }
    key(cascade) {
        return 'selectOpt_' + this.field.keyCache + cascade;
    }
    disableIfCascadeEmpty(cascade) {
        const ctrl = this.group.get(this.field.dataField);
        if (AppUtilityService.isNullOrEmpty(cascade)) {
            ctrl.disable({ onlySelf: true });
        }
        else {
            if (!this.field.disabled) {
                ctrl.enable({ onlySelf: true });
            }
        }
    }
    setOptionsForView(options) {
        if (this.vcSelect) {
            this.vcSelect.setOptionsView(options);
        }
        this.field.options = options;
    }
    checkCurrentValue(options) {
        if (AppUtilityService.isNotNull(this.ctrl.value)) {
            // tslint:disable-next-line:triple-equals
            const f = options.find(x => x.value == this.ctrl.value);
            if (AppUtilityService.isNullOrEmpty(f)) {
                this.ctrl.patchValue(null);
            }
        }
    }
    handlerCascadeChange() {
        var _a;
        const cascadeField = this.group.get((_a = this.field) === null || _a === void 0 ? void 0 : _a.cascadeField);
        if (cascadeField) {
            cascadeField.valueChanges
                .pipe(debounceTime(111), takeUntil(this.destroy$), distinctUntilChanged())
                .subscribe(cascade => {
                this.disableIfCascadeEmpty(cascade);
                const ctrl = this.group.get(this.field.dataField);
                if (AppUtilityService.isNullOrEmpty(cascade)) {
                    ctrl.patchValue(null);
                    this.setOptionsForView([]);
                }
                else {
                    this.getOptionsFromApi(cascade).pipe(takeUntil(this.destroy$))
                        .subscribe(opt => {
                        if (AppUtilityService.isNotAnyItem(opt)) {
                            ctrl.patchValue(null);
                            this.setOptionsForView([]);
                        }
                        else {
                            if (this.hasCacheOption) {
                                sessionStorage.setItem(this.key(cascade), JSON.stringify(opt));
                            }
                            this.setOptionsForView(opt);
                            this.checkCurrentValue(opt);
                        }
                    });
                }
            });
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.ctrl.disable({ onlySelf: true });
            this.handlerCascadeChange();
        }, 300);
    }
}
OfSelectCascadeComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-select-cascade',
                template: `
      <of-select #vcSelect [schemaModel]="schemaModel" [group]="group" [field]="field"></of-select>`,
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfSelectCascadeComponent.ctorParameters = () => [
    { type: DestroyRxjsService }
];
OfSelectCascadeComponent.propDecorators = {
    vcSelect: [{ type: ViewChild, args: ['vcSelect',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LWNhc2NhZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLXNlbGVjdC1jYXNjYWRlL29mLXNlbGVjdC1jYXNjYWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLekUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUy9FLE1BQU0sT0FBTyx3QkFBd0I7SUFNbkMsWUFBb0IsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFDaEQsQ0FBQztJQUVELGlCQUFpQixDQUFDLE9BQWU7UUFDL0IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLE1BQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hELElBQUksS0FBSyxFQUFFO2dCQUNULE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMs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RUFBRTs0QkFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO3lCQUM1Qjs2QkFBTTs0QkFDTCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0NBQ3ZCLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NkJBQ2hFOzRCQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDNUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUM3QjtvQkFDSCxDQUFDLENBQUMsQ0FBQztpQkFDTjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzlCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7OztZQXJHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFO29HQUN3RjtnQkFDbEcsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQy9CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFmUSxrQkFBa0I7Ozt1QkFpQnhCLFNBQVMsU0FBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZXN0cm95Unhqc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kZXN0cm95LXJ4anMuc2VydmljZSc7XG5pbXBvcnQgeyBPZlNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4uL29mLXNlbGVjdC9vZi1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IElPZlNlbGVjdE9wdGlvbkR0bywgT2ZTY2hlbWFNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPZlNlbGVjdENhc2NhZGVNb2RlbCB9IGZyb20gJy4vb2Ytc2VsZWN0LWNhc2NhZGUtbW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwcFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBwLXV0aWxpdHktc2VydmljZSc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29mLXNlbGVjdC1jYXNjYWRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxvZi1zZWxlY3QgI3ZjU2VsZWN0IFtzY2hlbWFNb2RlbF09XCJzY2hlbWFNb2RlbFwiIFtncm91cF09XCJncm91cFwiIFtmaWVsZF09XCJmaWVsZFwiPjwvb2Ytc2VsZWN0PmAsXG4gIHByb3ZpZGVyczogW0Rlc3Ryb3lSeGpzU2VydmljZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE9mU2VsZWN0Q2FzY2FkZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCd2Y1NlbGVjdCcpIHZjU2VsZWN0OiBPZlNlbGVjdENvbXBvbmVudDtcbiAgc2NoZW1hTW9kZWw6IE9mU2NoZW1hTW9kZWw7XG4gIGZpZWxkOiBPZlNlbGVjdENhc2NhZGVNb2RlbDtcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlc3Ryb3kkOiBEZXN0cm95Unhqc1NlcnZpY2UpIHtcbiAgfVxuXG4gIGdldE9wdGlvbnNGcm9tQXBpKGNhc2NhZGU6IHN0cmluZyk6IE9ic2VydmFibGU8SU9mU2VsZWN0T3B0aW9uRHRvW10+IHtcbiAgICBpZiAodGhpcy5oYXNDYWNoZU9wdGlvbikge1xuICAgICAgY29uc3QgY2FjaGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KGNhc2NhZGUpKTtcbiAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICByZXR1cm4gb2YoSlNPTi5wYXJzZShjYWNoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maWVsZC5mdW5jdGlvblNlcnZpY2UoY2FzY2FkZSk7XG4gIH1cblxuICBnZXQgY3RybCgpIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cC5nZXQodGhpcy5maWVsZC5kYXRhRmllbGQpO1xuICB9XG5cbiAgZ2V0IGhhc0NhY2hlT3B0aW9uKCkge1xuICAgIHJldHVybiAhQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eSh0aGlzLmZpZWxkLmtleUNhY2hlKTtcbiAgfVxuXG4gIGtleShjYXNjYWRlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gJ3NlbGVjdE9wdF8nICsgdGhpcy5maWVsZC5rZXlDYWNoZSArIGNhc2NhZGU7XG4gIH1cblxuICBkaXNhYmxlSWZDYXNjYWRlRW1wdHkoY2FzY2FkZTogc3RyaW5nKSB7XG4gICAgY29uc3QgY3RybCA9IHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKTtcbiAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eShjYXNjYWRlKSkge1xuICAgICAgY3RybC5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5maWVsZC5kaXNhYmxlZCkge1xuICAgICAgICBjdHJsLmVuYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldE9wdGlvbnNGb3JWaWV3KG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy52Y1NlbGVjdCkge1xuICAgICAgdGhpcy52Y1NlbGVjdC5zZXRPcHRpb25zVmlldyhvcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy5maWVsZC5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGNoZWNrQ3VycmVudFZhbHVlKG9wdGlvbnM6IElPZlNlbGVjdE9wdGlvbkR0b1tdKSB7XG4gICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTm90TnVsbCh0aGlzLmN0cmwudmFsdWUpKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgICAgY29uc3QgZiA9IG9wdGlvbnMuZmluZCh4ID0+IHgudmFsdWUgPT0gdGhpcy5jdHJsLnZhbHVlKTtcbiAgICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KGYpKSB7XG4gICAgICAgIHRoaXMuY3RybC5wYXRjaFZhbHVlKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXJDYXNjYWRlQ2hhbmdlKCkge1xuICAgIGNvbnN0IGNhc2NhZGVGaWVsZCA9IHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQ/LmNhc2NhZGVGaWVsZCk7XG4gICAgaWYgKGNhc2NhZGVGaWVsZCkge1xuICAgICAgY2FzY2FkZUZpZWxkLnZhbHVlQ2hhbmdlc1xuICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUoMTExKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgICAuc3Vic2NyaWJlKGNhc2NhZGUgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZUlmQ2FzY2FkZUVtcHR5KGNhc2NhZGUpO1xuICAgICAgICAgIGNvbnN0IGN0cmwgPSB0aGlzLmdyb3VwLmdldCh0aGlzLmZpZWxkLmRhdGFGaWVsZCk7XG4gICAgICAgICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTnVsbE9yRW1wdHkoY2FzY2FkZSkpIHtcbiAgICAgICAgICAgIGN0cmwucGF0Y2hWYWx1ZShudWxsKTtcbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uc0ZvclZpZXcoW10pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldE9wdGlvbnNGcm9tQXBpKGNhc2NhZGUpLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKG9wdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTm90QW55SXRlbShvcHQpKSB7XG4gICAgICAgICAgICAgICAgICBjdHJsLnBhdGNoVmFsdWUobnVsbCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbnNGb3JWaWV3KFtdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2FjaGVPcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleShjYXNjYWRlKSwgSlNPTi5zdHJpbmdpZnkob3B0KSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldE9wdGlvbnNGb3JWaWV3KG9wdCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ3VycmVudFZhbHVlKG9wdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY3RybC5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUgfSk7XG4gICAgICB0aGlzLmhhbmRsZXJDYXNjYWRlQ2hhbmdlKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuXG59XG4iXX0=