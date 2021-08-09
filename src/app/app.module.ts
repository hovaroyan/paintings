import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CircleComponent } from './circle/circle.component';
import {FormsModule} from "@angular/forms";
import { ButtonComponent } from './button/button.component';
import { ProjectsComponent } from './projects/projects.component';
import { CirclesComponent } from './circles/circles.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    CircleComponent,
    ButtonComponent,
    ProjectsComponent,
    CirclesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
