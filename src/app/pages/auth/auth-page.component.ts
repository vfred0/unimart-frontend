import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { InputComponent } from '@components/input/input.component';
import { Icon } from '@core/enums/icon';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/enums/type-button';
import { AuthService } from '@shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequestDto } from '@core/dtos/login/login-request.dto';
import { AppRoute } from '@core/utils/app-route';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    AngularSvgIconModule,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './auth-page.component.html',
})
export class AuthPageComponent {
  protected readonly Icon = Icon;
  protected readonly TypeButton = TypeButton;
  private form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLogin() {
    if (this.form.valid) {
      const loginRequestDto: LoginRequestDto = {
        username: this.form.controls['username'].value,
        password: this.form.controls['password'].value,
      };
      this.authService.login(loginRequestDto).subscribe(response => {
        if (!!response) {
          this.router.navigate([AppRoute.Home]).then();
        }
      });
    }
  }

  onUserNameChanged(username: string) {
    this.form.controls['username'].setValue(username);
  }

  onPasswordChanged(password: string) {
    this.form.controls['password'].setValue(password);
  }
}
