import { inject, Injectable } from '@angular/core';
import { ProfilePageService } from '@shared/services/profile-page.service';
import { ArticleCard } from '@core/models/article-card';
import { SuggestArticleDto } from '@core/dtos/article/suggest-article.dto';
import { ArticleService } from '@shared/services/article.service';
import { AppRoute } from '@core/utils/app-route';
import { Router } from '@angular/router';

@Injectable()
export class SuggestArticlePageService {
  private profileService: ProfilePageService;
  private articleService: ArticleService;
  private category: string;

  constructor(private router: Router) {
    this.category = '';
    this.profileService = inject(ProfilePageService);
    this.articleService = inject(ArticleService);
  }

  get totalArticlesCards(): number {
    return this.articlesCards.length;
  }

  get articlesCards() {
    return this.profileService.articlesCards.filter(
      (articleCard: ArticleCard) => {
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

  suggestArticle(proposalArticleDto: SuggestArticleDto) {
    this.articleService.suggest(proposalArticleDto).subscribe(() => {
      this.router.navigate([AppRoute.Profile]).then();
    });
  }
}
