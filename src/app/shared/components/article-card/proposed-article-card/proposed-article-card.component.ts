import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { ButtonComponent } from '@components/button/button.component';
import { Router } from '@angular/router';
import { AppRoute } from '@core/utils/app-route';
import { ProposedArticleService } from '@shared/services/proposed-article.service';
import { ArticleDto } from '@core/dtos/article/article.dto';
import { TypeArticle } from '@core/types/type-article';

@Component({
  selector: 'app-proposed-article-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ArticleCardComponent],
  providers: [ProposedArticleService],
  templateUrl: './proposed-article-card.component.html',
})
export class ProposedArticleCardComponent extends ArticleCardComponent {
  @Input() isExchangeArticle: boolean;
  @Input() searchProposed: boolean;
  @Output() deleteProposed: EventEmitter<string>;

  constructor(
    protected override router: Router,
    private proposedArticleService: ProposedArticleService
  ) {
    super(router);
    this.isExchangeArticle = true;
    this.searchProposed = false;
    this.deleteProposed = new EventEmitter<string>();
  }

  onDeleteProposed() {
    this.deleteProposed.emit(this.articleCard.id);
  }

  onViewPublication() {
    const state = this.getState();
    if (this.searchProposed) {
      this.proposedArticleService
        .getArticleByProposedArticleId(this.articleCard.id)
        .subscribe(article => {
          state.articleDto = article;
          this.router
            .navigate([`${AppRoute.Article}/${article.id}`], {
              state,
            })
            .then();
        });
    } else {
      this.router
        .navigate([`${AppRoute.Article}/${this.articleCard.id}`], {
          state,
        })
        .then();
    }
  }

  private getState() {
    return {
      typeArticle: TypeArticle.Proposed,
      isExchangeArticle: this.isExchangeArticle,
      articleDto: {} as ArticleDto,
    };
  }
}
