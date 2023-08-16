import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { Icon } from '@core/enums/icon';
import { getLayout } from '@core/utils/app-route';
import { EditProfileService } from '@shared/services/profiles/edit-profile.service';
import { ButtonSelectImageComponent } from '@components/button/button-select-image/button-select-image.component';
import { ImageService } from '@shared/services/image.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NgOptimizedImage,
    InputComponent,
    ButtonComponent,
    ButtonSelectImageComponent,
  ],
  templateUrl: './edit-profile-page.component.html',
})
export class EditProfilePageComponent {
  service: EditProfileService;
  imageService: ImageService;
  protected readonly Icon = Icon;
  protected readonly getLayout = getLayout;

  constructor() {
    this.service = inject(EditProfileService);
    this.imageService = inject(ImageService);
    this.service.setUser();
  }

  onAboutMeChanged(about: string) {
    this.service.setValue('about', about);
  }

  onWhatsappChanged(whatsapp: string) {
    this.service.setValue('numberWhatsapp', whatsapp);
  }

  onEditProfile() {
    this.service.editProfile();
  }

  onImageSelected(image: string) {
    this.imageService.uploadImage(image).subscribe(response => {
      this.service.setPhoto(response.data.url);
    });
  }
}
