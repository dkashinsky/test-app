import { Component, OnInit } from '@angular/core';
import { UserInfo, ApiDataListResponse } from '../user.data';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  usersResponse: ApiDataListResponse<UserInfo>;

  ngOnInit() {
    this.loadData(1);
  }

  loadData(page: number = 1) {
    this.userService.getUsers(page).subscribe(apiResponse => {
      this.usersResponse = apiResponse;
    });
  }

  pages(pagesCount: number) {
    return new Array(pagesCount).fill(0).map((v, i) => i + 1);
  }
}
