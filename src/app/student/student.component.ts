import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

title="Angular 5 Template Triven Form Validation Example"

student={
  firstName:'Pradeep',
  lastName:'Chinchole',
  email:'Pradeep@gmail.com',
  mobile:"9158652627"
}

  constructor() { }

  ngOnInit() {
  }

  

}
