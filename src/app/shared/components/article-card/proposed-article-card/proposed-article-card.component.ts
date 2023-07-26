import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { ButtonComponent } from '@components/button/button.component';
import { Router } from '@angular/router';
import { AppRoute } from '@core/utils/app-route';
import { TypeArticleCard } from '@core/types/type-article-card';
import { ProposedArticlesPageService } from '@shared/services/proposed-articles-page.service';

@Component({
  selector: 'app-proposed-article-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ArticleCardComponent],
  templateUrl: './proposed-article-card.component.html',
})
export class ProposedArticleCardComponent extends ArticleCardComponent {
  @Input() onlyViewPublication: boolean;
  @Output() deleteProposed: EventEmitter<string>;

  constructor(
    protected override router: Router,
    private service: ProposedArticlesPageService
  ) {
    super(router);
    this.onlyViewPublication = false;
    this.deleteProposed = new EventEmitter<string>();
  }

  onDeleteProposed() {
    console.log('onDeleteProposed');
    this.deleteProposed.emit(this.articleCard.id);
  }

  onViewPublication() {
    let state = {
      typeArticle: TypeArticleCard.Proposed,
      onlyViewPublication: false,
      articleProposedId: this.service.proposedId,
    };
    if (this.onlyViewPublication) {
      state = {
        typeArticle: TypeArticleCard.Proposed,
        onlyViewPublication: true,
        articleProposedId: '',
      };
    }
    this.router
      .navigate([`${AppRoute.Article}/${this.articleCard.id}`], { state })
      .then();
  }
}
