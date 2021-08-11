import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintingRoutingModule } from './painting-routing.module';
import { ButtonComponent } from './button/button.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CircleComponent } from './circle/circle.component';
import { CirclesComponent } from './circles/circles.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ButtonComponent,
    CanvasComponent,
    CircleComponent,
    CirclesComponent,
    ProjectsComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    PaintingRoutingModule,
    FormsModule
  ],
  exports: [
    CanvasComponent,
    ButtonComponent
  ]
})
export class PaintingModule { }
