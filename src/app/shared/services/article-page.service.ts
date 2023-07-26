import { inject, Injectable } from '@angular/core';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ArticleDto } from '@core/dtos/article.dto';
import { HttpClient } from '@angular/common/http';
import { HeaderDetail } from '@core/utils/header-detail';
import { ArticlePage } from '@core/models/article-page';
import { ArticleService } from '@shared/services/article.service';
import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { UserMapperService } from '@shared/services/mappers/user-mapper.service';
import { AuthService } from '@shared/services/auth.service';

@Injectable()
export class ArticlePageService {
  private apiSignalState = new ApiSignalState<ArticleDto>({} as ArticleDto);
  private http = inject(HttpClient);
  private articleMapper = inject(ArticleMapperService);
  private userMapper = inject(UserMapperService);
  private authService = inject(AuthService);
  private articleService: ArticleService = inject(ArticleService);

  get user() {
    return this.articlePage.user;
  }

  get headerDetail(): HeaderDetail {
    return this.userMapper.toHeaderDetails(this.apiSignalState.result().user);
  }

  get articlePage(): ArticlePage {
    return this.articleMapper.toArticlePage(this.apiSignalState.result());
  }

  get isMyArticle(): boolean {
    return this.authService.containsId(this.articlePage.user.id);
  }

  get isWorking() {
    return this.apiSignalState.isWorking();
  }

  get isCompleted() {
    return this.apiSignalState.isCompleted();
  }

  getById(id: string): void {
    const getById = this.articleService.getById(id);
    this.apiSignalState.execute(getById);
  }
}
