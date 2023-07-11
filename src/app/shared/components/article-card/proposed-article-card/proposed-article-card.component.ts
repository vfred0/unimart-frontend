import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { ButtonComponent } from '@components/button/button.component';
import { Router } from '@angular/router';
import { AppRoute } from '@core/utils/app-route';
import { TypeArticleCard } from '@core/types/type-article-card';

@Component({
  selector: 'app-proposed-article-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ArticleCardComponent],
  templateUrl: './proposed-article-card.component.html',
})
export class ProposedArticleCardComponent extends ArticleCardComponent {
  @Output() deleteProposed: EventEmitter<string>;

  constructor(protected override router: Router) {
    super(router);
    this.deleteProposed = new EventEmitter<string>();
  }

  onDeleteProposed() {
    this.deleteProposed.emit(this.articleCard.id);
  }

  onViewPublication() {
    this.router
      .navigate([`${AppRoute.Article}/${this.articleCard.id}`], {
        state: { typeArticle: TypeArticleCard.Suggest },
      })
      .then();
  }
}
