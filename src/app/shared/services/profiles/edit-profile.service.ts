import { inject, Injectable } from '@angular/core';
import { UserService } from '@shared/services/user.service';
import { UserDto } from '@core/dtos/user.dto';
import { AuthService } from '@shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoute } from '@core/utils/app-route';

@Injectable({
  providedIn: 'root',
})
export class EditProfileService {
  private readonly userService: UserService;
  private readonly authService: AuthService;
  private readonly router: Router;
  private form: FormGroup;

  constructor() {
    this.userService = inject(UserService);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this._user = this.authService.user;
    this.form = new FormGroup({
      photo: new FormControl(this._user.photo, [Validators.required]),
      about: new FormControl(this._user.about, [Validators.required]),
      numberWhatsapp: new FormControl(this._user.numberWhatsapp, [
        Validators.required,
        Validators.pattern(/^09[0-9]{8}$/),
      ]),
    });
  }

  get isFormValid(): boolean {
    return this.form.valid;
  }

  private _user: UserDto;

  get user(): UserDto {
    return this._user;
  }

  setPhoto(photo: string) {
    this._user = {
      ...this._user,
      photo,
    };
    this.setValue('photo', photo);
  }

  setValue(inputValue: string, value: string) {
    this.form.get(inputValue)?.setValue(value);
  }

  editProfile() {
    const user: UserDto = {
      ...this._user,
      ...this.form.value,
    };
    this.userService.update(user.id, user).subscribe();
    this._user = user;
    this.authService.setUser(user);

    this.router.navigate([`${AppRoute.Home}`]).then();
  }

  setUser() {
    this._user = this.authService.user;
  }
}
