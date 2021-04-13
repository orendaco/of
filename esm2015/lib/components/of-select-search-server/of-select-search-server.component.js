import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, filter, finalize, takeUntil, tap } from 'rxjs/operators';
import { AppUtilityService } from '../../services/app-utility-service';
export class OfSelectSearchServerComponent {
    constructor(destroy$, cdr) {
        this.destroy$ = destroy$;
        this.cdr = cdr;
        this.options = [];
        this.option$ = new BehaviorSubject([]);
        this.backUpItems = [];
        this.optionDebound$ = this.option$.pipe(debounceTime(222)).pipe(tap(() => {
            this.triggerDetectChanges();
        }));
        this.txtSearch = '';
        this.txtSearch$ = new Subject();
        this.skipCount = 0;
        this.totalItems = 0;
        this.nzPageIndex = 1;
        this.firstOptions = [];
        this.firstTotal = 0;
        this.isLoading = false;
        this.maxResultCount = 12;
    }
    ngOnInit() {
        this.handlerSearch();
    }
    handlerSearch() {
        this.txtSearch$.pipe(takeUntil(this.destroy$))
            .pipe(debounceTime(1000))
            .subscribe(txt => {
            this.txtSearch = txt;
            if (AppUtilityService.isNullOrEmpty(txt)) {
                this.loadFirstOption();
            }
            else {
                this.skipCount = 0;
                this.nzPageIndex = 1;
                this.getOptionsFromBE(txt);
            }
        });
    }
    search(txt) {
        this.txtSearch$.next(txt);
    }
    nzOpenChange(open) {
        if (open) {
            this.loadFirstOption();
        }
    }
    trackBySelect(index, item) {
        return item.value;
    }
    loadFirstOption() {
        var _a;
        if (this.firstTotal > 0) {
            this.totalItems = this.firstTotal;
            this.nzPageIndex = 1;
            let opt = this.firstOptions;
            if ((_a = this.field) === null || _a === void 0 ? void 0 : _a.itemSelected) {
                // tslint:disable-next-line:triple-equals
                const f = opt.find(s => s.value == this.field.itemSelected.value);
                if (AppUtilityService.isNullOrEmpty(f)) {
                    opt = [this.field.itemSelected, ...this.firstOptions];
                }
            }
            this.setOptions(opt);
        }
        else {
            this.getOptionsFromBE('', null, true);
        }
    }
    // tslint:disable-next-line:no-shadowed-variable
    getOptionsFromBE(filter, value, isFirst = false) {
        const getOneId = AppUtilityService.isNotNull(value);
        if (getOneId) {
            filter = '';
            // tslint:disable-next-line:triple-equals
            const f = _.find(this.backUpItems, s => s.value == value);
            if (f) {
                this.setOptions([f]);
                return;
            }
        }
        this.isLoading = true;
        let skipCount = this.skipCount;
        const maxResultCount = (!this.field.showPagination && isFirst) ? 50 : this.maxResultCount;
        if (this.field.showPagination) {
            skipCount = (this.nzPageIndex - 1) * this.maxResultCount;
        }
        const reqBody = {
            filter,
            value,
            maxResultCount,
            skipCount
        };
        this.field.functionService(reqBody)
            .pipe(finalize(() => {
            this.isLoading = false;
        }))
            .subscribe(d => {
            let options = (d === null || d === void 0 ? void 0 : d.items) || [];
            this.backUpItems = [...this.backUpItems, ...options];
            if (isFirst) {
                this.firstOptions = options;
                this.firstTotal = d.totalCount;
            }
            if (getOneId) {
                this.field.itemSelected = (d === null || d === void 0 ? void 0 : d.items[0]) || null;
            }
            if (AppUtilityService.isNullOrEmpty(value)) {
                this.totalItems = (d === null || d === void 0 ? void 0 : d.totalCount) || 0;
            }
            if (skipCount > 0 && !this.field.showPagination) {
                options = [...this.options, ...options];
            }
            this.setOptions(options);
            this.skipCount = reqBody.skipCount + reqBody.maxResultCount;
        });
    }
    setOptions(options) {
        this.options = options;
        this.option$.next(options);
        this.triggerDetectChanges();
    }
    getItemSelected() {
        const value$ = this.group.get(this.field.dataField).valueChanges.pipe(takeUntil(this.destroy$))
            .pipe(tap((v) => {
            if (AppUtilityService.isNullOrEmpty(v)) {
                this.field.itemSelected = null;
            }
            this.triggerDetectChanges();
        })).pipe(filter(s => !AppUtilityService.isNullOrEmpty(s)));
        value$.subscribe(value => {
            var _a;
            // tslint:disable-next-line:triple-equals
            const f = (_a = this.backUpItems) === null || _a === void 0 ? void 0 : _a.find(s => s.value == value);
            if (AppUtilityService.isNotNull(f)) {
                this.field.itemSelected = f;
                this.setOptions([f]);
                return;
            }
            else {
                this.getOptionsFromBE(null, value);
            }
            this.triggerDetectChanges();
        });
    }
    get f() {
        return this.group.get(this.field.dataField);
    }
    ngAfterViewInit() {
        this.getItemSelected();
        this.triggerDetectChanges();
        this.schemaModel.subRender(this.cdr, this.destroy$);
    }
    triggerDetectChanges() {
        setTimeout(() => {
            this.cdr.detectChanges();
        }, 200);
    }
    loadMore() {
        if (this.field.showPagination) {
            return;
        }
        this.isLoading = true;
        if (this.skipCount > this.totalItems) {
            this.isLoading = false;
            return;
        }
        this.getOptionsFromBE(this.txtSearch, null);
    }
    nzPageIndexChange() {
        this.getOptionsFromBE(this.txtSearch);
    }
}
OfSelectSearchServerComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-select-search-server',
                template: "<form [formGroup]=\"group\">\r\n  <nz-select [formControlName]=\"field.dataField\" style=\" width: 100%;\"\r\n             (nzOpenChange)=\"nzOpenChange($event)\"\r\n             (nzScrollToBottom)=\"loadMore()\"\r\n             [nzCustomTemplate]=\"tplSelectedView\"\r\n             [nzOptionHeightPx]=\"26\"\r\n             [nzPlaceHolder]=\"field.placeholder\"\r\n             [nzMode]=\"field.nzMode\" [nzAllowClear]=\"field.nzAllowClear\"\r\n             nzShowSearch nzServerSearch (nzOnSearch)=\"search($event)\"\r\n             [nzMaxMultipleCount]=\"field?.nzMaxMultipleCount\" [nzMaxTagCount]=\"field?.nzMaxTagCount\"\r\n             [nzDropdownRender]=\"renderTemplate\">\r\n    <nz-option [nzCustomContent]=\"true\" *ngFor=\"let option of optionDebound$ | async;trackBy:trackBySelect\"\r\n               [nzLabel]=\"option.displayText\"\r\n               [nzValue]=\"option.value\"\r\n    >\r\n      <span [innerHTML]=\"option.displayText | ofSelectRenderOption: field: option\">\r\n      </span>\r\n    </nz-option>\r\n  </nz-select>\r\n</form>\r\n<ng-template #tplSelectedView let-selected>\r\n  <span [innerHTML]=\"selected.nzValue | ofOptionSelected:selected.nzLabel:field\"></span>\r\n</ng-template>\r\n<ng-template #renderTemplate>\r\n\r\n  <div class=\"select-pagination\" *ngIf=\"field.showPagination\">\r\n    <nz-pagination nzSize=\"small\" [nzPageSize]=\"maxResultCount\" [(nzPageIndex)]=\"nzPageIndex\"\r\n                   (nzPageIndexChange)=\"nzPageIndexChange()\"\r\n                   [nzTotal]=\"totalItems\"></nz-pagination>\r\n  </div>\r\n  <nz-spin *ngIf=\"isLoading\"></nz-spin>\r\n</ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [DestroyRxjsService],
                encapsulation: ViewEncapsulation.None,
                styles: [":host ::ng-deep .cdk-virtual-scroll-viewport{min-height:120px!important}.select-pagination{margin-top:8px;margin-bottom:3px}"]
            },] }
];
OfSelectSearchServerComponent.ctorParameters = () => [
    { type: DestroyRxjsService },
    { type: ChangeDetectorRef }
];
OfSelectSearchServerComponent.propDecorators = {
    schemaModel: [{ type: Input }],
    field: [{ type: Input }],
    group: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LXNlYXJjaC1zZXJ2ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQUUsS0FBSyxFQUVoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQVV2RSxNQUFNLE9BQU8sNkJBQTZCO0lBb0J4QyxZQUFvQixRQUE0QixFQUM1QixHQUFzQjtRQUR0QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWpCMUMsWUFBTyxHQUF5QixFQUFFLENBQUM7UUFDbkMsWUFBTyxHQUFHLElBQUksZUFBZSxDQUF1QixFQUFFLENBQUMsQ0FBQztRQUN4RCxnQkFBVyxHQUF5QixFQUFFLENBQUM7UUFDdkMsbUJBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNsRSxJQUFJ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d0JoQixLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IERlc3Ryb3lSeGpzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Rlc3Ryb3ktcnhqcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSU9mU2VsZWN0T3B0aW9uRHRvLCBPZlNjaGVtYU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgSVNlbGVjdFNlYXJjaFNlcnZlckR0bywgT2ZTZWxlY3RTZWFyY2hTZXJ2ZXJNb2RlbCB9IGZyb20gJy4vb2Ytc2VsZWN0LXNlYXJjaC1zZXJ2ZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIGZpbmFsaXplLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQXBwVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcHAtdXRpbGl0eS1zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb2Ytc2VsZWN0LXNlYXJjaC1zZXJ2ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vZi1zZWxlY3Qtc2VhcmNoLXNlcnZlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbRGVzdHJveVJ4anNTZXJ2aWNlXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlVXJsczogWycuL29mLXNlbGVjdC1zZWFyY2gtc2VydmVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE9mU2VsZWN0U2VhcmNoU2VydmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBzY2hlbWFNb2RlbDogT2ZTY2hlbWFNb2RlbDtcclxuICBASW5wdXQoKSBmaWVsZDogT2ZTZWxlY3RTZWFyY2hTZXJ2ZXJNb2RlbDtcclxuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG4gIG9wdGlvbnM6IElPZlNlbGVjdE9wdGlvbkR0b1tdID0gW107XHJcbiAgb3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SU9mU2VsZWN0T3B0aW9uRHRvW10+KFtdKTtcclxuICBiYWNrVXBJdGVtczogSU9mU2VsZWN0T3B0aW9uRHRvW10gPSBbXTtcclxuICBvcHRpb25EZWJvdW5kJCA9IHRoaXMub3B0aW9uJC5waXBlKGRlYm91bmNlVGltZSgyMjIpKS5waXBlKHRhcCgoKSA9PiB7XHJcbiAgICB0aGlzLnRyaWdnZXJEZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfSkpO1xyXG4gIHR4dFNlYXJjaCA9ICcnO1xyXG4gIHR4dFNlYXJjaCQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgc2tpcENvdW50ID0gMDtcclxuICB0b3RhbEl0ZW1zID0gMDtcclxuICBuelBhZ2VJbmRleCA9IDE7XHJcbiAgZmlyc3RPcHRpb25zOiBJT2ZTZWxlY3RPcHRpb25EdG9bXSA9IFtdO1xyXG4gIGZpcnN0VG90YWwgPSAwO1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIG1heFJlc3VsdENvdW50ID0gMTI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVzdHJveSQ6IERlc3Ryb3lSeGpzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZXJTZWFyY2goKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZXJTZWFyY2goKSB7XHJcbiAgICB0aGlzLnR4dFNlYXJjaCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgxMDAwKSlcclxuICAgICAgLnN1YnNjcmliZSh0eHQgPT4ge1xyXG4gICAgICAgIHRoaXMudHh0U2VhcmNoID0gdHh0O1xyXG4gICAgICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KHR4dCkpIHtcclxuICAgICAgICAgIHRoaXMubG9hZEZpcnN0T3B0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2tpcENvdW50ID0gMDtcclxuICAgICAgICAgIHRoaXMubnpQYWdlSW5kZXggPSAxO1xyXG4gICAgICAgICAgdGhpcy5nZXRPcHRpb25zRnJvbUJFKHR4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlYXJjaCh0eHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy50eHRTZWFyY2gkLm5leHQodHh0KTtcclxuICB9XHJcblxyXG4gIG56T3BlbkNoYW5nZShvcGVuOiBib29sZWFuKSB7XHJcbiAgICBpZiAob3Blbikge1xyXG4gICAgICB0aGlzLmxvYWRGaXJzdE9wdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tCeVNlbGVjdChpbmRleDogbnVtYmVyLCBpdGVtOiBJT2ZTZWxlY3RPcHRpb25EdG8pIHtcclxuICAgIHJldHVybiBpdGVtLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbG9hZEZpcnN0T3B0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuZmlyc3RUb3RhbCA+IDApIHtcclxuICAgICAgdGhpcy50b3RhbEl0ZW1zID0gdGhpcy5maXJzdFRvdGFsO1xyXG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gMTtcclxuICAgICAgbGV0IG9wdCA9IHRoaXMuZmlyc3RPcHRpb25zO1xyXG4gICAgICBpZiAodGhpcy5maWVsZD8uaXRlbVNlbGVjdGVkKSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICAgICAgICBjb25zdCBmID0gb3B0LmZpbmQocyA9PiBzLnZhbHVlID09IHRoaXMuZmllbGQuaXRlbVNlbGVjdGVkLnZhbHVlKTtcclxuICAgICAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eShmKSkge1xyXG4gICAgICAgICAgb3B0ID0gW3RoaXMuZmllbGQuaXRlbVNlbGVjdGVkLCAuLi50aGlzLmZpcnN0T3B0aW9uc107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXRPcHRpb25zRnJvbUJFKCcnLCBudWxsLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gIGdldE9wdGlvbnNGcm9tQkUoZmlsdGVyPzogc3RyaW5nLCB2YWx1ZT86IHN0cmluZyB8IG51bGwsIGlzRmlyc3QgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgZ2V0T25lSWQgPSBBcHBVdGlsaXR5U2VydmljZS5pc05vdE51bGwodmFsdWUpO1xyXG4gICAgaWYgKGdldE9uZUlkKSB7XHJcbiAgICAgIGZpbHRlciA9ICcnO1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgICBjb25zdCBmID0gXy5maW5kKHRoaXMuYmFja1VwSXRlbXMsIHMgPT4gcy52YWx1ZSA9PSB2YWx1ZSk7XHJcbiAgICAgIGlmIChmKSB7XHJcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKFtmXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBsZXQgc2tpcENvdW50ID0gdGhpcy5za2lwQ291bnQ7XHJcbiAgICBjb25zdCBtYXhSZXN1bHRDb3VudCA9ICghdGhpcy5maWVsZC5zaG93UGFnaW5hdGlvbiAmJiBpc0ZpcnN0KSA/IDUwIDogdGhpcy5tYXhSZXN1bHRDb3VudDtcclxuICAgIGlmICh0aGlzLmZpZWxkLnNob3dQYWdpbmF0aW9uKSB7XHJcbiAgICAgIHNraXBDb3VudCA9ICh0aGlzLm56UGFnZUluZGV4IC0gMSkgKiB0aGlzLm1heFJlc3VsdENvdW50O1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVxQm9keTogSVNlbGVjdFNlYXJjaFNlcnZlckR0byA9IHtcclxuICAgICAgZmlsdGVyLFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgbWF4UmVzdWx0Q291bnQsXHJcbiAgICAgIHNraXBDb3VudFxyXG4gICAgfTtcclxuICAgIHRoaXMuZmllbGQuZnVuY3Rpb25TZXJ2aWNlKHJlcUJvZHkpXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KSlcclxuICAgICAgLnN1YnNjcmliZShkID0+IHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGQ/Lml0ZW1zIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuYmFja1VwSXRlbXMgPSBbLi4udGhpcy5iYWNrVXBJdGVtcywgLi4ub3B0aW9uc107XHJcbiAgICAgICAgaWYgKGlzRmlyc3QpIHtcclxuICAgICAgICAgIHRoaXMuZmlyc3RPcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICAgIHRoaXMuZmlyc3RUb3RhbCA9IGQudG90YWxDb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdldE9uZUlkKSB7XHJcbiAgICAgICAgICB0aGlzLmZpZWxkLml0ZW1TZWxlY3RlZCA9IGQ/Lml0ZW1zWzBdIHx8IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KHZhbHVlKSkge1xyXG4gICAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gZD8udG90YWxDb3VudCB8fCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2tpcENvdW50ID4gMCAmJiAhdGhpcy5maWVsZC5zaG93UGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgb3B0aW9ucyA9IFsuLi50aGlzLm9wdGlvbnMsIC4uLm9wdGlvbnNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5za2lwQ291bnQgPSByZXFCb2R5LnNraXBDb3VudCArIHJlcUJvZHkubWF4UmVzdWx0Q291bnQ7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5vcHRpb24kLm5leHQob3B0aW9ucyk7XHJcbiAgICB0aGlzLnRyaWdnZXJEZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtU2VsZWN0ZWQoKSB7XHJcbiAgICBjb25zdCB2YWx1ZSQgPSB0aGlzLmdyb3VwLmdldCh0aGlzLmZpZWxkLmRhdGFGaWVsZCkudmFsdWVDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAucGlwZSh0YXAoKHYpID0+IHtcclxuICAgICAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eSh2KSkge1xyXG4gICAgICAgICAgdGhpcy5maWVsZC5pdGVtU2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyaWdnZXJEZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pKS5waXBlKGZpbHRlcihzID0+ICFBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KHMpKSk7XHJcbiAgICB2YWx1ZSQuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICAgICAgY29uc3QgZiA9IHRoaXMuYmFja1VwSXRlbXM/LmZpbmQocyA9PiBzLnZhbHVlID09IHZhbHVlKTtcclxuICAgICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTm90TnVsbChmKSkge1xyXG4gICAgICAgIHRoaXMuZmllbGQuaXRlbVNlbGVjdGVkID0gZjtcclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMoW2ZdKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nZXRPcHRpb25zRnJvbUJFKG51bGwsIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRyaWdnZXJEZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBmKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0SXRlbVNlbGVjdGVkKCk7XHJcbiAgICB0aGlzLnRyaWdnZXJEZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLnNjaGVtYU1vZGVsLnN1YlJlbmRlcih0aGlzLmNkciwgdGhpcy5kZXN0cm95JCk7XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyRGV0ZWN0Q2hhbmdlcygpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9LCAyMDApO1xyXG4gIH1cclxuXHJcbiAgbG9hZE1vcmUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5zaG93UGFnaW5hdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5za2lwQ291bnQgPiB0aGlzLnRvdGFsSXRlbXMpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRPcHRpb25zRnJvbUJFKHRoaXMudHh0U2VhcmNoLCBudWxsKTtcclxuICB9XHJcblxyXG4gIG56UGFnZUluZGV4Q2hhbmdlKCkge1xyXG4gICAgdGhpcy5nZXRPcHRpb25zRnJvbUJFKHRoaXMudHh0U2VhcmNoKTtcclxuICB9XHJcbn1cclxuIl19