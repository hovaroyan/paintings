import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() inputType!: string;
  @Input() inputTitle!: string;
    constructor() { }
  
    ngOnInit(): void {
    }
  
    displayErrors() {
      const touched= this.control.touched;
      const dirty= this.control.dirty;
      const errors= this.control.errors;
      return touched && dirty && errors  ;
  
    }
  }
