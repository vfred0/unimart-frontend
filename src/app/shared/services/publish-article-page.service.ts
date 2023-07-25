import { inject, Injectable } from '@angular/core';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ArticleDto } from '@core/dtos/article.dto';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '@shared/services/article.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleSaveDto } from '@core/dtos/article-save.dto';
import { State } from '@core/types/state';
import { Category, CategoryService } from '@core/types/category';
import { TypeArticle } from '@core/types/type-article';
import { AuthService } from '@shared/services/auth.service';

@Injectable()
export class PublishArticlePageService {
  private readonly apiSignalState;
  private readonly http;
  private readonly articleMapper;
  private readonly articleService;
  private authService;
  private readonly _form: FormGroup;
  private updateFormForArticleUpdate: boolean;

  constructor() {
    this.http = inject(HttpClient);
    this.apiSignalState = new ApiSignalState<ArticleDto>({} as ArticleDto);
    this.articleMapper = inject(ArticleService);
    this.articleService = inject(ArticleService);
    this.authService = inject(AuthService);
    this.updateFormForArticleUpdate = false;
    const article: ArticleSaveDto = {
      title: '',
      description: '',
      state: State.New,
      category: Category.TextBooksEducationalMaterial,
      images: ['https://is.gd/XuVMzJ'] as Array<string>,
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

  get article(): ArticleSaveDto {
    return this.apiSignalState.result() as ArticleSaveDto;
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
    this.apiSignalState.execute(this.articleService.getById(id));
    this.updateFormForArticleUpdate = true;
  }

  setCategory(option: string) {
    this.setValue('category', option);
    this.article.category = this._form.get('category')?.value;
  }

  publishArticle(isUpdate: boolean) {
    let article: ArticleSaveDto = this._form.value as ArticleSaveDto;
    article.userId = this.authService.user.id as string;
    if (!this.withGender) {
      article = {
        id: this.article.id,
        title: this.getValue('title'),
        description: this.getValue('description'),
        state: this.getValue('state'),
        category: this.getValue('category'),
        images: this.getValue('images'),
        typeArticle: this.article.typeArticle,
      } as ArticleSaveDto;
    }
    if (this._form.valid) {
      if (isUpdate) {
        this.articleService.update(article);
      } else {
        article.typeArticle = TypeArticle.Published;
        this.articleService.save(article);
      }
    }
  }

  setFormForUpdate() {
    if (this.updateFormForArticleUpdate) {
      this.setValue('title', this.article.title);
      this.setValue('description', this.article.description);
      this.setValue('state', this.article.state);
      this.setValue('category', this.article.category);
      this.setValue('gender', this.gender);
      this._form.get('images')?.setValue(this.images);
    }
  }

  private getValue(name: string) {
    return this._form.get(name)?.value;
  }
}
