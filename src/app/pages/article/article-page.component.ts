import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/enums/type-button';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { Icon } from '@core/enums/icon';
import { AppRoute } from '@core/utils/app-route';
import { TypeArticleCard } from '@core/enums/type-article-card';
import { HeaderDetailComponent } from '@components/header-detail/header-detail.component';
import { ArticlePageService } from '@shared/services/articles/article-page.service';
import { ExchangeService } from '@shared/services/exchanges/exchange.service';
import { ProposedArticleDto } from '@core/dtos/article/proposed-article.dto';

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
  typeArticle: TypeArticleCard;
  service: ArticlePageService;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;
  private readonly articleId: string;
  private exchangeService: ExchangeService;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.typeArticle = TypeArticleCard.Normal;
    this.service = inject(ArticlePageService);
    this.exchangeService = inject(ExchangeService);
    this.articleId = this.activatedRoute.snapshot.params['id'];
    this.service.getById(this.articleId);
  }

  get acceptProposals(): boolean {
    return (
      !this.service.isMyArticle && !this.service.hasProposedOrReceivedArticle
    );
  }

  get showMessagesProposedOrReceived(): boolean {
    return (
      !this.service.isMyArticle &&
      !this.showButtonsToExchangeArticle &&
      this.service.hasProposedOrReceivedArticle
    );
  }

  get showButtonsToExchangeArticle(): boolean {
    return (
      history.state.isExchangeArticle &&
      this.service.article.isAcceptableForExchange
    );
  }

  numberProposals(numbersProposals: number): string {
    return numbersProposals > 1
      ? `${numbersProposals} propuestas`
      : `${numbersProposals} propuesta`;
  }

  numbersOfExchanges(numberOfExchanges: number): string {
    return numberOfExchanges > 1
      ? `${numberOfExchanges} intercambios`
      : `${numberOfExchanges} intercambio`;
  }

  onContactWhatsApp() {
    console.log('Contactar por WhatsApp');
  }

  onAcceptProposedArticle() {
    const exchange = {
      receiverArticleId: history.state.articleId,
      proposerArticleId: this.articleId,
    } as ProposedArticleDto;
    this.exchangeService.accept(exchange).subscribe(() => {
      this.router.navigate([AppRoute.Exchanges]).then();
    });
  }

  onSuggestArticle() {
    this.router
      .navigate([`${AppRoute.Article}/${this.articleId}/${AppRoute.Suggest}`])
      .then();
  }
}
