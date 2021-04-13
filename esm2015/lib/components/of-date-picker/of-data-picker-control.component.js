import { Component, forwardRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { AppUtilityService } from '../../services/app-utility-service';
const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => OfDataPickerControlComponent),
    multi: true
};
export class OfDataPickerControlComponent {
    constructor() {
        this.placeHolder = 'Ngày/Tháng/Năm';
        this.mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.$destroy = new Subject();
        this.isWriteValue = false;
        this.mouseEvent$ = new Subject();
        this.nzIcon = 'calendar';
        this.nzIcon$ = new BehaviorSubject('calendar');
        // tslint:disable-next-line:variable-name
        this.isShowIconCalendar = true;
        this.isDisabled = false;
        this.control = new FormControl({ value: null, disabled: true });
        this.inputValue = new FormControl({ value: '', disabled: false });
    }
    get value() {
        return this.control.value;
    }
    set value(v) {
        this.control.setValue(v);
    }
    get disabled() {
        return this.isDisabled;
    }
    set disabled(v) {
        this.isDisabled = v;
        if (v === true) {
            this.inputValue.disable();
        }
        else {
            this.inputValue.enable();
        }
    }
    onChange(v) {
    }
    onTouched() {
    }
    onChangeValue(event) {
        this.onChange(event);
    }
    onFocus(event) {
        this.onTouched();
    }
    mouseLeaveMain() {
        this.mouseEvent$.next('mouseLeave');
    }
    mouseEnterMain() {
        this.mouseEvent$.next('mouseEnter');
    }
    ngAfterViewInit() {
        fromEvent(this.refInput.nativeElement, 'click')
            .pipe(debounceTime(222), takeUntil(this.$destroy)).subscribe(() => {
            this.refDate.picker.showOverlay();
            setTimeout(() => {
                this.refInput.nativeElement.focus();
            });
        });
        this.refDate.nzOnOpenChange
            .pipe(takeUntil(this.$destroy))
            .subscribe(o => {
            if (!o) {
                setTimeout(() => {
                    this.refInput.nativeElement.focus();
                });
            }
        });
        this.mouseEvent$.pipe(takeUntil(this.$destroy))
            .pipe(debounceTime(222))
            .pipe(map(d => {
            if (d === 'mouseLeave') {
                return 'calendar';
            }
            if (this.disabled) {
                return 'calendar';
            }
            if (AppUtilityService.isNullOrEmpty(this.control.value)) {
                return 'calendar';
            }
            return 'close-circle';
        })).pipe(tap((icon) => {
            this.nzIcon$.next(icon);
            this.nzIcon = icon;
        })).subscribe();
        this.nzIcon$.next('calendar');
    }
    ngOnDestroy() {
        this.$destroy.next(true);
        this.$destroy.unsubscribe();
    }
    ngOnInit() {
        this.control.valueChanges.pipe(takeUntil(this.$destroy), distinctUntilChanged()).subscribe((result) => {
            if (this.isWriteValue) {
                if (result) {
                    const valueText = moment(result).format('DD/MM/YYYY');
                    this.inputValue.setValue(valueText);
                }
                this.onChangeValue(result);
            }
        });
        this.inputValue.valueChanges.pipe(takeUntil(this.$destroy), distinctUntilChanged(), debounceTime(100)).subscribe(result => {
            try {
                const arrStr = result.split('/');
                if (!isNaN(arrStr[0]) && !isNaN(arrStr[1]) && !isNaN(arrStr[2])) {
                    const date = moment(result, 'DD/MM/YYYY');
                    if (date.isValid()) {
                        if (typeof this.disabledDate === 'function') {
                            if (this.disabledDate(date.toDate())) {
                                this.inputValue.setValue(null);
                            }
                            else {
                                this.control.setValue(date.toDate());
                                this.refDate.picker.hideOverlay();
                            }
                        }
                        else {
                            this.control.setValue(date.toDate());
                            this.refDate.picker.hideOverlay();
                        }
                    }
                    else {
                        this.control.setValue(null);
                    }
                }
                else {
                    this.control.setValue(null);
                }
            }
            catch (e) {
                this.control.setValue(null);
            }
        });
    }
    //#region base ControlValueAccessor
    writeValue(obj) {
        if (obj) {
            const valueText = moment(obj).format('DD/MM/YYYY');
            this.inputValue.setValue(valueText);
            this.value = moment(obj).toDate();
        }
        else {
            this.inputValue.setValue('');
            this.value = null;
        }
        this.isWriteValue = true;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    //#endregion
    onFocusOutInputMask() {
        if (AppUtilityService.isNullOrEmpty(this.control.value)) {
            this.inputValue.setValue(null);
        }
    }
    onClickIcon() {
        if (this.disabled) {
            return;
        }
        if (this.nzIcon === 'calendar') {
            this.refDate.picker.showOverlay();
            return;
        }
        this.nzIcon$.next('calendar');
        this.inputValue.setValue(null);
        this.control.setValue(null);
    }
}
OfDataPickerControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-date-picker-ctrl',
                template: `
      <div class="main-ora-date" (mouseenter)="mouseEnterMain()" (mouseleave)="mouseLeaveMain()">
          <nz-date-picker class="ora-date" #refDate style="width:100%" [nzPlaceHolder]="placeHolder"
                          [nzDisabled]="disabled"
                          [nzDisabledDate]="disabledDate"
                          tabindex="-1"
                          [formControl]="control"
                          nzFormat="dd/MM/yyyy"></nz-date-picker>
          <input #refInput class="ora-input-date" nz-input (focusout)="onFocusOutInputMask()"
                 [placeholder]="placeHolder"
                 [formControl]="inputValue"
                 [textMask]="{mask: mask}"/>
          <i class="ora-calendar" (click)="onClickIcon()" nz-icon
             [nzType]="nzIcon$ | async"
             nzTheme="outline"></i>
      </div>
  `,
                encapsulation: ViewEncapsulation.None,
                providers: [VALUE_ACCESSOR],
                styles: [`.main-ora-date {
      position: relative;
  }

  .ora-date {
      border: 0;
  }

  .ora-input-date {
      position: absolute;
      top: 0;
      left: 0
  }

  .ora-close {
      position: absolute;
      top: 7px;
      right: 5px;
  }

  .ora-calendar {
      position: absolute;
      top: 7px;
      right: 5px;
  }`]
            },] }
];
OfDataPickerControlComponent.ctorParameters = () => [];
OfDataPickerControlComponent.propDecorators = {
    refDate: [{ type: ViewChild, args: ['refDate',] }],
    refInput: [{ type: ViewChild, args: ['refInput',] }],
    disabledDate: [{ type: Input }],
    placeHolder: [{ type: Input }],
    disabled: [{ type: Input }],
    control: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtZGF0YS1waWNrZXItY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2NvbXBvbmVudHMvb2YtZGF0ZS1waWNrZXIvb2YtZGF0YS1waWNrZXItY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBd0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pGLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXZFLE1BQU0sY0FBYyxHQUFhO0lBQy9CLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztJQUMzRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFpREYsTUFBTSxPQUFPLDRCQUE0QjtJQWlFdkM7UUE3RFMsZ0JBQVcsR0FBRyxnQkFBZ0IsQ0FBQztRQUN4QyxTQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxhQUFR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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFByb3ZpZGVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgTnpEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XHJcbmltcG9ydCB7IEFwcFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBwLXV0aWxpdHktc2VydmljZSc7XHJcblxyXG5jb25zdCBWQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gT2ZEYXRhUGlja2VyQ29udHJvbENvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb2YtZGF0ZS1waWNrZXItY3RybCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tb3JhLWRhdGVcIiAobW91c2VlbnRlcik9XCJtb3VzZUVudGVyTWFpbigpXCIgKG1vdXNlbGVhdmUpPVwibW91c2VMZWF2ZU1haW4oKVwiPlxyXG4gICAgICAgICAgPG56LWRhdGUtcGlja2VyIGNsYXNzPVwib3JhLWRhdGVcIiAjcmVmRGF0ZSBzdHlsZT1cIndpZHRoOjEwMCVcIiBbbnpQbGFjZUhvbGRlcl09XCJwbGFjZUhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuekZvcm1hdD1cImRkL01NL3l5eXlcIj48L256LWRhdGUtcGlja2VyPlxyXG4gICAgICAgICAgPGlucHV0ICNyZWZJbnB1dCBjbGFzcz1cIm9yYS1pbnB1dC1kYXRlXCIgbnotaW5wdXQgKGZvY3Vzb3V0KT1cIm9uRm9jdXNPdXRJbnB1dE1hc2soKVwiXHJcbiAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiaW5wdXRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgW3RleHRNYXNrXT1cInttYXNrOiBtYXNrfVwiLz5cclxuICAgICAgICAgIDxpIGNsYXNzPVwib3JhLWNhbGVuZGFyXCIgKGNsaWNrKT1cIm9uQ2xpY2tJY29uKClcIiBuei1pY29uXHJcbiAgICAgICAgICAgICBbbnpUeXBlXT1cIm56SWNvbiQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICBuelRoZW1lPVwib3V0bGluZVwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgLm1haW4tb3JhLWRhdGUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAub3JhLWRhdGUge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG5cclxuICAub3JhLWlucHV0LWRhdGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMFxyXG4gIH1cclxuXHJcbiAgLm9yYS1jbG9zZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA3cHg7XHJcbiAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAub3JhLWNhbGVuZGFyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDdweDtcclxuICAgICAgcmlnaHQ6IDVweDtcclxuICB9YF0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtWQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE9mRGF0YVBpY2tlckNvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ3JlZkRhdGUnKSByZWZEYXRlOiBOekRhdGVQaWNrZXJDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgncmVmSW5wdXQnKSByZWZJbnB1dDogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU/OiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlciA9ICdOZ8OgeS9UaMOhbmcvTsSDbSc7XHJcbiAgbWFzayA9IFsvXFxkLywgL1xcZC8sICcvJywgL1xcZC8sIC9cXGQvLCAnLycsIC9cXGQvLCAvXFxkLywgL1xcZC8sIC9cXGQvXTtcclxuICAkZGVzdHJveTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgaXNXcml0ZVZhbHVlID0gZmFsc2U7XHJcbiAgbW91c2VFdmVudCQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgbnpJY29uID0gJ2NhbGVuZGFyJztcclxuICBuekljb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCdjYWxlbmRhcicpO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxyXG4gIGlzU2hvd0ljb25DYWxlbmRhciA9IHRydWU7XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodjogYW55KSB7XHJcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodik7XHJcbiAgfVxyXG5cclxuICBpc0Rpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHNldCBkaXNhYmxlZCh2OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSB2O1xyXG4gICAgaWYgKHYgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlLmRpc2FibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZS5lbmFibGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogbnVsbCwgZGlzYWJsZWQ6IHRydWUgfSk7XHJcbiAgaW5wdXRWYWx1ZTogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogJycsIGRpc2FibGVkOiBmYWxzZSB9KTtcclxuXHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2UodjogYW55KSB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uVG91Y2hlZCgpIHtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlVmFsdWUoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZShldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBtb3VzZUxlYXZlTWFpbigpIHtcclxuICAgIHRoaXMubW91c2VFdmVudCQubmV4dCgnbW91c2VMZWF2ZScpO1xyXG4gIH1cclxuXHJcbiAgbW91c2VFbnRlck1haW4oKSB7XHJcbiAgICB0aGlzLm1vdXNlRXZlbnQkLm5leHQoJ21vdXNlRW50ZXInKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGZyb21FdmVudDxhbnk+KHRoaXMucmVmSW5wdXQubmF0aXZlRWxlbWVudCwgJ2NsaWNrJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDIyMiksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpXHJcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yZWZEYXRlLnBpY2tlci5zaG93T3ZlcmxheSgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gdGhpcyB3aWxsIG1ha2UgdGhlIGV4ZWN1dGlvbiBhZnRlciB0aGUgYWJvdmUgYm9vbGVhbiBoYXMgY2hhbmdlZFxyXG4gICAgICAgIHRoaXMucmVmSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZWZEYXRlLm56T25PcGVuQ2hhbmdlXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUobyA9PiB7XHJcbiAgICAgICAgaWYgKCFvKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gdGhpcyB3aWxsIG1ha2UgdGhlIGV4ZWN1dGlvbiBhZnRlciB0aGUgYWJvdmUgYm9vbGVhbiBoYXMgY2hhbmdlZFxyXG4gICAgICAgICAgICB0aGlzLnJlZklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB0aGlzLm1vdXNlRXZlbnQkLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpKVxyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMjIyKSlcclxuICAgICAgLnBpcGUobWFwKGQgPT4ge1xyXG4gICAgICAgIGlmIChkID09PSAnbW91c2VMZWF2ZScpIHtcclxuICAgICAgICAgIHJldHVybiAnY2FsZW5kYXInO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgcmV0dXJuICdjYWxlbmRhcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KHRoaXMuY29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgICAgIHJldHVybiAnY2FsZW5kYXInO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2Nsb3NlLWNpcmNsZSc7XHJcbiAgICAgIH0pKS5waXBlKHRhcCgoaWNvbikgPT4ge1xyXG4gICAgICB0aGlzLm56SWNvbiQubmV4dChpY29uKTtcclxuICAgICAgdGhpcy5uekljb24gPSBpY29uO1xyXG4gICAgfSkpLnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5uekljb24kLm5leHQoJ2NhbGVuZGFyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuJGRlc3Ryb3kubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuJGRlc3Ryb3kudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKChyZXN1bHQ6IERhdGUpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaXNXcml0ZVZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgY29uc3QgdmFsdWVUZXh0ID0gbW9tZW50KHJlc3VsdCkuZm9ybWF0KCdERC9NTS9ZWVlZJyk7XHJcbiAgICAgICAgICB0aGlzLmlucHV0VmFsdWUuc2V0VmFsdWUodmFsdWVUZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2VWYWx1ZShyZXN1bHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUudmFsdWVDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuJGRlc3Ryb3kpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLCBkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYXJyU3RyID0gcmVzdWx0LnNwbGl0KCcvJyk7XHJcbiAgICAgICAgaWYgKCFpc05hTihhcnJTdHJbMF0pICYmICFpc05hTihhcnJTdHJbMV0pICYmICFpc05hTihhcnJTdHJbMl0pKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRlID0gbW9tZW50KHJlc3VsdCwgJ0REL01NL1lZWVknKTtcclxuICAgICAgICAgIGlmIChkYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZGlzYWJsZWREYXRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlKGRhdGUudG9EYXRlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUuc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZShkYXRlLnRvRGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmRGF0ZS5waWNrZXIuaGlkZU92ZXJsYXkoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKGRhdGUudG9EYXRlKCkpO1xyXG4gICAgICAgICAgICAgIHRoaXMucmVmRGF0ZS5waWNrZXIuaGlkZU92ZXJsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKG51bGwpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiBiYXNlIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKG9iaikge1xyXG4gICAgICBjb25zdCB2YWx1ZVRleHQgPSBtb21lbnQob2JqKS5mb3JtYXQoJ0REL01NL1lZWVknKTtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlLnNldFZhbHVlKHZhbHVlVGV4dCk7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBtb21lbnQob2JqKS50b0RhdGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZS5zZXRWYWx1ZSgnJyk7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc1dyaXRlVmFsdWUgPSB0cnVlO1xyXG5cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICBvbkZvY3VzT3V0SW5wdXRNYXNrKCkge1xyXG4gICAgaWYgKEFwcFV0aWxpdHlTZXJ2aWNlLmlzTnVsbE9yRW1wdHkodGhpcy5jb250cm9sLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUuc2V0VmFsdWUobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrSWNvbigpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56SWNvbiA9PT0gJ2NhbGVuZGFyJykge1xyXG4gICAgICB0aGlzLnJlZkRhdGUucGlja2VyLnNob3dPdmVybGF5KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubnpJY29uJC5uZXh0KCdjYWxlbmRhcicpO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlLnNldFZhbHVlKG51bGwpO1xyXG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=