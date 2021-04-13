import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { AppUtilityService } from './app-utility-service';
import * as i0 from "@angular/core";
export class OfValidatorService {
    constructor() {
    }
    noWhitespaceValidator(control) {
        if (AppUtilityService.isNullOrEmpty(control.value)) {
            return { whiteSpace: true };
        }
        const v = '' + control.value;
        const isWhitespace = v.trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { whiteSpace: true };
    }
    emailValidator(control) {
        const value = (control === null || control === void 0 ? void 0 : control.value) || '';
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = re.test(value);
        return isValid ? null : { email: true };
    }
    passwordValidator(control) {
        const value = (control === null || control === void 0 ? void 0 : control.value) || '';
        const check = value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/);
        const isValid = !!check;
        return isValid ? null : { password: true };
    }
    phoneValidator(control) {
        const value = (control === null || control === void 0 ? void 0 : control.value) || '';
        const check = value.match(/(09|01[2|6|8|9])+([0-9]{8})\b/);
        const isValid = !!check;
        return isValid ? null : { phone: true };
    }
    focusControlItem(id) {
        const arr = $('#' + id).find('.ord-form-control');
        let flag = true;
        arr.each(function () {
            let txt = $(this).find('.form-control-err').text();
            if (txt) {
                txt = txt.replace(/ /g, '');
            }
            if (flag && AppUtilityService.isNotNull(txt)) {
                $(this).find('.ord-dynamic-input').focus();
                $(this).find('.ant-input-number-input').focus();
                $(this).find('.ant-input').focus();
                $(this).find('.ant-select-selection-search-input').focus();
                if ($(this).find('.ant-radio-input')[0]) {
                    $(this).find('.ant-radio-input')[0].focus();
                }
                flag = false;
            }
        });
    }
    focusFirst(id) {
        const arr = $('#' + id).find('.ord-form-control');
        let flag = true;
        arr.each(function () {
            if (flag) {
                $(this).find('.ord-dynamic-input').focus();
                $(this).find('.ant-input-number-input').focus();
                $(this).find('.ant-input').focus();
                $(this).find('.ant-select-selection-search-input').focus();
                if ($(this).find('.ant-radio-input')[0]) {
                    $(this).find('.ant-radio-input')[0].focus();
                }
                flag = false;
            }
        });
    }
}
OfValidatorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OfValidatorService_Factory() { return new OfValidatorService(); }, token: OfValidatorService, providedIn: "root" });
OfValidatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OfValidatorService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtdmFsaWRhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL3NlcnZpY2VzL29mLXZhbGlkYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBSzFELE1BQU0sT0FBTyxrQkFBa0I7SUFFN0I7SUFDQSxDQUFDO0lBRU0scUJBQXFCLENBQUMsT0FBb0I7UUFDL0MsSUFBSSxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDN0I7UUFDRCxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3QixNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLE9BQU8sR0FBRyxDQUFDLFlBQVksQ0FBQztRQUM5QixPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRU0sY0FBYyxDQUFDLE9BQW9CO1FBQ3hDLE1BQU0sS0FBSyxHQUFHLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLEtBQUssS0FBSSxFQUFFLENBQUM7UUFDbkMsTUFBTSxFQUFFLEdBQUcseUpBQXlKLENBQUM7UUFDckssTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixPQUFPLE9B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QUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUM3QztnQkFDRCxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUE1RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgeyBBcHBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4vYXBwLXV0aWxpdHktc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPZlZhbGlkYXRvclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBub1doaXRlc3BhY2VWYWxpZGF0b3IoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcclxuICAgIGlmIChBcHBVdGlsaXR5U2VydmljZS5pc051bGxPckVtcHR5KGNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB7IHdoaXRlU3BhY2U6IHRydWUgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IHYgPSAnJyArIGNvbnRyb2wudmFsdWU7XHJcbiAgICBjb25zdCBpc1doaXRlc3BhY2UgPSB2LnRyaW0oKS5sZW5ndGggPT09IDA7XHJcbiAgICBjb25zdCBpc1ZhbGlkID0gIWlzV2hpdGVzcGFjZTtcclxuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IHsgd2hpdGVTcGFjZTogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVtYWlsVmFsaWRhdG9yKGNvbnRyb2w6IEZvcm1Db250cm9sKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRyb2w/LnZhbHVlIHx8ICcnO1xyXG4gICAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgY29uc3QgaXNWYWxpZCA9IHJlLnRlc3QodmFsdWUpO1xyXG4gICAgcmV0dXJuIGlzVmFsaWQgPyBudWxsIDogeyBlbWFpbDogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhc3N3b3JkVmFsaWRhdG9yKGNvbnRyb2w6IEZvcm1Db250cm9sKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRyb2w/LnZhbHVlIHx8ICcnO1xyXG4gICAgY29uc3QgY2hlY2sgPSB2YWx1ZS5tYXRjaCgvXig/PS4qW0EtWmEtel0pKD89LipcXGQpW0EtWmEtelxcZEAkISUqIz8mXXs4LH0kLyk7XHJcbiAgICBjb25zdCBpc1ZhbGlkID0gISFjaGVjaztcclxuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IHsgcGFzc3dvcmQ6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwaG9uZVZhbGlkYXRvcihjb250cm9sOiBGb3JtQ29udHJvbCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250cm9sPy52YWx1ZSB8fCAnJztcclxuICAgIGNvbnN0IGNoZWNrID0gdmFsdWUubWF0Y2goLygwOXwwMVsyfDZ8OHw5XSkrKFswLTldezh9KVxcYi8pO1xyXG4gICAgY29uc3QgaXNWYWxpZCA9ICEhY2hlY2s7XHJcbiAgICByZXR1cm4gaXNWYWxpZCA/IG51bGwgOiB7IHBob25lOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICBmb2N1c0NvbnRyb2xJdGVtKGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGFyciA9ICQoJyMnICsgaWQpLmZpbmQoJy5vcmQtZm9ybS1jb250cm9sJyk7XHJcbiAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICBhcnIuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IHR4dCA9ICQodGhpcykuZmluZCgnLmZvcm0tY29udHJvbC1lcnInKS50ZXh0KCk7XHJcbiAgICAgIGlmICh0eHQpIHtcclxuICAgICAgICB0eHQgPSB0eHQucmVwbGFjZSgvIC9nLCAnJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZsYWcgJiYgQXBwVXRpbGl0eVNlcnZpY2UuaXNOb3ROdWxsKHR4dCkpIHtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5vcmQtZHluYW1pYy1pbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuYW50LWlucHV0LW51bWJlci1pbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuYW50LWlucHV0JykuZm9jdXMoKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5hbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2gtaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJy5hbnQtcmFkaW8taW5wdXQnKVswXSkge1xyXG4gICAgICAgICAgJCh0aGlzKS5maW5kKCcuYW50LXJhZGlvLWlucHV0JylbMF0uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmb2N1c0ZpcnN0KGlkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGFyciA9ICQoJyMnICsgaWQpLmZpbmQoJy5vcmQtZm9ybS1jb250cm9sJyk7XHJcbiAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICBhcnIuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5vcmQtZHluYW1pYy1pbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuYW50LWlucHV0LW51bWJlci1pbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuYW50LWlucHV0JykuZm9jdXMoKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5hbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2gtaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJy5hbnQtcmFkaW8taW5wdXQnKVswXSkge1xyXG4gICAgICAgICAgJCh0aGlzKS5maW5kKCcuYW50LXJhZGlvLWlucHV0JylbMF0uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19