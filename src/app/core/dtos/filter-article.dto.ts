import { Category } from '@core/types/category';
import { State } from '@core/types/state';

export interface FilterArticleDto {
  title: string;
  category: Category;
  state: State;
}
