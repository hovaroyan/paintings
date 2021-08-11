import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() backgroundColor!: string;
@Input() text: string = "";
@Input() padding: string = "5px 20px";
@Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
