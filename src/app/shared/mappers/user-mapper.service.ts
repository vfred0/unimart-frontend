import { Injectable } from '@angular/core';
import { UserDto } from '@core/dtos/user.dto';
import { HeaderDetail } from '@core/utils/header-detail';

@Injectable({ providedIn: 'root' })
export class UserMapperService {
  toHeaderDetails(user: UserDto): HeaderDetail {
    return {
      title: user.name,
      description: user.about,
      photo: user.photo,
    };
  }
}
