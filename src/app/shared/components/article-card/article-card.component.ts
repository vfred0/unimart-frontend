import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TypeButton } from '@core/types/type-button';
import { ArticleCard } from '@core/models/article-card';
import { ButtonComponent } from '@components/button/button.component';
import {
  isProposed,
  isPublished,
  isSuggest,
  TypeArticleCard,
} from '@core/types/type-article-card';
import { Icon } from '@core/utils/icon';

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

  get isSuggest(): boolean {
    return isSuggest(this.typeArticleCard);
  }

  get isProposed(): boolean {
    return isProposed(this.typeArticleCard);
  }

  protected readonly Icon = Icon;
}
