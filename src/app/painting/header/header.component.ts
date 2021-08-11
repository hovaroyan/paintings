import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../services/userInfo.service';
import { LocalStorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
usersListName = 'usersList';
email: string = this.userInfo.userEmail;
  constructor(private storage:LocalStorageService ,private userInfo: UserInfo) { }

  ngOnInit(): void {    
  }
}
