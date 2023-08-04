import { Category } from '@core/types/category';
import { State } from '@core/types/state';
import { TypeArticle } from '@core/types/type-article';

export interface ArticleCardDto {
  id: string;
  image: string;
  title: string;
  date: string;
  numbersProposals: number;
  category: Category;
  state: State;
  typeArticle?: TypeArticle;
  receiverArticleId: string;
  acceptProposals: boolean;
}
