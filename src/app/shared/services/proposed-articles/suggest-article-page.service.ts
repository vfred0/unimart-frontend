import { inject, Injectable } from '@angular/core';
import { ProfilePageService } from '@shared/services/profiles/profile-page.service';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';
import { ProposedArticleDto } from '@core/dtos/article/proposed-article.dto';
import { AppRoute } from '@core/utils/app-route';
import { Router } from '@angular/router';
import { ProposedArticleService } from '@shared/services/proposed-articles/proposed-article.service';

@Injectable({ providedIn: 'root' })
export class SuggestArticlePageService {
  private readonly profileService: ProfilePageService =
    inject(ProfilePageService);
  private readonly proposedArticleService: ProposedArticleService = inject(
    ProposedArticleService
  );
  private readonly router: Router = inject(Router);
  private category = '';

  get containsPublishedArticles(): boolean {
    return this.profileService.containsPublishedArticles;
  }

  get totalArticlesCards(): number {
    return this.articlesCards.length;
  }

  get articlesCards() {
    return this.profileService.articlesCards.filter(
      (articleCard: ArticleCardDto) => {
        return articleCard.category.includes(this.category);
      }
    );
  }

  get categories() {
    return this.profileService.categories;
  }

  get isCompleted() {
    return this.profileService.isCompleted;
  }

  get isWorking() {
    return this.profileService.isWorking;
  }

  allArticles(): void {
    this.profileService.allArticles();
  }

  filterByTitle(title: string) {
    this.profileService.filterByTitle(title);
  }

  filterByCategory(category: string) {
    this.category = category;
  }

  proposedArticle(proposedArticleDto: ProposedArticleDto) {
    this.proposedArticleService.save(proposedArticleDto).subscribe(() => {
      this.router.navigate([AppRoute.Profile]).then();
    });
  }
}
