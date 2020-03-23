import { UnitDemo } from './unit-demo-class';
export class CustomDemoSimple extends UnitDemo {
    constructor() {
        super();
        this.provideText = 'on-constructor';
    }
    provide() {
        return { element: this.provideText };
    }
}
