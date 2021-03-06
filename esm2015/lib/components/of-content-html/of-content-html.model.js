import { OfControlModel } from '../../models';
export class OfContentHtmlModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.type = 'contentHtml';
        this.content = config.content || '';
        if (config.isBlank) {
            this.content = '';
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtY29udGVudC1odG1sLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLWNvbnRlbnQtaHRtbC9vZi1jb250ZW50LWh0bWwubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBd0IsTUFBTSxjQUFjLENBQUM7QUFRcEUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGNBQWM7SUFHcEQsWUFBWSxNQUFnQztRQUMxQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3BDLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9mQ29udHJvbE1vZGVsLCBPZkNvbnRyb2xNb2RlbENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPZkNvbnRlbnRIdG1sTW9kZWxDb25maWcgZXh0ZW5kcyBPZkNvbnRyb2xNb2RlbENvbmZpZyB7XHJcbiAgY29udGVudD86IHN0cmluZztcclxuICBpc0JsYW5rPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9mQ29udGVudEh0bWxNb2RlbCBleHRlbmRzIE9mQ29udHJvbE1vZGVsIHtcclxuICBjb250ZW50OiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE9mQ29udGVudEh0bWxNb2RlbENvbmZpZykge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuICAgIHRoaXMudHlwZSA9ICdjb250ZW50SHRtbCc7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb25maWcuY29udGVudCB8fCAnJztcclxuICAgIGlmIChjb25maWcuaXNCbGFuaykge1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSAnJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19