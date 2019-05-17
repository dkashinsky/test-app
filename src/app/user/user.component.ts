import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from '../user.data';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: UserInfo;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const userId = 1; //TODO: get from route 
    this.userService.getUser(userId).subscribe(user => {
      this.user = user;
    });
  }
}
