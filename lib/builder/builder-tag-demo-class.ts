import { TagElementOption } from '../type/element-option-interface';
import { TDemoElement } from '../type/element-type';
import { IElement } from '../unit/unit-interface';
import { ITagBuilder } from './builder-interface';

export class TagBuilderDemo implements ITagBuilder<TDemoElement> {
  public buildElement<P, S>(
    elementOption: TagElementOption<TDemoElement, P, S>
  ): IElement<TDemoElement> {
    const { name } = elementOption;
    return { element: name };
  }
}
