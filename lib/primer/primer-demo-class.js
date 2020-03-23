export class PrimerDemo {
    // public getTagBuilder(): IPrimerGetTagBuilderOut<TDemoElement> {
    //   return { tagBuilder: TagBuilderDemo };
    // }
    // public getFrameBuilder(): IPrimerGetFrameBuilderOut<TDemoElement> {
    //   return { frameBuilder: FrameBuilderDemo };
    // }
    start(param) {
        const { element, target } = param;
        target.innerHTML = element;
    }
}
