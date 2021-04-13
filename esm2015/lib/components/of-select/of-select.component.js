import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { AppUtilityService } from '../../services/app-utility-service';
import * as _ from 'lodash';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { debounceTime, takeUntil } from 'rxjs/operators';
export class OfSelectComponent {
    constructor(cdr, destroy$) {
        this.cdr = cdr;
        this.destroy$ = destroy$;
        this.options = [];
    }
    ngOnInit() {
        this.setOptionsView(this.field.options);
    }
    trackBySelect(index, item) {
        return item.value;
    }
    search(value) {
        if (AppUtilityService.isWhitespace(value)) {
            this.setOptionsView(this.field.options);
            return;
        }
        const searchTxt = AppUtilityService.getFullTextSearch(value);
        const options = _.filter(this.field.options, (s) => {
            const ftsVietTat = AppUtilityService.searchVietTat(s.displayText);
            const checkVietTat = ftsVietTat.indexOf(searchTxt) > -1;
            if (AppUtilityService.isNullOrEmpty(s.fts)) {
                s.fts = AppUtilityService.getFullTextSearch(s.displayText);
            }
            return s.fts.indexOf(searchTxt) > -1 || checkVietTat;
        });
        this.setOptionsView(options);
    }
    setOptionsView(options) {
        _.forEach(options, opt => {
            opt.fts = AppUtilityService.getFullTextSearch(opt.displayText);
        });
        this.options = options;
        this.getItemSelected();
        this.cdr.detectChanges();
    }
    selectAll() {
        const values = _.map(this.field.options, opt => {
            return opt.value;
        });
        this.group.get(this.field.dataField).patchValue(values);
        this.cdr.detectChanges();
    }
    unSelectAll() {
        this.group.get(this.field.dataField).patchValue(null);
        this.cdr.detectChanges();
    }
    handlerValueDataFieldChange() {
        var _a;
        const f = this.group.get(this.field.dataField);
        if (f) {
            (_a = this.group.get(this.field.dataField)) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe(debounceTime(111)).pipe(takeUntil(this.destroy$)).subscribe(v => {
                if (typeof v === 'number') {
                    f.patchValue('' + v);
                }
                this.getItemSelected();
            });
        }
    }
    getItemSelected() {
        const v = this.group.get(this.field.dataField).value;
        if (AppUtilityService.isNullOrEmpty(v)) {
            this.field.itemSelected = null;
            this.cdr.detectChanges();
            return;
        }
        // tslint:disable-next-line:triple-equals
        this.field.itemSelected = _.find(this.options, x => x.value == v);
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.schemaModel.subRender(this.cdr, this.destroy$);
        this.handlerValueDataFieldChange();
    }
}
OfSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-select',
                template: "<form [formGroup]=\"group\">\n  <nz-select [formControlName]=\"field.dataField\" style=\"width: 100%\"\n             [nzCustomTemplate]=\"tplSelectedView\"\n             [nzPlaceHolder]=\"field.placeholder\"\n             [nzMode]=\"field.nzMode\" [nzAllowClear]=\"field.nzAllowClear\"\n             nzShowSearch nzServerSearch (nzOnSearch)=\"search($event)\"\n             [nzMaxMultipleCount]=\"field?.nzMaxMultipleCount\" [nzMaxTagCount]=\"field?.nzMaxTagCount\"\n             [nzDropdownRender]=\"nzDropdownRenderTpl\">\n    <nz-option [nzCustomContent]=\"true\" *ngFor=\"let option of options;trackBy:trackBySelect\"\n               [nzLabel]=\"option.displayText\"\n               [nzValue]=\"option.value\"\n    >\n      <span [innerHTML]=\"option.displayText | ofSelectRenderOption: field: option\">\n      </span>\n    </nz-option>\n  </nz-select>\n</form>\n<ng-template #tplSelectedView let-selected>\n  <span [innerHTML]=\"selected.nzValue | ofOptionSelected:selected.nzLabel:field\"></span>\n</ng-template>\n\n<ng-template #nzDropdownRenderTpl>\n  <div *ngIf=\"field.nzMode === 'multiple' && field.options?.length > 3\">\n    <nz-divider></nz-divider>\n    <div class=\"margin-top-10 margin-left-10 margin-bottom-5\">\n      <button nz-button nzType=\"primary\" (click)=\"selectAll()\" nzSize=\"small\"><i nz-icon nzType=\"plus\"></i> Ch\u1ECDn t\u1EA5t c\u1EA3\n      </button>\n      <button nz-button nzType=\"default\" (click)=\"unSelectAll()\" nzSize=\"small\"><i nz-icon nzType=\"minus\"></i> B\u1ECF ch\u1ECDn\n      </button>\n    </div>\n  </div>\n</ng-template>\n",
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: DestroyRxjsService }
];
OfSelectComponent.propDecorators = {
    schemaModel: [{ type: Input }],
    field: [{ type: Input }],
    group: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1zZWxlY3Qvb2Ytc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJcEgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVF6RCxNQUFNLE9BQU8saUJBQWlCO0lBTTVCLFlBQW9CLEdBQXNCLEVBQ3RCLFFBQTRCO1FBRDVCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBSGhELFlBQU8sR0FBeUIsRUFBRSxDQUFDO0lBSW5DLENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYSxFQUFFLElBQXdCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLE9BQU87U0FDUjtRQUNELE1BQU0sU0FBUyxHQUFHLGlC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SSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckQsSUFBSSxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekIsT0FBTztTQUNSO1FBQ0QseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7OztZQTlGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDZqREFBeUM7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUMvQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBZGdELGlCQUFpQjtZQU16RCxrQkFBa0I7OzswQkFVeEIsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSU9mU2VsZWN0T3B0aW9uRHRvLCBPZlNjaGVtYU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IE9mU2VsZWN0TW9kZWwgfSBmcm9tICcuL29mLXNlbGVjdC1tb2RlbCc7XG5pbXBvcnQgeyBBcHBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwcC11dGlsaXR5LXNlcnZpY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgRGVzdHJveVJ4anNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVzdHJveS1yeGpzLnNlcnZpY2UnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29mLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vZi1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtEZXN0cm95Unhqc1NlcnZpY2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBPZlNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHNjaGVtYU1vZGVsOiBPZlNjaGVtYU1vZGVsO1xuICBASW5wdXQoKSBmaWVsZDogT2ZTZWxlY3RNb2RlbDtcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgb3B0aW9uczogSU9mU2VsZWN0T3B0aW9uRHRvW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGVzdHJveSQ6IERlc3Ryb3lSeGpzU2VydmljZSkge1xuICB9XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldE9wdGlvbnNWaWV3KHRoaXMuZmllbGQub3B0aW9ucyk7XG4gIH1cblxuICB0cmFja0J5U2VsZWN0KGluZGV4OiBudW1iZXIsIGl0ZW06IElPZlNlbGVjdE9wdGlvbkR0bykge1xuICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICB9XG5cbiAgc2VhcmNoKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNXaGl0ZXNwYWNlKHZhbHVlKSkge1xuICAgICAgdGhpcy5zZXRPcHRpb25zVmlldyh0aGlzLmZpZWxkLm9wdGlvbnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWFyY2hUeHQgPSBBcHBVdGlsaXR5U2VydmljZS5nZXRGdWxsVGV4dFNlYXJjaCh2YWx1ZSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IF8uZmlsdGVyKHRoaXMuZmllbGQub3B0aW9ucywgKHMpID0+IHtcbiAgICAgIGNvbnN0IGZ0c1ZpZXRUYXQgPSBBcHBVdGlsaXR5U2VydmljZS5zZWFyY2hWaWV0VGF0KHMuZGlzcGxheVRleHQpO1xuICAgICAgY29uc3QgY2hlY2tWaWV0VGF0ID0gZnRzVmlldFRhdC5pbmRleE9mKHNlYXJjaFR4dCkgPiAtMTtcbiAgICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KHMuZnRzKSkge1xuICAgICAgICBzLmZ0cyA9IEFwcFV0aWxpdHlTZXJ2aWNlLmdldEZ1bGxUZXh0U2VhcmNoKHMuZGlzcGxheVRleHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHMuZnRzLmluZGV4T2Yoc2VhcmNoVHh0KSA+IC0xIHx8IGNoZWNrVmlldFRhdDtcbiAgICB9KTtcbiAgICB0aGlzLnNldE9wdGlvbnNWaWV3KG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0T3B0aW9uc1ZpZXcob3B0aW9ucykge1xuICAgIF8uZm9yRWFjaChvcHRpb25zLCBvcHQgPT4ge1xuICAgICAgb3B0LmZ0cyA9IEFwcFV0aWxpdHlTZXJ2aWNlLmdldEZ1bGxUZXh0U2VhcmNoKG9wdC5kaXNwbGF5VGV4dCk7XG4gICAgfSk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmdldEl0ZW1TZWxlY3RlZCgpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNlbGVjdEFsbCgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBfLm1hcCh0aGlzLmZpZWxkLm9wdGlvbnMsIG9wdCA9PiB7XG4gICAgICByZXR1cm4gb3B0LnZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKS5wYXRjaFZhbHVlKHZhbHVlcyk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgdW5TZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5ncm91cC5nZXQodGhpcy5maWVsZC5kYXRhRmllbGQpLnBhdGNoVmFsdWUobnVsbCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVyVmFsdWVEYXRhRmllbGRDaGFuZ2UoKSB7XG4gICAgY29uc3QgZiA9IHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKTtcbiAgICBpZiAoZikge1xuICAgICAgdGhpcy5ncm91cC5nZXQodGhpcy5maWVsZC5kYXRhRmllbGQpPy52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDExMSkpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSh2ID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBmLnBhdGNoVmFsdWUoJycgKyB2KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5nZXRJdGVtU2VsZWN0ZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRJdGVtU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgdiA9IHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKS52YWx1ZTtcbiAgICBpZiAoQXBwVXRpbGl0eVNlcnZpY2UuaXNOdWxsT3JFbXB0eSh2KSkge1xuICAgICAgdGhpcy5maWVsZC5pdGVtU2VsZWN0ZWQgPSBudWxsO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICAgIHRoaXMuZmllbGQuaXRlbVNlbGVjdGVkID0gXy5maW5kKHRoaXMub3B0aW9ucywgeCA9PiB4LnZhbHVlID09IHYpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNjaGVtYU1vZGVsLnN1YlJlbmRlcih0aGlzLmNkciwgdGhpcy5kZXN0cm95JCk7XG4gICAgdGhpcy5oYW5kbGVyVmFsdWVEYXRhRmllbGRDaGFuZ2UoKTtcbiAgfVxufVxuIl19