import { inject, Injectable } from '@angular/core';
import { Service } from '@shared/services/service';
import { ArticleDto } from '@core/dtos/article/article.dto';
import { ArticleService } from '@shared/services/articles/article.service';
import { AuthService } from '@shared/services/auth.service';
import { AppRoute } from '@core/utils/app-route';
import { Router } from '@angular/router';

import { ArticleMapperService } from '@shared/mappers/article-mapper.service';
import { map } from 'rxjs';
import { ArticleForm } from '@shared/services/articles/article-form';

@Injectable({
  providedIn: 'root',
})
export class PublishArticlePageService extends Service<ArticleDto> {
  private readonly articleService: ArticleService;
  private readonly articleMapper: ArticleMapperService;
  private readonly authService: AuthService;
  private readonly router: Router;
  private articleForm: ArticleForm;
  private isUpdate: boolean;

  constructor() {
    super({} as ArticleDto);
    this.articleService = inject(ArticleService);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.articleMapper = inject(ArticleMapperService);
    this.isUpdate = false;
    this.articleForm = new ArticleForm();
    this.setSucceed(this.articleForm.article);
  }

  get gender(): string {
    return this.articleForm.gender;
  }

  get withGender(): boolean {
    return this.articleForm.withGender;
  }

  get article(): ArticleDto {
    return this.articleForm.article;
  }

  override get isCompleted() {
    const isCompleted = super.isCompleted();
    if (isCompleted && this.isUpdate) {
      this.articleForm.setValuesFromArticle(this.result());
      this.isUpdate = false;
    }
    return super.isCompleted;
  }

  get isFormValid(): boolean {
    return this.articleForm.isFormValid;
  }

  get images(): Array<string> {
    return this.article.images;
  }

  get containsImages(): boolean {
    return this.images.length > 0;
  }

  deleteImages() {
    this.articleForm.deleteImages();
  }

  setValue(inputValue: string, value: string) {
    this.articleForm.setValue(inputValue, value);
  }

  setArticleById(id: string): void {
    const request = this.articleService
      .getById(id)
      .pipe(map(article => this.articleMapper.mapTypesToCamelCase(article)));
    this.execute(request);
    this.isUpdate = true;
  }

  publishArticle() {
    const article = this.articleMapper.mapTypesToUpperSnakeCase(
      this.articleForm.articleToSaveOrUpdate()
    );
    if (this.articleForm.isFormValid) {
      if (this.isUpdate) {
        console.log('update', article);
        // this.update(article);
      } else {
        console.log('save', article);
        // this.save(article);
      }
    }
  }

  addImage(image: string) {
    this.articleForm.addImage(image);
    // this.setSucceed();
  }

  private save(article: ArticleDto) {
    this.articleService
      .save(this.authService.user.id as string, article)
      .subscribe(() => this.router.navigate([`${AppRoute.Profile}`]).then());
  }

  private update(article: ArticleDto) {
    this.articleService
      .update(this.article.id, article)
      .subscribe(() => this.router.navigate([`${AppRoute.Profile}`]).then());
  }
}
