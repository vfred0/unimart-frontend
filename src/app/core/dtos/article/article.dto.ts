import { Category } from '@core/types/category';
import { State } from '@core/types/state';
import { Gender } from '@core/types/gender';
import { TypeArticle } from '@core/types/type-article';
import { UserDto } from '@core/dtos/user.dto';

export interface ArticleDto {
  id: string;
  userId: string;
  user: UserDto;
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
