import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { ButtonComponent } from '@components/button/button.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoute } from '@core/utils/app-route';
import { ProposedArticleService } from '@shared/services/proposed-article.service';
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
  @Input() showReceiverArticle: boolean;
  @Output() deleteProposed: EventEmitter<string>;
  private readonly articleId: string;

  constructor(
    protected override router: Router,
    protected activateRoute: ActivatedRoute
  ) {
    super(router);
    this.isExchangeArticle = true;
    this.showReceiverArticle = false;
    this.articleId = activateRoute.snapshot.params['articleId'];
    this.deleteProposed = new EventEmitter<string>();
  }

  onDeleteProposed() {
    this.deleteProposed.emit(this.articleCard.id);
  }

  onViewPublication() {
    const state = this.getState();
    let articleId = this.articleCard.id;
    if (this.showReceiverArticle) {
      articleId = this.articleCard.receiverArticleId;
    }
    this.router
      .navigate([`${AppRoute.Article}/${articleId}`], {
        state,
      })
      .then();
  }

  private getState() {
    if (this.isExchangeArticle) {
      return {
        typeArticle: TypeArticle.Proposed,
        articleId: this.articleId,
        isExchangeArticle: this.isExchangeArticle,
      };
    }
    return {
      typeArticle: TypeArticle.Proposed,
      isExchangeArticle: this.isExchangeArticle,
    };
  }
}
