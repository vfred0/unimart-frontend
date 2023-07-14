import { Category } from '@core/types/category';
import { State } from '@core/types/state';
import { Gender } from '@core/types/gender';

export interface Article {
  id: string;
  title: string;
  description: string;
  category: Category;
  state: State;
  gender: Gender;
  images: Array<string>;
}
