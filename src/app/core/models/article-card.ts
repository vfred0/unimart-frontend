import { Category } from '@core/types/category';
import { State } from '@core/types/state';

export interface ArticleCard {
  id: string;
  image: string;
  title: string;
  dateOfPublication: string;
  proposalsQuantity: number;
  category: Category;
  state: State;
}
