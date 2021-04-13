import { Component } from '@angular/core';
import { OfCreateControlFormService } from '../../services/of-create-control-form-service';
export class OfTemplateRefComponent {
    constructor(formService) {
        this.formService = formService;
        this.ofFieldTempates = [];
        this.id = Number(new Date());
    }
    ngOnInit() {
        var _a;
        this.formService.createExtendControl(this.group, this.field.controls);
        this.templateRef = (_a = this.ofFieldTempates.find(x => x.id === this.field.dataField)) === null || _a === void 0 ? void 0 : _a.controlTemplate;
    }
}
OfTemplateRefComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-template-ref',
                template: `
      <ng-container [ngTemplateOutlet]="templateRef"
                    [ngTemplateOutletContext]="{ $implicit: { value: id }, group: group,field: field }"></ng-container>
      <span *ngIf="!templateRef" class="text-danger">Chưa có template</span>
  `
            },] }
];
OfTemplateRefComponent.ctorParameters = () => [
    { type: OfCreateControlFormService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtdGVtcGxhdGUtcmVmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL29mL3NyYy9saWIvY29tcG9uZW50cy9vZi10ZW1wbGF0ZS1yZWYvb2YtdGVtcGxhdGUtcmVmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUkvRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQVUzRixNQUFNLE9BQU8sc0JBQXNCO0lBT2pDLFlBQW9CLFdBQXVDO1FBQXZDLGdCQUFXLEdBQVgsV0FBVyxDQUE0QjtRQU4zRCxvQkFBZSxHQUF1QixFQUFFLENBQUM7UUFHekMsT0FBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFLeEIsQ0FBQztJQUdELFFBQVE7O1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsU0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsMENBQUUsZUFBZSxDQUFDO0lBRXBHLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7O1lBVFEsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPZkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9vZi1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2ZUZW1wbGF0ZVJlZk1vZGVsIH0gZnJvbSAnLi9vZi10ZW1wbGF0ZS1yZWYubW9kZWwnO1xuaW1wb3J0IHsgT2ZDcmVhdGVDb250cm9sRm9ybVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vZi1jcmVhdGUtY29udHJvbC1mb3JtLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvZi10ZW1wbGF0ZS1yZWYnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVJlZlwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogeyB2YWx1ZTogaWQgfSwgZ3JvdXA6IGdyb3VwLGZpZWxkOiBmaWVsZCB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVJlZlwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5DaMawYSBjw7MgdGVtcGxhdGU8L3NwYW4+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgT2ZUZW1wbGF0ZVJlZkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9mRmllbGRUZW1wYXRlczogT2ZGaWVsZENvbXBvbmVudFtdID0gW107XG4gIGZpZWxkOiBPZlRlbXBsYXRlUmVmTW9kZWw7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG4gIGlkID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1TZXJ2aWNlOiBPZkNyZWF0ZUNvbnRyb2xGb3JtU2VydmljZSkge1xuXG4gIH1cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVNlcnZpY2UuY3JlYXRlRXh0ZW5kQ29udHJvbCh0aGlzLmdyb3VwLCB0aGlzLmZpZWxkLmNvbnRyb2xzKTtcbiAgICB0aGlzLnRlbXBsYXRlUmVmID0gdGhpcy5vZkZpZWxkVGVtcGF0ZXMuZmluZCh4ID0+IHguaWQgPT09IHRoaXMuZmllbGQuZGF0YUZpZWxkKT8uY29udHJvbFRlbXBsYXRlO1xuXG4gIH1cbn1cbiJdfQ==