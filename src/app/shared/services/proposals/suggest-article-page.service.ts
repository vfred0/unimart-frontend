import { inject, Injectable } from '@angular/core';
import { ProfilePageService } from '@shared/services/profiles/profile-page.service';
import { ProposedArticleDto } from '@core/dtos/article/proposed-article.dto';
import { AppRoute } from '@core/utils/app-route';
import { Router } from '@angular/router';
import { ProposalService } from '@shared/services/proposals/proposal.service';
import { ArticleCardService } from '@shared/services/articles/article-card.service';
import { Category } from '@core/enums/category';
import { isExchanged, isProposed, TypeArticle } from '@core/enums/type-article';

@Injectable({ providedIn: 'root' })
export class SuggestArticlePageService {
  private readonly profileService: ProfilePageService =
    inject(ProfilePageService);
  private readonly proposedArticleService: ProposalService =
    inject(ProposalService);

  private readonly articleCardService: ArticleCardService =
    inject(ArticleCardService);

  private readonly router: Router = inject(Router);
  private category: Category = {} as Category;
  private title = '';

  get containsPublishedArticles(): boolean {
    return this.profileService.containsPublishedArticles;
  }

  get totalArticlesCards(): number {
    return this.articlesCards.length;
  }

  get articlesCards() {
    return this.articleCardService
      .filterByTitleAndCategory(this.title, this.category)
      .filter(
        articleCard =>
          !isProposed(articleCard.typeArticle as TypeArticle) &&
          !isExchanged(articleCard.typeArticle as TypeArticle)
      );
  }

  get categories() {
    return this.articleCardService.filterCategoriesNotProposedAndExchanged();
  }

  get isCompleted() {
    const isCompleted = this.profileService.isCompleted();
    if (isCompleted) {
      this.articleCardService.setArticlesCards(
        this.profileService.articlesCards
      );
    }
    return this.profileService.isCompleted();
  }

  get isWorking() {
    return this.profileService.isWorking();
  }

  allArticles(): void {
    this.profileService.allArticles();
  }

  filterByTitle(title: string) {
    this.title = title;
  }

  filterByCategory(category: string) {
    this.category = category as Category;
  }

  proposedArticle(proposedArticleDto: ProposedArticleDto) {
    this.proposedArticleService.save(proposedArticleDto).subscribe(() => {
      this.router.navigate([AppRoute.Profile]).then();
    });
  }
}
