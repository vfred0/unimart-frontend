import { Category } from '@core/types/category';
import { State } from '@core/types/state';
import { Gender } from '@core/types/gender';
import { TypeArticle } from '@core/types/type-article';
import { User } from '@core/models/user';

export interface ArticleDto {
  id: string;
  user: User;
  title: string;
  description: string;
  images: Array<string>;
  category: Category;
  state: State;
  gender: Gender;
  typeArticle: TypeArticle;
  numbersProposals: number;
  date: string;
}
