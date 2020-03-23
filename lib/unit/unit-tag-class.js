import { Builder } from '../builder/builder-class';
import { Unit } from './unit-class';
export class UnitTag extends Unit {
    constructor() {
        super();
        const { tagBuilderClass } = this.getTagBuilder();
        this.builder = Builder.getTagBuilder({ tagBuilderClass });
    }
}
