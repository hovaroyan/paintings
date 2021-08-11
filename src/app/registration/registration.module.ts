import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ValidationComponent } from './validation/validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaintingModule } from '../painting/painting.module';
import { ReusableModule } from '../reusable/reusable.module';


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
    ReusableModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegistrationModule { }
