import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo, ApiDataListResponse, ApiDataResponse } from './user.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseApiUrl = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(page: number = 1): Observable<ApiDataListResponse<UserInfo>> {
    return this.httpClient.get<ApiDataListResponse<UserInfo>>(this.baseApiUrl, {
      params: {
        page: page ? page.toString() : ''
      }
    });
  }

  getUser(userId: number): Observable<ApiDataResponse<UserInfo>> {
    return this.httpClient.get<ApiDataResponse<UserInfo>>(`${this.baseApiUrl}/${userId}`);
  }
}
