import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { Icon } from '@core/utils/icon';
import { User } from '@core/models/user';
import { Data } from '@core/utils/data';
import { getLayout } from '@core/utils/app-route';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NgOptimizedImage,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './edit-profile-page.component.html',
})
export class EditProfilePageComponent {
  user: User;
  protected readonly Icon = Icon;

  constructor() {
    this.user = Data.article.user;
  }

  onAboutMeChanged(aboutMe: string) {}

  onWhatsappChanged(whatsapp: string) {}

  onPhotoChanged() {}

  onEditProfile() {}

  protected readonly getLayout = getLayout;
}
