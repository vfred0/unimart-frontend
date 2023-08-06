import { inject, Injectable } from '@angular/core';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ArticleDto } from '@core/dtos/article/article.dto';
import { ArticleService } from '@shared/services/article.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleSaveDto } from '@core/dtos/article/article-save.dto';
import { State } from '@core/types/state';
import { Category, CategoryService } from '@core/types/category';
import { AuthService } from '@shared/services/auth.service';
import { AppRoute } from '@core/utils/app-route';
import { Router } from '@angular/router';

import { ArticleMapperService } from '@shared/services/mappers/article-mapper.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublishArticlePageService {
  private readonly apiSignalState: ApiSignalState<ArticleDto>;
  private readonly articleService: ArticleService;
  private readonly articleMapper: ArticleMapperService;

  private authService: AuthService;
  private readonly _form: FormGroup;
  private updateFormForArticleUpdate: boolean;
  private router: Router;

  constructor() {
    this.apiSignalState = new ApiSignalState<ArticleDto>({} as ArticleDto);
    this.articleService = inject(ArticleService);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.articleMapper = inject(ArticleMapperService);
    this.updateFormForArticleUpdate = false;
    const article: ArticleSaveDto = {
      title: '',
      description: '',
      state: State.New,
      category: Category.TextBooksEducationalMaterial,
      images: [] as Array<string>,
    } as ArticleSaveDto;
    this._form = new FormGroup({
      title: new FormControl(article.title, [Validators.required]),
      description: new FormControl(article.description, [Validators.required]),
      state: new FormControl(State.New, [Validators.required]),
      category: new FormControl(Category.TextBooksEducationalMaterial, [
        Validators.required,
      ]),
      gender: new FormControl(null),
      images: new FormControl(article.images, [Validators.required]),
    });
    this.apiSignalState.setSucceed(article as ArticleDto);
    this.setFormForUpdate();
  }

  get gender(): string {
    return this.withGender ? (this.article.gender as string) : '';
  }

  get withGender(): boolean {
    return new CategoryService().isWithGender(this.article.category);
  }

  get article(): ArticleDto {
    return this.apiSignalState.result();
  }

  get isWorking() {
    return this.apiSignalState.isWorking();
  }

  get isCompleted() {
    const isCompleted = this.apiSignalState.isCompleted();
    if (isCompleted) {
      this.setFormForUpdate();
      this.updateFormForArticleUpdate = false;
    }
    return isCompleted;
  }

  get isFormValid(): boolean {
    return this._form.valid;
  }

  get images(): Array<string> {
    return this.article.images;
  }

  get containsImages(): boolean {
    return this.images.length > 0;
  }

  deleteImages() {
    this.article.images = [];
    this._form.get('images')?.setValue([]);
  }

  setValue(inputValue: string, value: string) {
    this._form.get(inputValue)?.setValue(value);
  }

  setArticleById(id: string): void {
    this.apiSignalState.execute(
      this.articleService
        .getById(id)
        .pipe(map(article => this.articleMapper.mapTypesToCamelCase(article)))
    );
    this.updateFormForArticleUpdate = true;
  }

  setCategory(option: string) {
    this.setValue('category', option);
    this.article.category = this._form.get('category')?.value;
  }

  publishArticle(isUpdate: boolean) {
    const article = this.articleMapper.mapTypesToUpperSnakeCase(
      this.articleToSaveOrUpdate()
    );
    if (this._form.valid) {
      if (isUpdate) {
        this.update(article);
      } else {
        this.save(article);
      }
    }
  }

  setFormForUpdate() {
    if (this.updateFormForArticleUpdate) {
      this.setValue('title', this.article.title);
      this.setValue('description', this.article.description);
      this.setValue('state', this.article.state);
      this.setValue('category', this.article.category);
      this.setValue('gender', this.article.gender);
      this._form.get('images')?.setValue(this.images);
    }
  }

  addImage(imageUrl: string) {
    const article = {
      ...this.article,
      images: [...this.article.images, imageUrl],
    };
    this.apiSignalState.setSucceed(article);
    this._form.get('images')?.setValue(this.article.images);
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

  private articleToSaveOrUpdate() {
    const article: ArticleDto = this._form.value as ArticleDto;
    if (!this.withGender) {
      article.title = this.getValue('title');
      article.description = this.getValue('description');
      article.state = this.getValue('state');
      article.category = this.getValue('category');
      article.images = this.getValue('images');
    }
    return article;
  }

  private getValue(name: string) {
    return this._form.get(name)?.value;
  }
}
