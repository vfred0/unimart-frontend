import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/types/type-button';
import { Article } from '@core/models/article';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { Data } from '@core/utils/data';
import { Icon } from '@core/utils/icon';
import { AppRoute } from '@core/utils/app-route';
import {
  isProposed,
  isSuggest,
  TypeArticleCard,
} from '@core/types/type-article-card';
import { HeaderDetailComponent } from '@components/header-detail/header-detail.component';
import { HeaderDetail } from '@core/types/header-detail';

@Component({
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    ButtonComponent,
    GalleryComponent,
    HeaderComponent,
    HeaderDetailComponent,
  ],
  templateUrl: './article-page.component.html',
})
export class ArticlePageComponent {
  article: Article;
  typeArticle: TypeArticleCard;
  headerDetail: HeaderDetail;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.article = Data.article;
    this.typeArticle = history.state.typeArticle;
    this.headerDetail = Data.headerDetail;
  }

  get isOnlyViewPublication(): boolean {
    const onlyViewPublication = history.state.onlyViewPublication;
    if (onlyViewPublication !== undefined) {
      return onlyViewPublication;
    }
    return false;
  }

  get isSuggest(): boolean {
    return isSuggest(this.typeArticle);
  }

  get proposalsQuantity(): string {
    return this.article.proposalsQuantity > 1
      ? `${this.article.proposalsQuantity} propuestas`
      : `${this.article.proposalsQuantity} propuesta`;
  }

  get rating(): string {
    return this.article.user.rating.toString();
  }

  get exchangesQuantity(): string {
    return this.article.user.numberOfExchanges > 1
      ? `${this.article.user.numberOfExchanges} intercambios`
      : `${this.article.user.numberOfExchanges} intercambio`;
  }

  get isProposed(): boolean {
    return isProposed(this.typeArticle);
  }

  onSuggestOrProposedArticle() {
    const isSuggest = !this.isProposed;
    if (isSuggest) {
      this.router
        .navigate([
          `${AppRoute.Article}/${this.article.id}/${AppRoute.Suggest}`,
        ])
        .then();
    } else {
      console.log('Aceptar propuesta');
    }
  }

  onContactWhatsApp() {
    console.log('Contactar por WhatsApp');
  }
}
