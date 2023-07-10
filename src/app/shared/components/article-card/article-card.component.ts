import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TypeButton } from '@core/types/type-button';
import { ArticleCard } from '@core/models/article-card';
import { ButtonComponent } from '@components/button/button.component';
import {
  TypeArticleCard,
  isPropose,
  isProposed,
  isPublished,
} from '@core/types/type-article-card';

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
  protected readonly TypeArticle = TypeArticleCard;

  constructor() {
    this.typeArticleCard = TypeArticleCard.Normal;
    this.articleCard = {} as ArticleCard;
  }

  getProposalsQuantity(): string {
    return `${this.articleCard.proposalsQuantity} propuestas`;
  }

  get isPublished(): boolean {
    return isPublished(this.typeArticleCard);
  }

  get isPropose(): boolean {
    return isPropose(this.typeArticleCard);
  }

  get isProposed(): boolean {
    return isProposed(this.typeArticleCard);
  }
}
