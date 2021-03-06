import { OfSelectBaseModel } from '../../models/of-select-base.model';
export class OfSelectCascadeModel extends OfSelectBaseModel {
    constructor(config) {
        super(config);
        this.keyCache = '';
        this.cascadeField = '';
        this.type = 'selectApiCascade';
        this.functionService = config.functionService;
        this.keyCache = config.keyCache;
        this.cascadeField = config.cascadeField;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LWNhc2NhZGUtbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2NvbXBvbmVudHMvb2Ytc2VsZWN0LWNhc2NhZGUvb2Ytc2VsZWN0LWNhc2NhZGUtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUEyQixNQUFNLG1DQUFtQyxDQUFDO0FBVS9GLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxpQkFBaUI7SUFLekQsWUFBWSxNQUFrQztRQUM1QyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFKaEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBSWhCLElBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDMUMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2ZTZWxlY3RCYXNlTW9kZWwsIE9mU2VsZWN0QmFzZU1vZGVsQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29mLXNlbGVjdC1iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgSU9mU2VsZWN0T3B0aW9uRHRvIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPZlNlbGVjdENhc2NhZGVNb2RlbENvbmZpZyBleHRlbmRzIE9mU2VsZWN0QmFzZU1vZGVsQ29uZmlnIHtcclxuICBmdW5jdGlvblNlcnZpY2U6IChjYXNjYWRlOiBzdHJpbmcpID0+IE9ic2VydmFibGU8SU9mU2VsZWN0T3B0aW9uRHRvW10+O1xyXG4gIGtleUNhY2hlPzogc3RyaW5nO1xyXG4gIGNhc2NhZGVGaWVsZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT2ZTZWxlY3RDYXNjYWRlTW9kZWwgZXh0ZW5kcyBPZlNlbGVjdEJhc2VNb2RlbCB7XHJcbiAgZnVuY3Rpb25TZXJ2aWNlOiAoY2FzY2FkZTogc3RyaW5nKSA9PiBPYnNlcnZhYmxlPElPZlNlbGVjdE9wdGlvbkR0b1tdPjtcclxuICBrZXlDYWNoZSA9ICcnO1xyXG4gIGNhc2NhZGVGaWVsZCA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE9mU2VsZWN0Q2FzY2FkZU1vZGVsQ29uZmlnKSB7XHJcbiAgICBzdXBlcihjb25maWcpO1xyXG4gICAgdGhpcy50eXBlID0gJ3NlbGVjdEFwaUNhc2NhZGUnO1xyXG4gICAgdGhpcy5mdW5jdGlvblNlcnZpY2UgPSBjb25maWcuZnVuY3Rpb25TZXJ2aWNlO1xyXG4gICAgdGhpcy5rZXlDYWNoZSA9IGNvbmZpZy5rZXlDYWNoZTtcclxuICAgIHRoaXMuY2FzY2FkZUZpZWxkID0gY29uZmlnLmNhc2NhZGVGaWVsZDtcclxuICB9XHJcbn1cclxuIl19