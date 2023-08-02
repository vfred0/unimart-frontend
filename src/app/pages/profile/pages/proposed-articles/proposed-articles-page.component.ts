import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { ArticleCardComponent } from '@components/article-card/article-card.component';
import { ActivatedRoute } from '@angular/router';
import { SelectComponent } from '@components/select/select.component';
import { getLayout } from '@core/utils/app-route';
import { ProposedArticleCardComponent } from '@components/article-card/proposed-article-card/proposed-article-card.component';
import { ProposedArticlesPageService } from '@shared/services/proposed-articles-page.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ArticleCardComponent,
    SelectComponent,
    ProposedArticleCardComponent,
  ],
  providers: [ProposedArticlesPageService],
  templateUrl: './proposed-articles-page.component.html',
})
export class ProposedArticlesPageComponent implements AfterViewInit {
  service: ProposedArticlesPageService;
  protected readonly getLayout = getLayout;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
    this.service = inject(ProposedArticlesPageService);
    this.service.articleId = this.activatedRoute.snapshot.params['articleId'];
  }

  ngAfterViewInit(): void {
    this.service.proposedArticles(
      this.activatedRoute.snapshot.params['articleId']
    );
    this.cd.detectChanges();
  }

  onSelectedCategory(category: string) {
    this.service.filterByCategory(category);
  }

  onDeletedProposed(proposedArticleId: string) {
    this.service.deleteProposed(proposedArticleId);
  }
}
