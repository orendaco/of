import { OfControlModel, OfControlModelConfig, OfExtendControlModel } from '../../models';
export interface OfTemplateRefModelConfig extends OfControlModelConfig {
    controls: OfExtendControlModel[];
}
export declare class OfTemplateRefModel extends OfControlModel {
    constructor(config: OfTemplateRefModelConfig);
}
