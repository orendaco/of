import { Component, ContentChild, Input } from '@angular/core';
import { OfDynamicComponent } from '../of-dynamic/of-dynamic.component';
export class OfFieldComponent {
    constructor(ofDynamic) {
        this.ofDynamic = ofDynamic;
        // map với dataField
        this.id = '';
        this.ofDynamic.addOfFieldTempates(this);
    }
}
OfFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-field',
                template: ``
            },] }
];
OfFieldComponent.ctorParameters = () => [
    { type: OfDynamicComponent }
];
OfFieldComponent.propDecorators = {
    id: [{ type: Input }],
    controlTemplate: [{ type: ContentChild, args: ['control',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLXRlbXBsYXRlLXJlZi9vZi1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBTXhFLE1BQU0sT0FBTyxnQkFBZ0I7SUFLM0IsWUFBbUIsU0FBNkI7UUFBN0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFKaEQsb0JBQW9CO1FBQ1gsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUlmLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsRUFBRTthQUNiOzs7WUFMUSxrQkFBa0I7OztpQkFReEIsS0FBSzs4QkFDTCxZQUFZLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9mRHluYW1pY0NvbXBvbmVudCB9IGZyb20gJy4uL29mLWR5bmFtaWMvb2YtZHluYW1pYy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvZi1maWVsZCcsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBPZkZpZWxkQ29tcG9uZW50IHtcbiAgLy8gbWFwIHbhu5tpIGRhdGFGaWVsZFxuICBASW5wdXQoKSBpZCA9ICcnO1xuICBAQ29udGVudENoaWxkKCdjb250cm9sJykgY29udHJvbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvZkR5bmFtaWM6IE9mRHluYW1pY0NvbXBvbmVudCkge1xuICAgIHRoaXMub2ZEeW5hbWljLmFkZE9mRmllbGRUZW1wYXRlcyh0aGlzKTtcbiAgfVxuXG59XG4iXX0=