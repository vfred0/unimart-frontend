import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '@core/dtos/user.dto';
import { ArticleDto } from '@core/dtos/article/article.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_USERS_URL: string = `http://localhost:8080/api/v1/users`;
  private readonly http: HttpClient = inject(HttpClient);

  getById(userId: string) {
    return this.http.get<UserDto>(`${this.API_USERS_URL}/${userId}`);
  }

  update(userId: string, user: UserDto) {
    return this.http.put<UserDto>(`${this.API_USERS_URL}/${userId}`, user);
  }

  getArticles(userId: string) {
    return this.http.get<ArticleDto[]>(
      `${this.API_USERS_URL}/${userId}/articles`
    );
  }
}
