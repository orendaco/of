import { Pipe } from '@angular/core';
import { AppUtilityService } from '../services/app-utility-service';
export class OfOptionSelectedPipe {
    transform(value, label, field) {
        if (AppUtilityService.isNotNull(value)) {
            if (typeof field.renderSelectedFunc === 'function') {
                if (field === null || field === void 0 ? void 0 : field.itemSelected) {
                    return field.renderSelectedFunc(field === null || field === void 0 ? void 0 : field.itemSelected);
                }
                return '';
            }
            else {
                return label;
            }
        }
        return null;
    }
}
OfOptionSelectedPipe.decorators = [
    { type: Pipe, args: [{
                name: 'ofOptionSelected',
                pure: false
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytb3B0aW9uLXNlbGVjdGVkLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL3BpcGVzL29mLW9wdGlvbi1zZWxlY3RlZC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBTXBFLE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsU0FBUyxDQUFDLEtBQVUsRUFBRSxLQUFhLEVBQUUsS0FBd0I7UUFDM0QsSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxPQUFPLEtBQUssQ0FBQyxrQkFBa0IsS0FBSyxVQUFVLEVBQUU7Z0JBQ2xELElBQUksS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFlBQVksRUFBRTtvQkFDdkIsT0FBTyxLQUFLLENBQUMsa0JBQWtCLENBQUMsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFlBQVksQ0FBQyxDQUFDO2lCQUN0RDtnQkFDRCxPQUFPLEVBQUUsQ0FBQzthQUNYO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBbEJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixJQUFJLEVBQUUsS0FBSzthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPZlNlbGVjdEJhc2VNb2RlbCB9IGZyb20gJy4uL21vZGVscy9vZi1zZWxlY3QtYmFzZS5tb2RlbCc7XHJcbmltcG9ydCB7IEFwcFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXBwLXV0aWxpdHktc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ29mT3B0aW9uU2VsZWN0ZWQnLFxyXG4gIHB1cmU6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPZk9wdGlvblNlbGVjdGVkUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgbGFiZWw6IHN0cmluZywgZmllbGQ6IE9mU2VsZWN0QmFzZU1vZGVsKTogc3RyaW5nIHtcclxuICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc05vdE51bGwodmFsdWUpKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZmllbGQucmVuZGVyU2VsZWN0ZWRGdW5jID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkPy5pdGVtU2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHJldHVybiBmaWVsZC5yZW5kZXJTZWxlY3RlZEZ1bmMoZmllbGQ/Lml0ZW1TZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbn1cclxuIl19