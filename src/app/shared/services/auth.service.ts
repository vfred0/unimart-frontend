import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { LoginRequestDto } from '@core/dtos/login/login-request.dto';
import { LoginResponseDto } from '@core/dtos/login/login-response.dto';
import { UserDto } from '@core/dtos/user.dto';
import { UserService } from '@shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_AUTH_URL = `http://localhost:8080/api/v1/auth/login`;
  private http: HttpClient;
  private readonly USER: string;
  private readonly userService: UserService = inject(UserService);

  constructor() {
    this.USER = 'user';
    this.http = inject(HttpClient);
  }

  get user(): UserDto {
    return JSON.parse(localStorage.getItem(this.USER) || '{}');
  }

  get userId(): string {
    return this.user.id as string;
  }

  login(authDto: LoginRequestDto): Observable<UserDto> {
    return this.http
      .put<LoginResponseDto>(this.API_AUTH_URL, authDto)
      .pipe(
        switchMap((response: LoginResponseDto) => this.getUser(response.id))
      );
  }

  getUser(userId: string): Observable<UserDto> {
    return this.userService.getById(userId).pipe(
      tap((user: UserDto) => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  existsUser(): Observable<boolean> {
    if (this.existsUserInLocalStorage()) {
      return this.userService.getById(this.user.id as string).pipe(
        map((user: UserDto) => !!user),
        catchError(() => {
          this.logout();
          return of(false);
        })
      );
    }
    return of(false);
  }

  logout(): void {
    localStorage.removeItem(this.USER);
  }

  existsUserInLocalStorage() {
    const userId = localStorage.getItem(this.USER);
    return !!userId;
  }

  containsId(id: string) {
    return this.user.id === id;
  }
}
