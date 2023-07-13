import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TypeButton } from '@core/types/type-button';
import { ArticleCard } from '@core/models/article-card';
import { ButtonComponent } from '@components/button/button.component';
import { isNormal, TypeArticleCard } from '@core/types/type-article-card';
import { Icon } from '@core/utils/icon';
import { Router } from '@angular/router';
import { AppRoute } from '@core/utils/app-route';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, NgOptimizedImage],
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  @Input() articleCard: ArticleCard;
  @Input() typeArticleCard: TypeArticleCard;
  protected readonly TypeButton = TypeButton;
  protected readonly TypeArticleCard = TypeArticleCard;
  protected readonly Icon = Icon;

  constructor(protected router: Router) {
    this.typeArticleCard = this.TypeArticleCard.Normal;
    this.articleCard = {} as ArticleCard;
  }

  get isNormal(): boolean {
    return isNormal(this.typeArticleCard);
  }

  getProposalsQuantity(): string {
    return `${this.articleCard.proposalsQuantity} propuestas`;
  }

  navigateToViewArticle() {
    if (isNormal(this.typeArticleCard)) {
      this.router
        .navigate([`${AppRoute.Article}/${this.articleCard.id}`], {
          state: { typeArticle: this.typeArticleCard },
        })
        .then();
    }
  }
}
