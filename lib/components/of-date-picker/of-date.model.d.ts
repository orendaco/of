import * as moment from 'moment';
import { OfControlModel, OfControlModelConfig } from '../../models';
import { Observable } from 'rxjs';
export interface OfDateModelConfig extends OfControlModelConfig {
    minDateAsync?: Observable<Date | moment.Moment>;
    maxDateAsync?: Observable<Date | moment.Moment>;
    minDate?: Date;
    maxDate?: Date;
    notGreaterThanCurrent?: boolean;
    tuNgayDataField?: string;
    denNgayDataField?: string;
}
export declare class OfDateModel extends OfControlModel {
    minDateAsync: Observable<Date | moment.Moment> | null;
    maxDateAsync: Observable<Date | moment.Moment> | null;
    dateNotGreaterThanCurrent: boolean | null;
    minDate: Date | null;
    maxDate: Date | null;
    tuNgayDataField?: string;
    denNgayDataField?: string;
    constructor(config: OfDateModelConfig);
}
