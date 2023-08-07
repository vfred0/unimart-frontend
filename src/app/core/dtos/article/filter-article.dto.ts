import { Category } from '@core/enums/category';
import { State } from '@core/enums/state';

export interface FilterArticleDto {
  title: string;
  category: Category;
  state: State;
}
