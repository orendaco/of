import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { OfCreateControlFormService } from '../../services/of-create-control-form-service';
import { OfValidatorService } from '../../services/of-validator.service';
import { distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
export class OfDynamicComponent {
    constructor(fb, createCtrlService, validatorService, destroy$) {
        this.fb = fb;
        this.createCtrlService = createCtrlService;
        this.validatorService = validatorService;
        this.destroy$ = destroy$;
        this.submitValueEvent = new EventEmitter();
        this.searchEvent = new EventEmitter();
        this.fields = [];
        this.ofFieldTempates = [];
    }
    get value() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.getRawValue();
    }
    ngOnInit() {
        this.fields = this.schemaModel.fields || [];
        this.form = this.createCtrlService.createControl(this.fields);
        this.schemaModel.form = this.form;
        this.init$();
    }
    reBuilderForm() {
        this.fields = this.schemaModel.fields || [];
        this.createCtrlService.updateControl(this.fields, this.form);
        this.schemaModel.form = this.form;
    }
    init$() {
        this.schemaModel.rebuilder$.pipe(takeUntil(this.destroy$), distinctUntilChanged(), filter(x => x > 0))
            .subscribe(() => {
            this.reBuilderForm();
        });
    }
    trackByField(index, field) {
        return field.dataField;
    }
    onSubmit(isCheckValid = true) {
        this.schemaModel.submitted = true;
        if (!isCheckValid) {
            this.submitValueEvent.emit(this.value);
            return this.value;
        }
        _.forEach(this.fields, (field) => {
            const f = this.form.controls[field.dataField];
            if (f) {
                if (field.hidden) {
                    f.setValidators(null);
                }
                else {
                    f.setValidators(this.createCtrlService.bindValidations(field));
                }
            }
        });
        if (this.form.valid) {
            this.submitValueEvent.emit(this.value);
            return this.value;
        }
        else {
            setTimeout(() => {
                this.validatorService.focusControlItem(this.schemaModel.id);
            }, 500);
            return null;
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.validatorService.focusFirst(this.schemaModel.id);
        }, 500);
    }
    onClickSearchBtn() {
        this.schemaModel.searchBtnBusy = true;
        this.searchEvent.emit(this.value);
        this.schemaModel.searchEvent$.next(this.value);
    }
    disableAll(f = true) {
        this.schemaModel.disableAll(f);
    }
    disableField(name, f = true) {
        this.schemaModel.disableField(name, f);
    }
    addOfFieldTempates(d) {
        this.ofFieldTempates.push(d);
    }
}
OfDynamicComponent.decorators = [
    { type: Component, args: [{
                selector: 'of',
                template: "<form class=\"dynamic-form\" [formGroup]=\"form\">\r\n  <div nz-row [nzGutter]=\"[18, 6]\" [id]=\"schemaModel.id\">\r\n    <ng-content select=\"[topContent]\"></ng-content>\r\n    <ng-container *ngFor=\"let field of fields;trackBy:trackByField\">\r\n      <div nz-col *ngIf=\"!field.hidden\" [nzSpan]=\"field.width\" [ngClass]=\"field.css\">\r\n        <nz-form-label [nzRequired]=\"field.required\" [hidden]=\"field.hiddenLabel\">\r\n          <span [innerHTML]=\"field.label\"></span>\r\n        </nz-form-label>\r\n        <div ofDynamicField [schemaModel]=\"schemaModel\" [field]=\"field\" [group]=\"form\"\r\n             [ofFieldTempates]=\"ofFieldTempates\" (searchEvent)=\"searchEvent.emit($event)\">\r\n        </div>\r\n        <of-valid-error [controlName]=\"field.dataField\"\r\n                        [validations]=\"field?.validations\"\r\n                        [form]=\"form\"\r\n                        [submitted]=\"schemaModel.submitted\"\r\n        ></of-valid-error>\r\n        <!--        <span class=\"form-control-err text-danger\">-->\r\n        <!--              {{this.form.controls[field.dataField]?.errors | showValidationError : field?.validations : schemaModel.submitted}}-->\r\n        <!--        </span>-->\r\n        <div [innerHTML]=\"field.bottomHtml\"></div>\r\n      </div>\r\n    </ng-container>\r\n    <div *ngIf=\"schemaModel.isSearchBox\" nz-col class=\"gutter-row of-btn-search ord-form-control\" [nzSpan]=\"2\">\r\n      <button nz-button nzType=\"primary\"\r\n              [nzLoading]=\"schemaModel.searchBtnBusy\"\r\n              (click)=\"onClickSearchBtn()\">T\u00ECm ki\u1EBFm\r\n      </button>\r\n    </div>\r\n    <ng-content select=\"[bottomContent]\"></ng-content>\r\n  </div>\r\n</form>\r\n",
                encapsulation: ViewEncapsulation.None,
                providers: [DestroyRxjsService],
                styles: [".of-btn-search{max-width:109px}.of-btn-search button{margin-top:25px!important}.ant-form-item-label{padding:0!important;height:25px!important}.ant-form-item-label>label:after{content:\"\"!important}"]
            },] }
];
OfDynamicComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: OfCreateControlFormService },
    { type: OfValidatorService },
    { type: DestroyRxjsService }
];
OfDynamicComponent.propDecorators = {
    schemaModel: [{ type: Input }],
    submitValueEvent: [{ type: Output }],
    searchEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtZHluYW1pYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2NvbXBvbmVudHMvb2YtZHluYW1pYy9vZi1keW5hbWljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqSCxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHekUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVN6RSxNQUFNLE9BQU8sa0JBQWtCO0lBWTdCLFlBQW9CLEVBQWUsRUFDZixpQkFBNkMsRUFDN0MsZ0JBQW9DLEVBQ3BDLFFBQTRCO1FBSDVCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQzdDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFDcEMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFidEMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFaEQsV0FBTSxHQUFxQixFQUFFLENBQUM7UUFDOUIsb0JBQWUsR0FBdUIsRUFBRSxDQUFDO0lBVXpDLENBQUM7SUFSRCxJQUFJLEtBQUs7O1FBQ1As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QUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFHRCxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUk7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZLEVBQUUsQ0FBQyxHQUFHLElBQUk7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxDQUFtQjtRQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUF0R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxJQUFJO2dCQUNkLGt1REFBMEM7Z0JBRTFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzs7YUFDaEM7OztZQWZRLFdBQVc7WUFLWCwwQkFBMEI7WUFDMUIsa0JBQWtCO1lBSmxCLGtCQUFrQjs7OzBCQWV4QixLQUFLOytCQUNMLE1BQU07MEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IERlc3Ryb3lSeGpzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Rlc3Ryb3ktcnhqcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2ZDb250cm9sTW9kZWwsIE9mU2NoZW1hTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBPZkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vb2YtdGVtcGxhdGUtcmVmL29mLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9mQ3JlYXRlQ29udHJvbEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2YtY3JlYXRlLWNvbnRyb2wtZm9ybS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2ZWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2YtdmFsaWRhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ29mJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vb2YtZHluYW1pYy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb2YtZHluYW1pYy5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbRGVzdHJveVJ4anNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT2ZEeW5hbWljQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBzY2hlbWFNb2RlbDogT2ZTY2hlbWFNb2RlbDtcclxuICBAT3V0cHV0KCkgc3VibWl0VmFsdWVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzZWFyY2hFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuICBmaWVsZHM6IE9mQ29udHJvbE1vZGVsW10gPSBbXTtcclxuICBvZkZpZWxkVGVtcGF0ZXM6IE9mRmllbGRDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtPy5nZXRSYXdWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjcmVhdGVDdHJsU2VydmljZTogT2ZDcmVhdGVDb250cm9sRm9ybVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2YWxpZGF0b3JTZXJ2aWNlOiBPZlZhbGlkYXRvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkZXN0cm95JDogRGVzdHJveVJ4anNTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZmllbGRzID0gdGhpcy5zY2hlbWFNb2RlbC5maWVsZHMgfHwgW107XHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmNyZWF0ZUN0cmxTZXJ2aWNlLmNyZWF0ZUNvbnRyb2wodGhpcy5maWVsZHMpO1xyXG4gICAgdGhpcy5zY2hlbWFNb2RlbC5mb3JtID0gdGhpcy5mb3JtO1xyXG4gICAgdGhpcy5pbml0JCgpO1xyXG4gIH1cclxuXHJcbiAgcmVCdWlsZGVyRm9ybSgpIHtcclxuICAgIHRoaXMuZmllbGRzID0gdGhpcy5zY2hlbWFNb2RlbC5maWVsZHMgfHwgW107XHJcbiAgICB0aGlzLmNyZWF0ZUN0cmxTZXJ2aWNlLnVwZGF0ZUNvbnRyb2wodGhpcy5maWVsZHMsIHRoaXMuZm9ybSk7XHJcbiAgICB0aGlzLnNjaGVtYU1vZGVsLmZvcm0gPSB0aGlzLmZvcm07XHJcbiAgfVxyXG5cclxuXHJcbiAgaW5pdCQoKSB7XHJcbiAgICB0aGlzLnNjaGVtYU1vZGVsLnJlYnVpbGRlciQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgIGZpbHRlcih4ID0+IHggPiAwKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZUJ1aWxkZXJGb3JtKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUZpZWxkKGluZGV4OiBudW1iZXIsIGZpZWxkOiBPZkNvbnRyb2xNb2RlbCkge1xyXG4gICAgcmV0dXJuIGZpZWxkLmRhdGFGaWVsZDtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KGlzQ2hlY2tWYWxpZCA9IHRydWUpOiBhbnkge1xyXG4gICAgdGhpcy5zY2hlbWFNb2RlbC5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgaWYgKCFpc0NoZWNrVmFsaWQpIHtcclxuICAgICAgdGhpcy5zdWJtaXRWYWx1ZUV2ZW50LmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgXy5mb3JFYWNoKHRoaXMuZmllbGRzLCAoZmllbGQpID0+IHtcclxuICAgICAgY29uc3QgZiA9IHRoaXMuZm9ybS5jb250cm9sc1tmaWVsZC5kYXRhRmllbGRdO1xyXG4gICAgICBpZiAoZikge1xyXG4gICAgICAgIGlmIChmaWVsZC5oaWRkZW4pIHtcclxuICAgICAgICAgIGYuc2V0VmFsaWRhdG9ycyhudWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZi5zZXRWYWxpZGF0b3JzKHRoaXMuY3JlYXRlQ3RybFNlcnZpY2UuYmluZFZhbGlkYXRpb25zKGZpZWxkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcclxuICAgICAgdGhpcy5zdWJtaXRWYWx1ZUV2ZW50LmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JTZXJ2aWNlLmZvY3VzQ29udHJvbEl0ZW0odGhpcy5zY2hlbWFNb2RlbC5pZCk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudmFsaWRhdG9yU2VydmljZS5mb2N1c0ZpcnN0KHRoaXMuc2NoZW1hTW9kZWwuaWQpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tTZWFyY2hCdG4oKSB7XHJcbiAgICB0aGlzLnNjaGVtYU1vZGVsLnNlYXJjaEJ0bkJ1c3kgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWFyY2hFdmVudC5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5zY2hlbWFNb2RlbC5zZWFyY2hFdmVudCQubmV4dCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuICBkaXNhYmxlQWxsKGYgPSB0cnVlKSB7XHJcbiAgICB0aGlzLnNjaGVtYU1vZGVsLmRpc2FibGVBbGwoZik7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlRmllbGQobmFtZTogc3RyaW5nLCBmID0gdHJ1ZSkge1xyXG4gICAgdGhpcy5zY2hlbWFNb2RlbC5kaXNhYmxlRmllbGQobmFtZSwgZik7XHJcbiAgfVxyXG5cclxuICBhZGRPZkZpZWxkVGVtcGF0ZXMoZDogT2ZGaWVsZENvbXBvbmVudCkge1xyXG4gICAgdGhpcy5vZkZpZWxkVGVtcGF0ZXMucHVzaChkKTtcclxuICB9XHJcbn1cclxuIl19