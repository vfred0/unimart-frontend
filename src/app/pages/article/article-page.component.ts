import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/types/type-button';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { Icon } from '@core/types/icon';
import { AppRoute } from '@core/utils/app-route';
import { isProposed, TypeArticleCard } from '@core/types/type-article-card';
import { HeaderDetailComponent } from '@components/header-detail/header-detail.component';
import { ArticlePageService } from '@shared/services/article-page.service';
import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { UserMapperService } from '@shared/services/mappers/user-mapper.service';
import { ExchangeService } from '@shared/services/exchange.service';
import { ProfilePageService } from '@shared/services/profile-page.service';
import { ProposedArticlesPageService } from '@shared/services/proposed-articles-page.service';
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
  providers: [
    ArticlePageService,
    ArticleMapperService,
    UserMapperService,
    ExchangeService,
    ProfilePageService,
    ProposedArticlesPageService,
  ],
  templateUrl: './article-page.component.html',
})
export class ArticlePageComponent {
  typeArticle: TypeArticleCard;
  service: ArticlePageService;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;
  private readonly id: string;
  private exchangeService: ExchangeService;
  private proposedArticleService: ProposedArticlesPageService;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.typeArticle = TypeArticleCard.Normal;
    this.service = inject(ArticlePageService);
    this.exchangeService = inject(ExchangeService);
    this.proposedArticleService = inject(ProposedArticlesPageService);
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.setIsProposed(this.id);
    if (this.containsArticleDto()) {
      this.typeArticle = history.state.articleDto.typeArticle;
      this.service.setArticleDto(history.state.articleDto);
    } else {
      this.service.getById(this.id);
    }
  }

  get acceptSuggest(): boolean {
    return (
      !this.isProposed && !this.service.isMyArticle && !this.service.isProposed
    );
  }

  get isExchangeArticle(): boolean {
    return history.state.isExchangeArticle;
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

  onContactWhatsApp() {
    console.log('Contactar por WhatsApp');
  }

  onAcceptProposedArticle() {
    const exchange = {
      articleId: history.state.articleId,
      proposedArticleId: this.id,
    } as ProposedArticleDto;
    this.exchangeService.save(exchange).subscribe(() => {
      this.router.navigate([AppRoute.Exchanges]).then();
    });
  }

  onSuggestArticle() {
    this.router
      .navigate([`${AppRoute.Article}/${this.id}/${AppRoute.Suggest}`])
      .then();
  }

  private containsArticleDto() {
    return (
      history.state.hasOwnProperty('articleDto') &&
      Object.keys(history.state.articleDto).length !== 0
    );
  }
}
