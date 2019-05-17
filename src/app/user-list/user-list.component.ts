import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo, UserInfoApiResponse } from '../user.data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  usersResponse: UserInfoApiResponse;
  pages: number[] = [];

  ngOnInit() {
    this.loadData(1);
  }

  loadData(page: number = 1) {
    this.userService.getUsers(page).subscribe(apiResponse => {
      this.usersResponse = apiResponse;
      this.pages = [];
      for (var i = 0; i < apiResponse.total_pages; i++) {
        this.pages.push(i + 1);
      }
    });
  }
}
