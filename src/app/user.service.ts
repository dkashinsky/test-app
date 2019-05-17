import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo, UserInfoApiResponse } from './user.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseApiUrl = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(page: number = 1): Observable<UserInfoApiResponse> {
    return this.httpClient.get<UserInfoApiResponse>(this.baseApiUrl, {
      params: {
        page: page ? page.toString() : ''
      }
    });
  }

  getUser(userId: number): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>(`${this.baseApiUrl}/${userId}`);
  }
}
