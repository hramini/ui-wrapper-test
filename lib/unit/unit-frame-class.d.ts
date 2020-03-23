import { IFrameBuilder } from '../builder/builder-interface';
import { TElement } from '../type/element-type';
import { Unit } from './unit-class';
export declare abstract class UnitFrame<P, S> extends Unit<P, S> {
    protected builder: IFrameBuilder<TElement>;
    constructor();
}