import { inject, Injectable } from '@angular/core';
import { ApiSignalState } from '@shared/services/api-signal-state';
import { ArticleDto } from '@core/dtos/article.dto';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '@shared/services/article.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleSaveDto } from '@core/dtos/article-save.dto';
import { State } from '@core/types/state';
import { Category } from '@core/types/category';
import { Gender } from '@core/types/gender';

@Injectable()
export class PublishArticleService {
  private readonly apiSignalState;
  private readonly http;
  private readonly articleMapper;
  private readonly articleService;
  private readonly _form: FormGroup;

  constructor() {
    this.http = inject(HttpClient);
    this.apiSignalState = new ApiSignalState<ArticleDto>({} as ArticleDto);
    this.articleMapper = inject(ArticleService);
    this.articleService = inject(ArticleService);
    const article = {
      title: '',
      description: '',
      state: State.New,
      category: Category.TextBooksEducationalMaterial,
      gender: Gender.Female,
      images: [] as Array<string>,
    } as ArticleSaveDto;
    this._form = new FormGroup({
      title: new FormControl(article.title, [Validators.required]),
      description: new FormControl(article.description, [Validators.required]),
      state: new FormControl(State.New, [Validators.required]),
      category: new FormControl(Category.TextBooksEducationalMaterial, [
        Validators.required,
      ]),
      gender: new FormControl(article.gender, [Validators.required]),
      images: new FormControl(article.images, [Validators.required]),
    });
    this.apiSignalState.setSucceed(article as ArticleDto);
  }

  get article(): ArticleSaveDto {
    return this.apiSignalState.result() as ArticleSaveDto;
  }

  get isWorking() {
    return this.apiSignalState.isWorking();
  }

  get isCompleted() {
    return this.apiSignalState.isCompleted();
  }

  setArticleById(id: string): void {
    this.apiSignalState.execute(this.articleService.getById(id));
  }

  deleteImages() {
    this.article.images = [];
    this._form.get('images')?.setValue([]);
  }

  setValue(inputValue: string, value: string) {
    this._form.get(inputValue)?.setValue(value);
  }

  publishArticle() {
    console.log('this._form.value', this._form.value, this.article);
    // this.articleService.update(this.article.id as string, this.article);
  }

  setCategory(option: string) {
    this.setValue('category', option);
    this.article.category = this._form.get('category')?.value;
  }
}
