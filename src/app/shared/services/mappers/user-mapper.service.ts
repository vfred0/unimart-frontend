import { Injectable } from '@angular/core';
import { User } from '@core/models/user';
import { HeaderDetail } from '@core/utils/header-detail';

@Injectable()
export class UserMapperService {
  toHeaderDetails(user: User): HeaderDetail {
    return {
      title: user.name,
      description: user.about,
      photo: user.photo,
    };
  }
}
