import { inject, Injectable } from '@angular/core';
import { ProfilePageService } from '@shared/services/profiles/profile-page.service';
import { ProposedArticleDto } from '@core/dtos/article/proposed-article.dto';
import { AppRoute } from '@core/utils/app-route';
import { Router } from '@angular/router';
import { ProposedArticleService } from '@shared/services/proposed-articles/proposed-article.service';
import { ArticleCardService } from '@shared/services/articles/article-card.service';
import { Category } from '@core/enums/category';

@Injectable({ providedIn: 'root' })
export class SuggestArticlePageService {
  private readonly profileService: ProfilePageService =
    inject(ProfilePageService);
  private readonly proposedArticleService: ProposedArticleService = inject(
    ProposedArticleService
  );

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
    this.articleCardService.setArticlesCards(this.profileService.articlesCards);
    return this.articleCardService.filterByTitleAndCategory(
      this.title,
      this.category
    );
  }

  get categories() {
    return this.profileService.categories;
  }

  get isCompleted() {
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
