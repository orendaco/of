import { OfControlModel } from '../../models';
export class OfCurrencyModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.type = 'currencyInput';
        this.prefix = config.prefix || ' ';
        this.suffix = config.suffix || ' VNĐ';
        this.precision = config.precision || 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2YtY3VycmVuY3kubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9vZi9zcmMvbGliL2NvbXBvbmVudHMvb2YtY3VycmVuY3kvb2YtY3VycmVuY3kubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBd0IsTUFBTSxjQUFjLENBQUM7QUFVcEUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsY0FBYztJQUtqRCxZQUFZLE1BQTZCO1FBQ3ZDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9mQ29udHJvbE1vZGVsLCBPZkNvbnRyb2xNb2RlbENvbmZpZyB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPZkN1cnJlbmN5TW9kZWxDb25maWcgZXh0ZW5kcyBPZkNvbnRyb2xNb2RlbENvbmZpZyB7XHJcbiAgcHJlZml4Pzogc3RyaW5nO1xyXG4gIHN1ZmZpeD86IHN0cmluZztcclxuICBwcmVjaXNpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgT2ZDdXJyZW5jeU1vZGVsIGV4dGVuZHMgT2ZDb250cm9sTW9kZWwge1xyXG4gIHByZWZpeDogc3RyaW5nIHwgbnVsbDtcclxuICBzdWZmaXg6IHN0cmluZyB8IG51bGw7XHJcbiAgcHJlY2lzaW9uOiBudW1iZXIgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE9mQ3VycmVuY3lNb2RlbENvbmZpZykge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuICAgIHRoaXMudHlwZSA9ICdjdXJyZW5jeUlucHV0JztcclxuICAgIHRoaXMucHJlZml4ID0gY29uZmlnLnByZWZpeCB8fCAnICc7XHJcbiAgICB0aGlzLnN1ZmZpeCA9IGNvbmZpZy5zdWZmaXggfHwgJyBWTsSQJztcclxuICAgIHRoaXMucHJlY2lzaW9uID0gY29uZmlnLnByZWNpc2lvbiB8fCAwO1xyXG4gIH1cclxufVxyXG4iXX0=