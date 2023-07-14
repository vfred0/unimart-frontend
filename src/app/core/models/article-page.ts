import { User } from '@core/models/user';
import { Article } from '@core/models/article';

export interface ArticlePage extends Article {
  image: string;
  datePublished: string;
  proposalsQuantity: number;
  user: User;
}
