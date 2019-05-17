import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user.data';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: UserInfo;

  constructor(private userService: UserService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const userId = +this.route.snapshot.paramMap.get('userId');
    this.userService.getUser(userId).subscribe(userResponse => {
      this.user = userResponse.data;
    });
  }

  goBack() {
    this.location.back();
  }
}
