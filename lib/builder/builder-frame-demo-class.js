export class FrameBuilderDemo {
    buildElement(elementOption) {
        const { name } = elementOption;
        const unit = new name();
        const { element } = unit.provide();
        return { element };
    }
}
