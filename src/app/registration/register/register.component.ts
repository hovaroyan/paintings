import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUsers } from 'src/app/painting/interfaces/users.interface';
import { LocalStorageService } from '../../services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  counter = 1;
  index: number = 0;
  usersList: IUsers[] = [];
  usersListName = 'users list'

  items= this.fb.group({
    name: this.fb.control('',[Validators.required, Validators.minLength(5)]),
    lastName: this.fb.control('',[Validators.required, Validators.minLength(5)]),
    phoneNumber: this.fb.control('',[Validators.required, Validators.pattern("0[0-9]{8}")]),
    email: this.fb.control('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]),
    password: this.fb.control('',[Validators.required, Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")]),
    confirmPassword: this.fb.control('',[Validators.required]),

  });
  

  constructor(private fb: FormBuilder, private storage: LocalStorageService) { }


confirmPasswordCheck() {
  const password = this.items.controls[this.index]?.get('password')?.value;
  const confirmPassword = this.items.controls[this.index]?.get('confirmPassword')?.value;
  return confirmPassword === password;
}

handleSignUp() {
console.log(this.items);
if(this.items.valid) {
  this.usersList.push(this.items.value);
  const usersListStr = JSON.stringify(this.usersList)
  this.storage.set(this.usersListName, usersListStr)
} 

console.log(this.usersList);
console.log(this.items.valid);

}
}
