import { Category } from '@core/types/category';
import { State } from '@core/types/state';
import { Gender } from '@core/types/gender';
import { TypeArticle } from '@core/types/type-article';

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
  // numberProposals: number;
}
