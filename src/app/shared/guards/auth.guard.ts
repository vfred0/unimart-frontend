import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { Observable, tap } from 'rxjs';
import { AppRoute } from '@core/utils/app-route';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  existUser(): Observable<boolean> {
    return this.authService.existsUser().pipe(
      tap((existsUser: boolean) => {
        if (!existsUser) {
          this.router.navigate([AppRoute.AuthLogin]).then();
        }
      })
    );
  }

  mustBeAuthenticated(): boolean {
    const existAuthentication = this.authService.existsUserInLocalStorage();
    if (existAuthentication) {
      this.router.navigate([AppRoute.Home]).then();
    }
    return !existAuthentication;
  }
}

export const canActivate: CanActivateFn = () => {
  const authGuard: AuthGuard = inject(AuthGuard);
  return authGuard.existUser();
};

export const mustBeAuthenticated: CanActivateFn = () => {
  const authGuard: AuthGuard = inject(AuthGuard);
  return authGuard.mustBeAuthenticated();
};
