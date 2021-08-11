import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {

  counter = 1;
  index: number = 0;

  items= this.fb.group({
    email: this.fb.control('',[Validators.required]),
    password: this.fb.control('',[Validators.required]),
  });
  

  constructor(private fb: FormBuilder) { }



handleSignIn() {
console.log('sign in');

  
}
}

