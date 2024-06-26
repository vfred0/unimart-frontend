import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TypeButton } from '@core/enums/type-button';
import { ArticleCardDto } from '@core/dtos/article/article-card.dto';
import { ButtonComponent } from '@components/button/button.component';
import { isNormal, TypeArticleCard } from '@core/enums/type-article-card';
import { Icon } from '@core/enums/icon';
import { Router } from '@angular/router';
import { AppRoute } from '@core/utils/app-route';
import { ParseDate } from '@core/utils/parse-date';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, NgOptimizedImage],
  templateUrl: './article-card.component.html',
})
export class ArticleCardComponent {
  @Input() articleCard: ArticleCardDto;
  @Input() typeArticleCard: TypeArticleCard;
  @Input() showNumberProposals: boolean;
  protected readonly TypeButton = TypeButton;
  protected readonly TypeArticleCard = TypeArticleCard;
  protected readonly Icon = Icon;

  constructor(protected router: Router) {
    this.typeArticleCard = this.TypeArticleCard.Normal;
    this.articleCard = {} as ArticleCardDto;
    this.showNumberProposals = true;
  }

  get isNormal(): boolean {
    return isNormal(this.typeArticleCard);
  }

  get date(): string {
    return ParseDate.toRelativeTime(this.articleCard.date);
  }

  getProposalsQuantity(): string {
    return this.articleCard.numbersProposals > 0
      ? `${this.articleCard.numbersProposals} propuestas`
      : 'Sin propuestas';
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
