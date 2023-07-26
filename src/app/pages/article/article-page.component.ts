import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/types/type-button';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { Icon } from '@core/types/icon';
import { AppRoute } from '@core/utils/app-route';
import {
  isProposed,
  isSuggest,
  TypeArticleCard,
} from '@core/types/type-article-card';
import { HeaderDetailComponent } from '@components/header-detail/header-detail.component';
import { ArticlePageService } from '@shared/services/article-page.service';
import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { UserMapperService } from '@shared/services/mappers/user-mapper.service';
import { ExchangeDto } from '@core/dtos/exchange.dto';
import { ExchangeService } from '@shared/services/exchange.service';

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
  providers: [
    ArticlePageService,
    ArticleMapperService,
    UserMapperService,
    ExchangeService,
  ],
  templateUrl: './article-page.component.html',
})
export class ArticlePageComponent {
  typeArticle: TypeArticleCard;
  articlePageService: ArticlePageService;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;
  private readonly id: string;
  private exchangeService: ExchangeService;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.typeArticle = history.state.typeArticle;
    this.articlePageService = inject(ArticlePageService);
    this.exchangeService = inject(ExchangeService);
    this.id = this.activatedRoute.snapshot.params['id'];
    this.articlePageService.getById(this.id);
  }

  get isOnlyViewPublication(): boolean {
    return history.state.onlyViewPublication;
  }

  get isSuggest(): boolean {
    return isSuggest(this.typeArticle);
  }

  get isProposed(): boolean {
    return isProposed(this.typeArticle);
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

  onSuggestOrProposedArticle() {
    const isSuggest = !this.isProposed;
    if (isSuggest) {
      this.router
        .navigate([`${AppRoute.Article}/${this.id}/${AppRoute.Suggest}`])
        .then();
    } else {
      const exchange = {
        articleId: this.id,
        articleProposedId: history.state.articleProposedId,
      } as ExchangeDto;
      this.exchangeService.save(exchange).subscribe(() => {
        this.router.navigate([AppRoute.Exchanges]).then();
      });
    }
  }

  onContactWhatsApp() {
    console.log('Contactar por WhatsApp');
  }
}
