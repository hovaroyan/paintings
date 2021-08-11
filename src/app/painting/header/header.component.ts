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
name!:string;
  constructor(private storage:LocalStorageService ,private userInfo: UserInfo) { }

  ngOnInit(): void {
    console.log(this.getUserInfo());
    console.log(this.getUserName());
    
    
  }

  getUserInfo() {
    const userStr = this.storage.get(this.usersListName)
    if(userStr){
      const user = JSON.parse(userStr);
      return user;
    }
  }

  getUserName() {
    const currentUser = this.getUserInfo();
    currentUser?.map((info:{ email: string; name: string })=> {      
        if(this.email === info.email){
          this.name = info.name
        }
    })
  }

}
