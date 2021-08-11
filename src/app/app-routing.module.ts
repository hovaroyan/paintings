import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", loadChildren: ()=>import('./registration/registration.module').then(mod=>mod.RegistrationModule),
  },{
    path:"painting", loadChildren: ()=>import('./painting/painting.module').then(mod=>mod.PaintingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }