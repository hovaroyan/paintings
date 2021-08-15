import {Component, OnInit} from '@angular/core';
import {ICircle} from "../interfaces/circle.interface";
import {ECircleCount} from "../enums/circle-count.enum";
import {LocalStorageService} from "../../services/storage.service";
import {IProject} from "../interfaces/project.interface";
import { ProjectsComponent } from '../projects/projects.component';
import { CirclesComponent } from '../circles/circles.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit {
  circles: ICircle[] = [];
  projectName: string = '';
  projectList: IProject[] = [];
  projectListName = 'circlesProject';
  canvasSizes: number[] = [
    ECircleCount.MIN, // 100
    ECircleCount.MID, // 225
    ECircleCount.MAX, // 400
  ];
  selectedSize: number = this.canvasSizes[0];
  currentColor: string = '#000';
  pointer: string = 'all';
  id!: string;
  canvasPattern: number = this.canvasSizes[0]; 
  resetDisable: boolean = false;
  fillDisable: boolean = false;
  editDisable: boolean = false;
  currentUser!:string;
  showButton: string = 'none';

  constructor(private storage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.getProjects();
  }

  onGenerateCircles(): void {
    this.resetColors();
    this.projectName = '';
  }

  onSizeSelect(): void {
    this.circles = [];
  }

  onCircleClick(circle: ICircle): void {
    if(this.circles[circle.id].color === this.currentColor ){
      this.circles[circle.id].color = "";
    }else {
      this.circles[circle.id].color = this.currentColor;
           }  
    this.resetDisable = true;       
    }
       

  onResetColor(): void {
    if (!this.isEmpty(this.circles)) {
      this.resetColors();
    }
    this.resetDisable = false;
  }

  resetColors(): void {
    this.circles = [];
    for (let i = 0; i < this.selectedSize; i++) {
      const c = new CirclesComponent(i,this.newId(),'')
      this.circles.push(c);
    }
  }

  onFillCircles(): void {
    if (this.isEmpty(this.circles)) {
      return;
    }
    this.circles.forEach((item) => {
      item.color = this.currentColor;
    })
    this.fillDisable=true
  }

  isEmpty(arr: ICircle[]): boolean {
    return !arr.length;
  }

  newId(): string {
    return String(Date.now());
  }

  setStorage() {
    const projectsStr = JSON.stringify(this.projectList);
    this.storage.set(this.projectListName, projectsStr); 
  }
  onSave(): void {  
 
    
    if (this.isEmpty(this.circles) || !this.projectName) {
      return;
    }
    const p = new ProjectsComponent(this.currentUser,this.newId(), this.projectName, this.circles);
    let indexKey;
    
      for(let i= 0; i< this.projectList.length; i++){
        if(this.projectList[i].id === this.id){
          this.projectList.splice(i,1);
        }
      } 
    this.projectList.splice(indexKey||this.projectList.length,0,p)
    this.setStorage();  
    this.projectName='';
    this.circles = [];
  }

  onEdit() {
    this.pointer='all';
    this.editDisable= true;
  }
 
  getProjects(): void {
    const currentUserStr = this.storage.get('loggedInUser');
    const projects = this.storage.get(this.projectListName);
    if(currentUserStr){
      this.currentUser = currentUserStr
    } else {
        this.router.navigate(['/'])    
    }
    if (projects) {
      this.projectList = JSON.parse(projects)
      
    }  
 

  }


  selectProject(project: IProject): void {
    if(project.circles.length === 100){
      this.selectedSize = this.canvasSizes[0];
    }
    else if(project.circles.length === 225){
      this.selectedSize = this.canvasSizes[1];
    }
    else{
      this.selectedSize = this.canvasSizes[2];
    }
    this.circles = project.circles;
    this.projectName = project.name;
    this.pointer = 'none'; 
    this.id = project.id;
    this.showButton = 'block'; 
    this.editDisable= false;
  }

  onDelete(i: number): void {
    this.projectList.splice(i,1)
    this.setStorage();
    if(this.projectList.length === 0){
      this.resetColors();
    }
  }

  onDeleteAll(){  
      this.projectList = [];
      this.storage.removeAll()
      this.circles = [];
  }

}
