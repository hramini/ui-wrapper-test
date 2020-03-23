import { CustomDemo } from '../unit/custom-demo-unit';
import { Builder } from './builder-class';
import { FrameBuilderDemo } from './builder-frame-demo-class';
import { TagBuilderDemo } from './builder-tag-demo-class';
describe('@Builder', () => {
    describe('#geTagBuilder', () => {
        test('test getTagBuilder with TagBuilderDemo', () => {
            const createInstanceTagBuilder = Builder.getTagBuilder({
                tagBuilderClass: TagBuilderDemo
            });
            const useCreatedInstanceTagBuilder = Builder.getTagBuilder({
                tagBuilderClass: TagBuilderDemo
            });
            expect(createInstanceTagBuilder).toBeInstanceOf(Builder);
            expect(useCreatedInstanceTagBuilder).toBeInstanceOf(Builder);
        });
    });
    describe('#geFrameBuilder', () => {
        test('test getFrameBuilder with FrameBuilderDemo', () => {
            const createInstanceFrameBuilder = Builder.getFrameBuilder({
                frameBuilderClass: FrameBuilderDemo
            });
            const useCreatedInstanceFrameBuilder = Builder.getFrameBuilder({
                frameBuilderClass: FrameBuilderDemo
            });
            expect(createInstanceFrameBuilder).toBeInstanceOf(Builder);
            expect(useCreatedInstanceFrameBuilder).toBeInstanceOf(Builder);
        });
    });
    // describe('#setBuilders', () => {
    //   test('test setBuilder for tagBuilder using getTagBuilder', () => {
    //     expect(tagBuilder).toBeInstanceOf(Builder);
    //     expect(frameBuilder).toBeInstanceOf(Builder);
    //   });
    //   test('test setBuilder for tagBuilder using getTagBuilder', () => {});
    // });
    describe('#buildElement', () => {
        test('test buildElement method of tagBuilder', () => {
            const tagBuilder = Builder.getTagBuilder({
                tagBuilderClass: TagBuilderDemo
            });
            const { element } = tagBuilder.buildElement({
                name: 'test-tag',
                properties: null,
                children: []
            });
            expect(element).toBe('test-tag');
        });
        test('test buildElement method of frameBuilder', () => {
            const frameBuilder = Builder.getFrameBuilder({
                frameBuilderClass: FrameBuilderDemo
            });
            const { element } = frameBuilder.buildElement({
                name: CustomDemo,
                properties: null,
                children: []
            });
            expect(element).toBe('on-constructor');
        });
    });
});
