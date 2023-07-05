import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleCardComponent} from "@components/article-card/article-card.component";
import {HeaderComponent} from "@components/header/header.component";
import {InputComponent} from "@components/input/input.component";
import {MenuComponent} from "@components/menu/menu.component";
import {SelectComponent} from "@components/select/select.component";

@Component({
  selector: 'app-publish-article-page',
  standalone: true,
    imports: [CommonModule, ArticleCardComponent, HeaderComponent, InputComponent, MenuComponent, SelectComponent],
  templateUrl: './publish-article-page.component.html'
})
export class PublishArticlePageComponent {
  categories: any;
  states: any;

  onTextSearchChanged($event: string) {
    
  }

  onSelectedState($event: string) {
    
  }

  onSelectedCategory($event: string) {
    
  }
}
