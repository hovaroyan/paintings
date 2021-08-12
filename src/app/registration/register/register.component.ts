import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsers } from 'src/app/painting/interfaces/users.interface';
import { LocalStorageService } from '../../services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usersList: IUsers[] = [];
  usersListName = 'usersList'

  items= this.fb.group({
    name: this.fb.control('',[Validators.required, Validators.minLength(5)]),
    lastName: this.fb.control('',[Validators.required, Validators.minLength(5)]),
    phoneNumber: this.fb.control('',[Validators.required, Validators.pattern("0[0-9]{8}")]),
    email: this.fb.control('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]),
    password: this.fb.control('',[Validators.required, Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")]),
    confirmPassword: this.fb.control('',[Validators.required]),

  });
  

  constructor(private fb: FormBuilder, private storage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
   this.getUsers();
   if(this.storage.get('loggedInUser')?.length) {
     this.router.navigate(['/painting'])
   }
   console.log(this.confirmPasswordCheck());
  }

confirmPasswordCheck() {

  const password = this.items.controls.password.value;
  const confirmPassword = this.items.controls.confirmPassword.value;  
  if(password && confirmPassword){
    return confirmPassword === password;
  } else {
    return false;
  }

}
getUsers(): void {
  const users = this.storage.get(this.usersListName);
  if (users) {
    this.usersList = JSON.parse(users);
  }  
}

handleSignUp() {
console.log(this.usersList);

if(this.items.valid) {
  this.usersList.push(this.items.value);
  const usersListStr = JSON.stringify(this.usersList)
  this.storage.set(this.usersListName, usersListStr)
} 
}

}
