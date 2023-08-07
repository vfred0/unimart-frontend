import { inject, Injectable } from '@angular/core';
import { UserService } from '@shared/services/user.service';
import { UserDto } from '@core/dtos/user.dto';
import { AuthService } from '@shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EditProfileService {
  private readonly userService: UserService = inject(UserService);
  private readonly authService: AuthService = inject(AuthService);
  private form: FormGroup;

  constructor() {
    this._user = this.authService.user;
    this.form = new FormGroup({
      photo: new FormControl(this._user.photo, [Validators.required]),
      about: new FormControl(this._user.about, [Validators.required]),
      numberWhatsapp: new FormControl(this._user.numberWhatsapp, [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/),
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
    this.authService.setUser(user);
  }
}
