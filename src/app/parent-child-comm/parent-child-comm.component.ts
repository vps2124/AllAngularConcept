import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child-comm',
  templateUrl: './parent-child-comm.component.html',
  styleUrls: ['./parent-child-comm.component.css']
})
export class ParentChildCommComponent implements OnInit {

  title="Parent Child Component Communication";

  constructor() { }

  ngOnInit() {
  }

}
