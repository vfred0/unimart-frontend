import { inject, Injectable } from '@angular/core';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ArticleDto } from '@core/dtos/article/article.dto';
import { HeaderDetail } from '@core/utils/header-detail';
import { ArticleService } from '@shared/services/articles/article.service';
import { UserMapperService } from '@shared/mappers/user-mapper.service';
import { AuthService } from '@shared/services/auth.service';
import { map } from 'rxjs';
import { ArticleMapperService } from '@shared/mappers/article-mapper.service';

@Injectable({
  providedIn: 'root',
})
export class ArticlePageService extends ApiSignalState<ArticleDto> {
  private readonly userMapper: UserMapperService = inject(UserMapperService);
  private readonly authService: AuthService = inject(AuthService);
  private readonly articleService: ArticleService = inject(ArticleService);
  private readonly articleMapper: ArticleMapperService =
    inject(ArticleMapperService);

  constructor() {
    super({} as ArticleDto);
  }

  get hasProposedOrReceivedArticle(): boolean {
    return this.hasProposedArticle || this.hasReceivedProposal;
  }

  get hasReceivedProposal(): boolean {
    if (this.articleContainsProperty('receiverUserIdForArticle')) {
      return this.article.receiverUserIdForArticle === this.authService.user.id;
    }
    return false;
  }

  get hasProposedArticle(): boolean {
    if (this.articleContainsProperty('proposersUserIdsForArticle')) {
      return this.article.proposersUserIdsForArticle.includes(
        this.authService.user.id as string
      );
    }
    return false;
  }

  get user() {
    return this.article.user;
  }

  get headerDetail(): HeaderDetail {
    return this.userMapper.toHeaderDetails(this.user);
  }

  get article(): ArticleDto {
    return this.result();
  }

  get isMyArticle(): boolean {
    return this.authService.containsId(this.article.user.id as string);
  }

  getById(id: string): void {
    const getById = this.articleService.getById(id).pipe(
      map((article: ArticleDto) => {
        return this.articleMapper.mapTypesToCamelCase(article);
      })
    );

    this.execute(getById);
  }

  private articleContainsProperty(property: string) {
    return this.article.hasOwnProperty(property);
  }
}
