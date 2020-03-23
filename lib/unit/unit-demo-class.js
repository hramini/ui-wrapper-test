import { FrameBuilderDemo } from '../builder/builder-frame-demo-class';
import { TagBuilderDemo } from '../builder/builder-tag-demo-class';
export class UnitDemo {
    constructor() { }
    onBeforeProvide() { }
    onAfterProvide() { }
    onBeforeUpdate() {
        return { shouldUpdate: true };
    }
    onAfterUpdate() { }
    onBeforeDispose() { }
    forceUpdate() { }
    alterState(param) {
        const { state, callback } = param;
        this.state = Object.assign(Object.assign({}, this.state), state);
        callback && callback();
    }
    getProvided() {
        const element = this.provided;
        return { element };
    }
    onProvide() {
        this.onBeforeProvide();
        const { element } = this.provide();
        this.provided = element;
        this.onAfterProvide();
    }
    onUpdate() {
        const { shouldUpdate } = this.onBeforeUpdate();
        if (shouldUpdate) {
            const { element } = this.provide();
            this.provided = element;
            this.onAfterUpdate();
        }
    }
    setProps(param) {
        const { properties } = param;
        this.props = properties;
    }
    getTagBuilder() {
        return { tagBuilderClass: TagBuilderDemo };
    }
    getFrameBuilder() {
        return { frameBuilderClass: FrameBuilderDemo };
    }
}
