export class Builder {
    constructor(entry) {
        const { builder } = entry;
        this.builder = new builder();
    }
    // public static setBuilders<K>(param: IBuilderSetBuildersIn<K>): void {
    //   const { tagBuilder, frameBuilder } = param;
    //   this.tagBuilderInstance = new Builder<K>({ builder: tagBuilder });
    //   this.frameBuilderInstance = new Builder<K>({ builder: frameBuilder });
    // }
    static getTagBuilder(param) {
        const { tagBuilderClass } = param;
        if (!this.tagBuilderInstance) {
            this.tagBuilderInstance = new Builder({ builder: tagBuilderClass });
        }
        return this.tagBuilderInstance;
    }
    static getFrameBuilder(param) {
        const { frameBuilderClass } = param;
        if (!this.frameBuilderInstance) {
            this.frameBuilderInstance = new Builder({ builder: frameBuilderClass });
        }
        return this.frameBuilderInstance;
    }
    buildElement(elementOption) {
        const { element } = this.builder.buildElement(elementOption);
        return { element };
    }
}
