import { Pipe } from '@angular/core';
import * as _ from 'lodash';
export class ShowValidationErrorPipe {
    transform(errors, validations, submitted) {
        if (!submitted) {
            return '';
        }
        let err = '';
        if (errors && (validations === null || validations === void 0 ? void 0 : validations.length) > 0) {
            _.forEach(validations, valid => {
                if (errors[valid.name]) {
                    err = valid.message;
                    return false;
                }
            });
        }
        return err;
    }
}
ShowValidationErrorPipe.decorators = [
    { type: Pipe, args: [{
                name: 'showValidationError'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy12YWxpZGF0aW9uLWVycm9yLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL3BpcGVzL3Nob3ctdmFsaWRhdGlvbi1lcnJvci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBTTVCLE1BQU0sT0FBTyx1QkFBdUI7SUFFbEMsU0FBUyxDQUFDLE1BQVcsRUFBRSxXQUEyQixFQUFFLFNBQWtCO1FBQ3BFLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxNQUFNLElBQUksQ0FBQSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsTUFBTSxJQUFHLENBQUMsRUFBRTtZQUNyQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN0QixHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDcEIsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7WUFuQkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxxQkFBcUI7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgT3JkVmFsaWRhdG9yIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc2hvd1ZhbGlkYXRpb25FcnJvcidcclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3dWYWxpZGF0aW9uRXJyb3JQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybShlcnJvcnM6IGFueSwgdmFsaWRhdGlvbnM6IE9yZFZhbGlkYXRvcltdLCBzdWJtaXR0ZWQ6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdWJtaXR0ZWQpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgbGV0IGVyciA9ICcnO1xyXG4gICAgaWYgKGVycm9ycyAmJiB2YWxpZGF0aW9ucz8ubGVuZ3RoID4gMCkge1xyXG4gICAgICBfLmZvckVhY2godmFsaWRhdGlvbnMsIHZhbGlkID0+IHtcclxuICAgICAgICBpZiAoZXJyb3JzW3ZhbGlkLm5hbWVdKSB7XHJcbiAgICAgICAgICBlcnIgPSB2YWxpZC5tZXNzYWdlO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyO1xyXG4gIH1cclxuXHJcbn1cclxuIl19