import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsers } from 'src/app/painting/interfaces/users.interface';
import { LocalStorageService } from '../../services/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {

  counter = 1;
  index: number = 0;
  usersList: IUsers[] = [];
  usersListName = 'users list';
  checkInputs: boolean = false;


  items= this.fb.group({
    email: this.fb.control('',[Validators.required]),
    password: this.fb.control('',[Validators.required]),
  });
  

  constructor(private fb: FormBuilder, private storage: LocalStorageService, private router: Router) { }

getUserInfo() {
  const userStr = this.storage.get(this.usersListName)
  if(userStr){
    const user = JSON.parse(userStr);
    return user;
  }
  
}


handleSignIn() {
const signInUser = this.getUserInfo();
console.log(this.items.valid);

signInUser.map((info: { email: string; password: string })=>{
  if(info.email === this.items.value.email && info.password === this.items.value.password){
   this.router.navigate(['/painting'])
  } else {
    this.checkInputs = true;
  }
});

  
}
}

