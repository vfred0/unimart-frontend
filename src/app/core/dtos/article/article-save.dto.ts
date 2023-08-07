import { Category } from '@core/enums/category';
import { State } from '@core/enums/state';
import { Gender } from '@core/enums/gender';
import { TypeArticle } from '@core/enums/type-article';

export interface ArticleSaveDto {
  id: string;
  userId: string;
  title: string;
  description: string;
  images: Array<string>;
  category: Category;
  state: State;
  gender?: Gender;
  typeArticle: TypeArticle;
}
