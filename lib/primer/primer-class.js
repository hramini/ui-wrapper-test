export class Primer {
    constructor(entry) {
        const { primer } = entry;
        this.entryPrimer = new primer();
    }
    // public getTagBuilder(): IPrimerGetTagBuilderOut<T> {
    //   const { tagBuilder } = this.entryPrimer.getTagBuilder();
    //   return { tagBuilder };
    // }
    // public getFrameBuilder(): IPrimerGetFrameBuilderOut<T> {
    //   const { frameBuilder } = this.entryPrimer.getFrameBuilder();
    //   return { frameBuilder };
    // }
    getElement() {
        return { element: this.element };
    }
    setElement(param) {
        const { element } = param;
        this.element = element;
    }
    getTarget() {
        return { target: this.target };
    }
    setTarget(param) {
        const { target } = param;
        this.target = target;
    }
    start() {
        const { element } = this.getElement();
        const { target } = this.getTarget();
        this.entryPrimer.start({
            element,
            target
        });
    }
}
