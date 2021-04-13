import { OfSelectBaseModel } from '../../models/of-select-base.model';
export class OfSelectAsyncModel extends OfSelectBaseModel {
    constructor(config) {
        super(config);
        this.keyCache = '';
        this.type = 'selectAsync';
        this.optionsAsync = config.optionsAsync;
        this.keyCache = config.keyCache;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Ytc2VsZWN0LWFzeW5jLW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvb2Yvc3JjL2xpYi9jb21wb25lbnRzL29mLXNlbGVjdC1hc3luYy9vZi1zZWxlY3QtYXN5bmMtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUEyQixNQUFNLG1DQUFtQyxDQUFDO0FBVS9GLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxpQkFBaUI7SUFJdkQsWUFBWSxNQUFnQztRQUMxQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFIaEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUlaLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2ZTZWxlY3RCYXNlTW9kZWwsIE9mU2VsZWN0QmFzZU1vZGVsQ29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL29mLXNlbGVjdC1iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgSU9mU2VsZWN0T3B0aW9uRHRvIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPZlNlbGVjdEFzeW5jTW9kZWxDb25maWcgZXh0ZW5kcyBPZlNlbGVjdEJhc2VNb2RlbENvbmZpZyB7XHJcbiAgb3B0aW9uc0FzeW5jOiBPYnNlcnZhYmxlPElPZlNlbGVjdE9wdGlvbkR0b1tdPjtcclxuICBrZXlDYWNoZT86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBPZlNlbGVjdEFzeW5jTW9kZWwgZXh0ZW5kcyBPZlNlbGVjdEJhc2VNb2RlbCB7XHJcbiAgb3B0aW9uc0FzeW5jOiBPYnNlcnZhYmxlPElPZlNlbGVjdE9wdGlvbkR0b1tdPjtcclxuICBrZXlDYWNoZSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE9mU2VsZWN0QXN5bmNNb2RlbENvbmZpZykge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuICAgIHRoaXMudHlwZSA9ICdzZWxlY3RBc3luYyc7XHJcbiAgICB0aGlzLm9wdGlvbnNBc3luYyA9IGNvbmZpZy5vcHRpb25zQXN5bmM7XHJcbiAgICB0aGlzLmtleUNhY2hlID0gY29uZmlnLmtleUNhY2hlO1xyXG4gIH1cclxufVxyXG4iXX0=