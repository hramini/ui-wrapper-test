import { Builder } from '../builder/builder-class';
import { Unit } from './unit-class';
export class UnitFrame extends Unit {
    constructor() {
        super();
        const { frameBuilderClass } = this.getFrameBuilder();
        this.builder = Builder.getFrameBuilder({ frameBuilderClass });
    }
}
