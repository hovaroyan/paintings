import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsers } from 'src/app/painting/interfaces/users.interface';
import { LocalStorageService } from '../../services/storage.service';
import { UserInfo } from '../../services/userInfo.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {

  counter = 1;
  index: number = 0;
  usersList: IUsers[] = [];
  usersListName = 'usersList';
  checkInputs: boolean = false;



  items= this.fb.group({
    email: this.fb.control('',[Validators.required]),
    password: this.fb.control('',[Validators.required]),
  });
  

  constructor(private fb: FormBuilder, private storage: LocalStorageService, private router: Router, public userInfo: UserInfo) { }

getUserInfo() {
  const userStr = this.storage.get(this.usersListName)
  if(userStr){
    const user = JSON.parse(userStr);
    return user;
  }
}


handleSignIn() {
  const signInUser = this.getUserInfo();
if(!signInUser){
  this.checkInputs = true;
} 
  signInUser.map((info: { email: string; password: string })=>{
    if(info.email === this.items.controls.email.value && info.password === this.items.controls.password.value && this.items.valid){
      this.userInfo.userEmail = info.email;
      this.router.navigate(['/painting'])
    } else {
      this.checkInputs = true;
    }
  });
}

}

