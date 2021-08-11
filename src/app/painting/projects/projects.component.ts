import { Component, Inject } from '@angular/core';
import { IProject } from '../interfaces/project.interface';
import { ICircle } from '../interfaces/circle.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements IProject {
  user!: string;
  id!: string;
  name!: string;
  circles!: ICircle[];

  constructor(@Inject(String) user:string ,@Inject(String) id:string,@Inject(String) name:string,@Inject(String) circles: ICircle[] ) { 
    this.user = user;
    this.id=id;
    this.name=name;
    this.circles = circles
  }

  ngOnInit(): void {
  }

}
