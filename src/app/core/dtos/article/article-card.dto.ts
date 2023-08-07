import { Category } from '@core/enums/category';
import { State } from '@core/enums/state';
import { TypeArticle } from '@core/enums/type-article';

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
