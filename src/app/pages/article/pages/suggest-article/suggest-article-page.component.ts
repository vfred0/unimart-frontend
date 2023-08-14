import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { HeaderComponent } from '@components/header/header.component';
import { SelectComponent } from '@components/select/select.component';
import { InputComponent } from '@components/input/input.component';
import { SuggestArticleCardComponent } from '@components/article-card/suggest-article-card/suggest-article-card.component';
import { AppRoute, getLayout } from '@core/utils/app-route';
import { SuggestArticlePageService } from '@shared/services/proposals/suggest-article-page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProposedArticleDto } from '@core/dtos/article/proposed-article.dto';
import { ProfilePageService } from '@shared/services/profiles/profile-page.service';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/enums/type-button';
import { Icon } from '@core/enums/icon';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ArticleCardComponent,
    HeaderComponent,
    SelectComponent,
    InputComponent,
    SuggestArticleCardComponent,
    ButtonComponent,
  ],
  providers: [SuggestArticlePageService, ProfilePageService],
  templateUrl: './suggest-article-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestArticlePageComponent {
  title: string;
  service: SuggestArticlePageService;
  protected readonly getLayout = getLayout;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.service = inject(SuggestArticlePageService);
    this.title = '';
    this.service.allArticles();
  }

  onTitleSearchChanged(title: string) {
    this.service.filterByTitle(title);
  }

  onSelectedCategory(category: string) {
    this.service.filterByCategory(category);
  }

  onSuggestArticle(articleId: string) {
    const proposalArticleDto: ProposedArticleDto = {
      receiverArticleId: this.activateRoute.snapshot.params['id'],
      proposerArticleId: articleId,
    } as ProposedArticleDto;
    this.service.proposedArticle(proposalArticleDto);
  }

  onPublishArticle() {
    this.router.navigate([AppRoute.PublishArticle]).then();
  }
}
