import { Component } from '@angular/core';
import { NzDrawerService, NzModalService } from 'ng-zorro-antd';
export class OfSelectAdvancedSearchComponent {
    constructor(drawerService, modalService) {
        this.drawerService = drawerService;
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    onClickAdvancedBtn() {
        if (this.field.showComponentType === 'drawer') {
            this.openDrawer();
            return;
        }
        if (this.field.showComponentType === 'modal') {
            this.openModal();
            return;
        }
    }
    openDrawer() {
        const drawerRef = this.drawerService.create(Object.assign({ nzTitle: 'Tìm kiếm nâng cao', nzContent: this.field.componentAdvanced, nzPlacement: 'bottom', nzMaskClosable: false, nzHeight: '68vh' }, this.field.nzDrawerOptions));
        drawerRef.afterClose.subscribe(data => {
            this.group.get(this.field.dataField).patchValue(data);
        });
    }
    openModal() {
        const modalRef = this.modalService.create(Object.assign({ nzTitle: 'Tìm kiếm nâng cao', nzContent: this.field.componentAdvanced, nzMaskClosable: false }, this.field.nzModalConfig));
        modalRef.afterClose.subscribe(data => {
            this.group.get(this.field.dataField).patchValue(data);
        });
    }
}
OfSelectAdvancedSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-select-advanced-search',
                template: "<div nz-row>\n  <div nz-col nzFlex=\"1 1 100px\">\n    <of-select-search-server [schemaModel]=\"schemaModel\" [group]=\"group\" [field]=\"field\"></of-select-search-server>\n  </div>\n  <div nz-col nzFlex=\"0 1 32px\">\n    <button nz-button (click)=\"onClickAdvancedBtn()\"\n            style=\"margin-left: -2px;\"\n            [disabled]=\"field.disabled\"\n            nzType=\"primary\" nzSearch>\n      <i nz-icon nzType=\"search\"></i></button>\n  </div>\n</div>\n"
            },] }
];
OfSelectAdvancedSearchComponent.ctorParameters = () => [
    { type: NzDrawerService },
    { type: NzModalService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LWFkdmFuY2VkLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2NvbXBvbmVudHMvb2Ytc2VsZWN0LWFkdmFuY2VkLXNlYXJjaC9vZi1zZWxlY3QtYWR2YW5jZWQtc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2hFLE1BQU0sT0FBTywrQkFBK0I7SUFLMUMsWUFBb0IsYUFBOEIsRUFDOUIsWUFBNEI7UUFENUIsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtJQUNoRCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixLQUFLLFFBQVEsRUFBRTtZQUM3QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixLQUFLLE9BQU8sRUFBRTtZQUM1QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsT0FBTztTQUNSO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0saUJBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFDNUIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQ3ZDLFdBQVcsRUFBRSxRQUFRLEVBQ3JCLGNBQWMsRUFBRSxLQUFLLEVBQ3JCLFFBQVEsRUFBRSxNQUFNLElBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQzdCLENBQUM7UUFDSCxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLGlCQUN2QyxPQUFPLEVBQUUsbUJBQW1CLEVBQzVCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUN2QyxjQUFjLEVBQUUsS0FBSyxJQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFDM0IsQ0FBQztRQUNILFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxtZUFBeUQ7YUFDMUQ7OztZQU5RLGVBQWU7WUFBRSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9mU2NoZW1hTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpEcmF3ZXJTZXJ2aWNlLCBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgT2ZTZWxlY3RBZHZhbmNlZFNlYXJjaE1vZGVsIH0gZnJvbSAnLi9vZi1zZWxlY3QtYWR2YW5jZWQtc2VhcmNoLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnb2Ytc2VsZWN0LWFkdmFuY2VkLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vZi1zZWxlY3QtYWR2YW5jZWQtc2VhcmNoLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBPZlNlbGVjdEFkdmFuY2VkU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2NoZW1hTW9kZWw6IE9mU2NoZW1hTW9kZWw7XG4gIGZpZWxkOiBPZlNlbGVjdEFkdmFuY2VkU2VhcmNoTW9kZWw8YW55PjtcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRyYXdlclNlcnZpY2U6IE56RHJhd2VyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE56TW9kYWxTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uQ2xpY2tBZHZhbmNlZEJ0bigpIHtcbiAgICBpZiAodGhpcy5maWVsZC5zaG93Q29tcG9uZW50VHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgIHRoaXMub3BlbkRyYXdlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5maWVsZC5zaG93Q29tcG9uZW50VHlwZSA9PT0gJ21vZGFsJykge1xuICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBvcGVuRHJhd2VyKCkge1xuICAgIGNvbnN0IGRyYXdlclJlZiA9IHRoaXMuZHJhd2VyU2VydmljZS5jcmVhdGUoe1xuICAgICAgbnpUaXRsZTogJ1TDrG0ga2nhur9tIG7Dom5nIGNhbycsXG4gICAgICBuekNvbnRlbnQ6IHRoaXMuZmllbGQuY29tcG9uZW50QWR2YW5jZWQsXG4gICAgICBuelBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgICBuekhlaWdodDogJzY4dmgnLFxuICAgICAgLi4udGhpcy5maWVsZC5uekRyYXdlck9wdGlvbnNcbiAgICB9KTtcbiAgICBkcmF3ZXJSZWYuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmdyb3VwLmdldCh0aGlzLmZpZWxkLmRhdGFGaWVsZCkucGF0Y2hWYWx1ZShkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgICBuelRpdGxlOiAnVMOsbSBraeG6v20gbsOibmcgY2FvJyxcbiAgICAgIG56Q29udGVudDogdGhpcy5maWVsZC5jb21wb25lbnRBZHZhbmNlZCxcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgIC4uLnRoaXMuZmllbGQubnpNb2RhbENvbmZpZyxcbiAgICB9KTtcbiAgICBtb2RhbFJlZi5hZnRlckNsb3NlLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQuZGF0YUZpZWxkKS5wYXRjaFZhbHVlKGRhdGEpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=