import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { LoginRequestDto } from '@core/dtos/login-request.dto';
import { LoginResponseDto } from '@core/dtos/login-response.dto';
import { User } from '@core/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_AUTH_URL = `http://localhost:8080/api/v1/auth/login`;
  private readonly API_USERS_URL = `http://localhost:8080/api/v1/users`;
  private http: HttpClient;
  private readonly USER_ID: string;

  constructor() {
    this.USER_ID = 'user_id';
    this.http = inject(HttpClient);
  }

  login(authDto: LoginRequestDto): Observable<boolean> {
    return this.http
      .post<LoginResponseDto>(`${this.API_AUTH_URL}`, authDto)
      .pipe(
        tap((userAuthDto: LoginResponseDto) => {
          if (userAuthDto) {
            localStorage.setItem(this.USER_ID, JSON.stringify(userAuthDto));
          }
        }),
        map((userAuthDto: LoginResponseDto) => !!userAuthDto)
      );
  }

  existsUser(): Observable<boolean> {
    if (this.existsUserInLocalStorage()) {
      return this.http
        .get<User>(`${this.API_USERS_URL}/${this.getUser().id}`)
        .pipe(map((user: User) => !!user));
    }
    return of(false);
  }

  logout(): void {
    localStorage.removeItem(this.USER_ID);
  }

  getUser(): LoginResponseDto {
    const user = localStorage.getItem(this.USER_ID);
    return {
      id: JSON.parse(user || '').id,
    };
  }

  existsUserInLocalStorage() {
    const userId = localStorage.getItem(this.USER_ID);
    return !!userId;
  }
}
