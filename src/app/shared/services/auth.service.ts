import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { LoginRequestDto } from '@core/dtos/login-request.dto';
import { LoginResponseDto } from '@core/dtos/login-response.dto';
import { UserDto } from '@core/dtos/user.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_AUTH_URL = `http://localhost:8080/api/v1/auth/login`;
  private readonly API_USERS_URL = `http://localhost:8080/api/v1/users`;
  private http: HttpClient;
  private readonly USER: string;

  constructor() {
    this.USER = 'user';
    this.http = inject(HttpClient);
  }

  get user(): UserDto {
    return JSON.parse(localStorage.getItem(this.USER) || '{}');
  }

  login(authDto: LoginRequestDto): Observable<UserDto> {
    return this.http
      .post<LoginResponseDto>(this.API_AUTH_URL, authDto)
      .pipe(
        switchMap((response: LoginResponseDto) => this.getUser(response.id))
      );
  }

  getUser(userId: string): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.API_USERS_URL}/${userId}`).pipe(
      tap((user: UserDto) => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  existsUser(): Observable<boolean> {
    if (this.existsUserInLocalStorage()) {
      return this.http
        .get<UserDto>(`${this.API_USERS_URL}/${this.user.id}`)
        .pipe(map((user: UserDto) => !!user));
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

  containsId(id: string | undefined) {
    return this.user.id === id;
  }
}
