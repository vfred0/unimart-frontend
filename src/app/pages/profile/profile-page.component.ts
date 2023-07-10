import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '@shared/components/input/input.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { TypeArticle } from '@core/types/type-article';
import { getAllValues } from '@core/types/enum-utils';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  templateUrl: './profile-page.component.html',
  imports: [CommonModule, InputComponent, HeaderComponent, SelectComponent],
})
export class ProfilePageComponent {
  typeArticles: Array<string>;

  constructor() {
    this.typeArticles = getAllValues(TypeArticle);
  }
}
