import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { ButtonComponent } from '@components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggest-articles-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ArticleCardComponent],
  templateUrl: './suggest-article-card.component.html',
})
export class SuggestArticleCardComponent extends ArticleCardComponent {
  @Output() suggestArticle: EventEmitter<string>;

  constructor(protected override router: Router) {
    super(router);
    this.suggestArticle = new EventEmitter<string>();
  }

  onSuggestArticle(articleId: string) {
    this.suggestArticle.emit(articleId);
  }
}
