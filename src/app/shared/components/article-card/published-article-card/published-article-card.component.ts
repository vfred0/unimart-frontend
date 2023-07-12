import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { ButtonComponent } from '@components/button/button.component';
import { AppRoute } from '@core/utils/app-route';
import { Router } from '@angular/router';

@Component({
  selector: 'app-published-article-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ArticleCardComponent],
  templateUrl: './published-article-card.component.html',
})
export class PublishedArticleCardComponent extends ArticleCardComponent {
  @Output() deleteArticle: EventEmitter<string>;

  constructor(protected override router: Router) {
    super(router);
    this.deleteArticle = new EventEmitter<string>();
  }

  onShowProposals() {
    this.router
      .navigate([`${AppRoute.ProfileProposedArticles}/${this.articleCard.id}`])
      .then();
  }

  onEditArticle() {
    this.router
      .navigate([`${AppRoute.EditArticle}/${this.articleCard.id}`])
      .then();
  }

  onDeleteArticle() {
    this.deleteArticle.emit(this.articleCard.id);
  }
}
