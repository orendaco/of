// cấu hình control trong template
export class OfExtendControlModel {
    constructor(config) {
        this.disabled = false;
        this.errorEmpty = '';
        this.label = config.label || '';
        this.dataField = config.dataField;
        this.validations = config.validations || [];
        this.value = config.value;
        this.required = config.required;
        this.errorEmpty = config.errorEmpty || 'Không để trống trường này';
        this.disabled = config === null || config === void 0 ? void 0 : config.disabled;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtZXh0ZW5kLWNvbnRyb2wubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL21vZGVscy9vZi1leHRlbmQtY29udHJvbC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQSxrQ0FBa0M7QUFDbEMsTUFBTSxPQUFPLG9CQUFvQjtJQVMvQixZQUFZLE1BQWtDO1FBSDlDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUdkLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksMkJBQTJCLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsUUFBUSxDQUFDO0lBQ25DLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yZFZhbGlkYXRvciB9IGZyb20gJy4vb2YtY29udHJvbC5tb2RlbCc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPZkV4dGVuZENvbnRyb2xNb2RlbENvbmZpZyB7XHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgZGF0YUZpZWxkOiBzdHJpbmc7XHJcbiAgdmFsaWRhdGlvbnM/OiBPcmRWYWxpZGF0b3JbXTtcclxuICB2YWx1ZT86IGFueTtcclxuICByZXF1aXJlZD86IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGVycm9yRW1wdHk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIGPhuqV1IGjDrG5oIGNvbnRyb2wgdHJvbmcgdGVtcGxhdGVcclxuZXhwb3J0IGNsYXNzIE9mRXh0ZW5kQ29udHJvbE1vZGVsIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGRhdGFGaWVsZDogc3RyaW5nO1xyXG4gIHZhbGlkYXRpb25zPzogT3JkVmFsaWRhdG9yW107XHJcbiAgdmFsdWU/OiBhbnk7XHJcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgZXJyb3JFbXB0eSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE9mRXh0ZW5kQ29udHJvbE1vZGVsQ29uZmlnKSB7XHJcbiAgICB0aGlzLmxhYmVsID0gY29uZmlnLmxhYmVsIHx8ICcnO1xyXG4gICAgdGhpcy5kYXRhRmllbGQgPSBjb25maWcuZGF0YUZpZWxkO1xyXG4gICAgdGhpcy52YWxpZGF0aW9ucyA9IGNvbmZpZy52YWxpZGF0aW9ucyB8fCBbXTtcclxuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWU7XHJcbiAgICB0aGlzLnJlcXVpcmVkID0gY29uZmlnLnJlcXVpcmVkO1xyXG4gICAgdGhpcy5lcnJvckVtcHR5ID0gY29uZmlnLmVycm9yRW1wdHkgfHwgJ0tow7RuZyDEkeG7gyB0cuG7kW5nIHRyxrDhu51uZyBuw6B5JztcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBjb25maWc/LmRpc2FibGVkO1xyXG4gIH1cclxufVxyXG4iXX0=