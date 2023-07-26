import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { HeaderComponent } from '@components/header/header.component';
import { SelectComponent } from '@components/select/select.component';
import { InputComponent } from '@components/input/input.component';
import { SuggestArticleCardComponent } from '@components/article-card/suggest-article-card/suggest-article-card.component';
import { getLayout } from '@core/utils/app-route';
import { SuggestArticlePageService } from '@shared/services/suggest-article-page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestArticleDto } from '@core/dtos/article/suggest-article.dto';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ArticleCardComponent,
    HeaderComponent,
    SelectComponent,
    InputComponent,
    SuggestArticleCardComponent,
  ],
  providers: [SuggestArticlePageService],
  templateUrl: './suggest-article-page.component.html',
})
export class SuggestArticlePageComponent {
  title: string;
  service: SuggestArticlePageService;
  protected readonly getLayout = getLayout;

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

  onSuggestArticle(articleId: string) {
    const proposalArticleDto: SuggestArticleDto = {
      articleId: this.activateRoute.snapshot.params['id'],
      suggestArticleId: articleId,
    } as SuggestArticleDto;

    this.service.suggestArticle(proposalArticleDto);
  }

  onSelectedCategory(category: string) {
    this.service.filterByCategory(category);
  }
}
