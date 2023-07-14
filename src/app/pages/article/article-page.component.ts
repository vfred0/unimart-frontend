import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/types/type-button';
import { ArticlePage } from '@core/models/article-page';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { Data } from '@core/utils/data';
import { Icon } from '@core/types/icon';
import { AppRoute } from '@core/utils/app-route';
import {
  isProposed,
  isSuggest,
  TypeArticleCard,
} from '@core/types/type-article-card';
import { HeaderDetailComponent } from '@components/header-detail/header-detail.component';
import { HeaderDetail } from '@core/utils/header-detail';

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
  articlePage: ArticlePage;
  typeArticle: TypeArticleCard;
  headerDetail: HeaderDetail;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.articlePage = Data.articlePage;
    this.typeArticle = history.state.typeArticle;
    this.headerDetail = Data.headerDetail;
  }

  get isOnlyViewPublication(): boolean {
    return history.state.onlyViewPublication;
  }

  get isSuggest(): boolean {
    return isSuggest(this.typeArticle);
  }

  get proposalsQuantity(): string {
    return this.articlePage.proposalsQuantity > 1
      ? `${this.articlePage.proposalsQuantity} propuestas`
      : `${this.articlePage.proposalsQuantity} propuesta`;
  }

  get rating(): string {
    return this.articlePage.user.rating.toString();
  }

  get exchangesQuantity(): string {
    return this.articlePage.user.numberOfExchanges > 1
      ? `${this.articlePage.user.numberOfExchanges} intercambios`
      : `${this.articlePage.user.numberOfExchanges} intercambio`;
  }

  get isProposed(): boolean {
    return isProposed(this.typeArticle);
  }

  onSuggestOrProposedArticle() {
    const isSuggest = !this.isProposed;
    if (isSuggest) {
      this.router
        .navigate([
          `${AppRoute.Article}/${this.articlePage.id}/${AppRoute.Suggest}`,
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
