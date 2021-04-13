import { Component, EventEmitter, Output } from '@angular/core';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
export class OfTextComponent {
    constructor(destroy$) {
        this.destroy$ = destroy$;
        this.searchEvent = new EventEmitter();
        this.keyEnter$ = new Subject();
        this.nzSpinning = false;
    }
    ngOnInit() {
        this.keyEnter$.pipe(takeUntil(this.destroy$), debounceTime(500), distinctUntilChanged())
            .subscribe(d => {
            if (this.schemaModel.isSearchBox) {
                this.schemaModel.searchBtnBusy = true;
                this.schemaModel.searchEvent$.next(d);
                this.searchEvent.emit(d);
                this.nzSpinning = false;
            }
        });
    }
    onKeyEnterControl() {
        if (this.schemaModel.isSearchBox) {
            this.nzSpinning = true;
            this.keyEnter$.next(this.group.getRawValue());
        }
    }
}
OfTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-text',
                template: `
      <nz-spin [nzSpinning]="nzSpinning">
          <form [formGroup]="group" (keyup.enter)="onKeyEnterControl()">
              <input [formControlName]="field.dataField" nz-input [disabled]="true" [placeholder]="field.placeholder"
                     maxlength="{{ field?.maxLength }}"/>
          </form>
      </nz-spin>

  `,
                providers: [DestroyRxjsService]
            },] }
];
OfTextComponent.ctorParameters = () => [
    { type: DestroyRxjsService }
];
OfTextComponent.propDecorators = {
    searchEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2NvbXBvbmVudHMvb2YtdGV4dC9vZi10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZS9FLE1BQU0sT0FBTyxlQUFlO0lBUTFCLFlBQW9CLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBUHRDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUloRCxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBSW5CLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQzthQUNyRixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDaEM7OztZQWxCUSxrQkFBa0I7OzswQkFvQnhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGVzdHJveVJ4anNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVzdHJveS1yeGpzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPZlNjaGVtYU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgT2ZUZXh0TW9kZWwgfSBmcm9tICcuL29mLXRleHQubW9kZWwnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb2YtdGV4dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG56LXNwaW4gW256U3Bpbm5pbmddPVwibnpTcGlubmluZ1wiPlxyXG4gICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJncm91cFwiIChrZXl1cC5lbnRlcik9XCJvbktleUVudGVyQ29udHJvbCgpXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQuZGF0YUZpZWxkXCIgbnotaW5wdXQgW2Rpc2FibGVkXT1cInRydWVcIiBbcGxhY2Vob2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7eyBmaWVsZD8ubWF4TGVuZ3RoIH19XCIvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L256LXNwaW4+XHJcblxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbRGVzdHJveVJ4anNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT2ZUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAT3V0cHV0KCkgc2VhcmNoRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBzY2hlbWFNb2RlbDogT2ZTY2hlbWFNb2RlbDtcclxuICBmaWVsZDogT2ZUZXh0TW9kZWw7XHJcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICBrZXlFbnRlciQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIG56U3Bpbm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXN0cm95JDogRGVzdHJveVJ4anNTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmtleUVudGVyJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSwgZGVib3VuY2VUaW1lKDUwMCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZCA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NoZW1hTW9kZWwuaXNTZWFyY2hCb3gpIHtcclxuICAgICAgICAgIHRoaXMuc2NoZW1hTW9kZWwuc2VhcmNoQnRuQnVzeSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnNjaGVtYU1vZGVsLnNlYXJjaEV2ZW50JC5uZXh0KGQpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hFdmVudC5lbWl0KGQpO1xyXG4gICAgICAgICAgdGhpcy5uelNwaW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uS2V5RW50ZXJDb250cm9sKCkge1xyXG4gICAgaWYgKHRoaXMuc2NoZW1hTW9kZWwuaXNTZWFyY2hCb3gpIHtcclxuICAgICAgdGhpcy5uelNwaW5uaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5rZXlFbnRlciQubmV4dCh0aGlzLmdyb3VwLmdldFJhd1ZhbHVlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19