import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ValidationComponent } from './validation/validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaintingModule } from '../painting/painting.module';


@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent,
    ValidationComponent,
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    PaintingModule,
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegistrationModule { }
