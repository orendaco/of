import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { DestroyRxjsService } from '../../services/destroy-rxjs.service';
import { takeUntil } from 'rxjs/operators';
export class OfSelectAsyncComponent {
    constructor(destroy$) {
        this.destroy$ = destroy$;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.field.optionsAsync.pipe(takeUntil(this.destroy$)).subscribe(opt => {
                this.field.options = opt;
                if (this.vcSelect) {
                    this.vcSelect.setOptionsView(opt);
                }
            });
        });
    }
}
OfSelectAsyncComponent.decorators = [
    { type: Component, args: [{
                selector: 'select-async',
                template: `
      <of-select #vcSelect [schemaModel]="schemaModel" [group]="group" [field]="field"></of-select>`,
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfSelectAsyncComponent.ctorParameters = () => [
    { type: DestroyRxjsService }
];
OfSelectAsyncComponent.propDecorators = {
    vcSelect: [{ type: ViewChild, args: ['vcSelect',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LWFzeW5jLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi1zZWxlY3QtYXN5bmMvb2Ytc2VsZWN0LWFzeW5jLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVTNDLE1BQU0sT0FBTyxzQkFBc0I7SUFNakMsWUFBb0IsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFDaEQsQ0FBQztJQUVELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDbkM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFO29HQUN3RjtnQkFDbEcsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQy9CLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFWUSxrQkFBa0I7Ozt1QkFZeEIsU0FBUyxTQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9mU2NoZW1hTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2ZTZWxlY3RBc3luY01vZGVsIH0gZnJvbSAnLi9vZi1zZWxlY3QtYXN5bmMtbW9kZWwnO1xuaW1wb3J0IHsgRGVzdHJveVJ4anNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVzdHJveS1yeGpzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2ZTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9vZi1zZWxlY3Qvb2Ytc2VsZWN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1hc3luYycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8b2Ytc2VsZWN0ICN2Y1NlbGVjdCBbc2NoZW1hTW9kZWxdPVwic2NoZW1hTW9kZWxcIiBbZ3JvdXBdPVwiZ3JvdXBcIiBbZmllbGRdPVwiZmllbGRcIj48L29mLXNlbGVjdD5gLFxuICBwcm92aWRlcnM6IFtEZXN0cm95Unhqc1NlcnZpY2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBPZlNlbGVjdEFzeW5jQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3ZjU2VsZWN0JykgdmNTZWxlY3Q6IE9mU2VsZWN0Q29tcG9uZW50O1xuICBzY2hlbWFNb2RlbDogT2ZTY2hlbWFNb2RlbDtcbiAgZmllbGQ6IE9mU2VsZWN0QXN5bmNNb2RlbDtcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlc3Ryb3kkOiBEZXN0cm95Unhqc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZmllbGQub3B0aW9uc0FzeW5jLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3B0ID0+IHtcbiAgICAgICAgdGhpcy5maWVsZC5vcHRpb25zID0gb3B0O1xuICAgICAgICBpZiAodGhpcy52Y1NlbGVjdCkge1xuICAgICAgICAgIHRoaXMudmNTZWxlY3Quc2V0T3B0aW9uc1ZpZXcob3B0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19