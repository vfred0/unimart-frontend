import { UserDto } from '@core/dtos/user.dto';
import { Article } from '@core/models/article';

export interface ArticlePage extends Article {
  image: string;
  date: string;
  numbersProposals: number;
  user: UserDto;
}
