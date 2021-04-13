import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { FormBuilder, Validators } from '@angular/forms';
import { OfValidatorService } from './of-validator.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./of-validator.service";
export class OfCreateControlFormService {
    constructor(fb, validatorService) {
        this.fb = fb;
        this.validatorService = validatorService;
    }
    createControl(fields) {
        const group = this.fb.group({});
        _.forEach(fields, (field) => {
            this.createField(field, group);
        });
        return group;
    }
    createExtendControl(group, controls) {
        _.forEach(controls, (field) => {
            const f = group.get(field.dataField);
            if (f) {
                return;
            }
            this.createValidations(field);
            const control = this.fb.control(field.value, this.bindValidations(field));
            if (field.disabled) {
                control.disable({ onlySelf: true });
            }
            group.addControl(field.dataField, control);
        });
    }
    getDataFieldAndNameConstrols(fields) {
        const ret = [];
        _.forEach(fields, (f) => {
            ret.push(f.dataField);
            if (f === null || f === void 0 ? void 0 : f.controls) {
                _.forEach(f.controls, ctrl => {
                    ret.push(ctrl.dataField);
                });
            }
        });
        return ret;
    }
    updateControl(fields, group) {
        const lstNameField = this.getDataFieldAndNameConstrols(fields);
        Object.keys(group.controls).forEach(key => {
            const fDataField = lstNameField.indexOf(key) > -1;
            if (!fDataField) {
                group.removeControl(key);
            }
        });
        _.forEach(fields, (field) => {
            const f = group.get(field.dataField);
            if (f) {
                return;
            }
            this.createField(field, group);
        });
    }
    createField(field, group) {
        const ignoreType = ['contentHtml', 'componentRef', 'templateRef'];
        if (ignoreType.indexOf(field.type) > 0) {
            return;
        }
        this.createValidations(field);
        const control = this.fb.control(field.value, this.bindValidations(field));
        if (field.disabled) {
            control.disable({ onlySelf: true });
        }
        group.addControl(field.dataField, control);
    }
    createValidations(field) {
        field.validations = field.validations || [];
        field.validations.forEach(valid => {
            if (valid.name === 'email') {
                valid.validator = this.validatorService.emailValidator;
                valid.message = valid.message || 'Email sai định dạng!';
                return;
            }
            if (valid.name === 'phone') {
                valid.validator = this.validatorService.phoneValidator;
                valid.message = valid.message || 'Số điện thoại không đúng định dạng!';
                return;
            }
            if (valid.name === 'password') {
                valid.validator = this.validatorService.passwordValidator;
                valid.message = valid.message || 'Mật khẩu tối thiểu 8 ký tự, bao gồm chữ in hoa/ thường , số và ký tự đặc biệt!';
                return;
            }
        });
        if (field.required) {
            field.validations.push({
                name: 'whiteSpace',
                validator: this.validatorService.noWhitespaceValidator,
                message: field.errorEmpty
            });
        }
    }
    bindValidations(field) {
        const validations = field.validations || [];
        if (validations.length > 0) {
            const validList = [];
            validations.forEach(valid => {
                validList.push(valid.validator);
            });
            return Validators.compose(validList);
        }
        return null;
    }
}
OfCreateControlFormService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OfCreateControlFormService_Factory() { return new OfCreateControlFormService(i0.ɵɵinject(i1.FormBuilder), i0.ɵɵinject(i2.OfValidatorService)); }, token: OfCreateControlFormService, providedIn: "root" });
OfCreateControlFormService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OfCreateControlFormService.ctorParameters = () => [
    { type: FormBuilder },
    { type: OfValidatorService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtY3JlYXRlLWNvbnRyb2wtZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9zZXJ2aWNlcy9vZi1jcmVhdGUtY29udHJvbC1mb3JtLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSzVELE1BQU0sT0FBTywwQkFBMEI7SUFFckMsWUFBb0IsRUFBZSxFQUNmLGdCQUFvQztRQURwQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtJQUN4RCxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQXdCO1FBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBZ0IsRUFBRSxRQUFnQztRQUNwRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQTJCLEVBQUUsRUFBRTtZQUNsRCxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQyxJQUFJLENB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QUNKO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUE0QztRQUMxRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUM1QyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNyQixXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztZQXpIRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQU5RLFdBQVc7WUFFWCxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2ZDb250cm9sTW9kZWwsIE9mRXh0ZW5kQ29udHJvbE1vZGVsLCBPZlR5cGUgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBPZlZhbGlkYXRvclNlcnZpY2UgfSBmcm9tICcuL29mLXZhbGlkYXRvci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9mQ3JlYXRlQ29udHJvbEZvcm1TZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2YWxpZGF0b3JTZXJ2aWNlOiBPZlZhbGlkYXRvclNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbnRyb2woZmllbGRzOiBPZkNvbnRyb2xNb2RlbFtdKTogRm9ybUdyb3VwIHtcclxuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5mYi5ncm91cCh7fSk7XHJcbiAgICBfLmZvckVhY2goZmllbGRzLCAoZmllbGQ6IE9mQ29udHJvbE1vZGVsKSA9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRmllbGQoZmllbGQsIGdyb3VwKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGdyb3VwO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRXh0ZW5kQ29udHJvbChncm91cDogRm9ybUdyb3VwLCBjb250cm9sczogT2ZFeHRlbmRDb250cm9sTW9kZWxbXSkge1xyXG4gICAgXy5mb3JFYWNoKGNvbnRyb2xzLCAoZmllbGQ6IE9mRXh0ZW5kQ29udHJvbE1vZGVsKSA9PiB7XHJcbiAgICAgIGNvbnN0IGYgPSBncm91cC5nZXQoZmllbGQuZGF0YUZpZWxkKTtcclxuICAgICAgaWYgKGYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jcmVhdGVWYWxpZGF0aW9ucyhmaWVsZCk7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmZiLmNvbnRyb2woXHJcbiAgICAgICAgZmllbGQudmFsdWUsXHJcbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbnMoZmllbGQpXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChmaWVsZC5kaXNhYmxlZCkge1xyXG4gICAgICAgIGNvbnRyb2wuZGlzYWJsZSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGdyb3VwLmFkZENvbnRyb2woZmllbGQuZGF0YUZpZWxkLCBjb250cm9sKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGdldERhdGFGaWVsZEFuZE5hbWVDb25zdHJvbHMoZmllbGRzOiBPZkNvbnRyb2xNb2RlbFtdKSB7XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIF8uZm9yRWFjaChmaWVsZHMsIChmOiBPZkNvbnRyb2xNb2RlbCkgPT4ge1xyXG4gICAgICByZXQucHVzaChmLmRhdGFGaWVsZCk7XHJcbiAgICAgIGlmIChmPy5jb250cm9scykge1xyXG4gICAgICAgIF8uZm9yRWFjaChmLmNvbnRyb2xzLCBjdHJsID0+IHtcclxuICAgICAgICAgIHJldC5wdXNoKGN0cmwuZGF0YUZpZWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29udHJvbChmaWVsZHM6IE9mQ29udHJvbE1vZGVsW10sIGdyb3VwOiBGb3JtR3JvdXApOiB2b2lkIHtcclxuICAgIGNvbnN0IGxzdE5hbWVGaWVsZCA9IHRoaXMuZ2V0RGF0YUZpZWxkQW5kTmFtZUNvbnN0cm9scyhmaWVsZHMpO1xyXG4gICAgT2JqZWN0LmtleXMoZ3JvdXAuY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgY29uc3QgZkRhdGFGaWVsZCA9IGxzdE5hbWVGaWVsZC5pbmRleE9mKGtleSkgPiAtMTtcclxuICAgICAgaWYgKCFmRGF0YUZpZWxkKSB7XHJcbiAgICAgICAgZ3JvdXAucmVtb3ZlQ29udHJvbChrZXkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIF8uZm9yRWFjaChmaWVsZHMsIChmaWVsZDogT2ZDb250cm9sTW9kZWwpID0+IHtcclxuICAgICAgY29uc3QgZiA9IGdyb3VwLmdldChmaWVsZC5kYXRhRmllbGQpO1xyXG4gICAgICBpZiAoZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNyZWF0ZUZpZWxkKGZpZWxkLCBncm91cCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRmllbGQoZmllbGQ6IE9mQ29udHJvbE1vZGVsLCBncm91cDogRm9ybUdyb3VwKSB7XHJcbiAgICBjb25zdCBpZ25vcmVUeXBlOiBPZlR5cGVbXSA9IFsnY29udGVudEh0bWwnLCAnY29tcG9uZW50UmVmJywgJ3RlbXBsYXRlUmVmJ107XHJcbiAgICBpZiAoaWdub3JlVHlwZS5pbmRleE9mKGZpZWxkLnR5cGUpID4gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNyZWF0ZVZhbGlkYXRpb25zKGZpZWxkKTtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmZiLmNvbnRyb2woXHJcbiAgICAgIGZpZWxkLnZhbHVlLFxyXG4gICAgICB0aGlzLmJpbmRWYWxpZGF0aW9ucyhmaWVsZClcclxuICAgICk7XHJcbiAgICBpZiAoZmllbGQuZGlzYWJsZWQpIHtcclxuICAgICAgY29udHJvbC5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBncm91cC5hZGRDb250cm9sKGZpZWxkLmRhdGFGaWVsZCwgY29udHJvbCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY3JlYXRlVmFsaWRhdGlvbnMoZmllbGQ6IE9mQ29udHJvbE1vZGVsIHwgT2ZFeHRlbmRDb250cm9sTW9kZWwpIHtcclxuICAgIGZpZWxkLnZhbGlkYXRpb25zID0gZmllbGQudmFsaWRhdGlvbnMgfHwgW107XHJcbiAgICBmaWVsZC52YWxpZGF0aW9ucy5mb3JFYWNoKHZhbGlkID0+IHtcclxuICAgICAgaWYgKHZhbGlkLm5hbWUgPT09ICdlbWFpbCcpIHtcclxuICAgICAgICB2YWxpZC52YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvclNlcnZpY2UuZW1haWxWYWxpZGF0b3I7XHJcbiAgICAgICAgdmFsaWQubWVzc2FnZSA9IHZhbGlkLm1lc3NhZ2UgfHwgJ0VtYWlsIHNhaSDEkeG7i25oIGThuqFuZyEnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsaWQubmFtZSA9PT0gJ3Bob25lJykge1xyXG4gICAgICAgIHZhbGlkLnZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yU2VydmljZS5waG9uZVZhbGlkYXRvcjtcclxuICAgICAgICB2YWxpZC5tZXNzYWdlID0gdmFsaWQubWVzc2FnZSB8fCAnU+G7kSDEkWnhu4duIHRob+G6oWkga2jDtG5nIMSRw7puZyDEkeG7i25oIGThuqFuZyEnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsaWQubmFtZSA9PT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICAgIHZhbGlkLnZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yU2VydmljZS5wYXNzd29yZFZhbGlkYXRvcjtcclxuICAgICAgICB2YWxpZC5tZXNzYWdlID0gdmFsaWQubWVzc2FnZSB8fCAnTeG6rXQga2jhuql1IHThu5FpIHRoaeG7g3UgOCBrw70gdOG7sSwgYmFvIGfhu5NtIGNo4buvIGluIGhvYS8gdGjGsOG7nW5nICwgc+G7kSB2w6Aga8O9IHThu7EgxJHhurdjIGJp4buHdCEnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoZmllbGQucmVxdWlyZWQpIHtcclxuICAgICAgZmllbGQudmFsaWRhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogJ3doaXRlU3BhY2UnLFxyXG4gICAgICAgIHZhbGlkYXRvcjogdGhpcy52YWxpZGF0b3JTZXJ2aWNlLm5vV2hpdGVzcGFjZVZhbGlkYXRvcixcclxuICAgICAgICBtZXNzYWdlOiBmaWVsZC5lcnJvckVtcHR5XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZFZhbGlkYXRpb25zKGZpZWxkOiBPZkNvbnRyb2xNb2RlbCB8IE9mRXh0ZW5kQ29udHJvbE1vZGVsKSB7XHJcbiAgICBjb25zdCB2YWxpZGF0aW9ucyA9IGZpZWxkLnZhbGlkYXRpb25zIHx8IFtdO1xyXG4gICAgaWYgKHZhbGlkYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgdmFsaWRMaXN0ID0gW107XHJcbiAgICAgIHZhbGlkYXRpb25zLmZvckVhY2godmFsaWQgPT4ge1xyXG4gICAgICAgIHZhbGlkTGlzdC5wdXNoKHZhbGlkLnZhbGlkYXRvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkTGlzdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIl19