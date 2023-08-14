import { inject, Injectable, Signal } from '@angular/core';
import { Service } from '@shared/services/service';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';
import { ArticleService } from '@shared/services/articles/article.service';
import { ArticleMapperService } from '@shared/mappers/article-mapper.service';
import { AuthService } from '@shared/services/auth.service';
import {
  isExchanged,
  isProposed,
  isPublished,
  TypeArticle,
} from '@core/enums/type-article';
import { ProposalService } from '@shared/services/proposals/proposal.service';
import { map } from 'rxjs';
import { ArticleDto } from '@core/dtos/article/article.dto';
import { UserService } from '@shared/services/user.service';
import { ArticleCardService } from '@shared/services/articles/article-card.service';

@Injectable({ providedIn: 'root' })
export class ProfilePageService extends Service<ArticleCardDto[]> {
  private readonly articleMapper: ArticleMapperService =
    inject(ArticleMapperService);
  private readonly articleService: ArticleService = inject(ArticleService);
  private readonly proposedArticleService: ProposalService =
    inject(ProposalService);
  private readonly authService: AuthService = inject(AuthService);
  private readonly userService: UserService = inject(UserService);
  private typeArticle: TypeArticle = TypeArticle.Published;
  private readonly articleCardService: ArticleCardService =
    inject(ArticleCardService);
  private title = '';

  constructor() {
    super([] as ArticleCardDto[]);
  }

  get isExchanged(): boolean {
    return isExchanged(this.typeArticle);
  }

  get isProposed(): boolean {
    return isProposed(this.typeArticle);
  }

  get containsPublishedArticles(): boolean {
    return this.articleCardService.containsPublishedArticles;
  }

  override get isCompleted(): Signal<boolean> {
    const isCompleted = super.isCompleted();
    if (isCompleted) {
      this.articleCardService.setArticlesCards(this.result());
    }
    return super.isCompleted;
  }

  get isPublished(): boolean {
    return isPublished(this.typeArticle);
  }

  get articlesCards(): ArticleCardDto[] {
    return this.articleCardService.filterByTitleAndTypeArticle(
      this.title,
      this.typeArticle
    );
  }

  get categories() {
    return this.articleCardService.getCategoriesNotExchanged();
  }

  allArticles(): void {
    const request = this.userService.getArticles(this.authService.userId).pipe(
      map((articles: ArticleDto[]) => {
        return articles.map((article: ArticleDto) =>
          this.articleMapper.toArticleCard(article)
        );
      })
    );
    this.execute(request);
  }

  filterByTitle(title: string) {
    this.title = title;
  }

  filterByTypeArticle(typeArticle: TypeArticle) {
    this.typeArticle = typeArticle;
  }

  deleteArticle(articleId: string) {
    this.articleService.delete(articleId).subscribe(() => {
      this.allArticles();
    });
  }

  deleteProposedArticleById(proposedArticleId: string) {
    this.proposedArticleService.deleteById(proposedArticleId).subscribe(() => {
      this.allArticles();
    });
  }
}
