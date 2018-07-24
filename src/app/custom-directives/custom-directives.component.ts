import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent implements OnInit {

title="CustomDirective Demo";


fcolors=["RED","GREEN","BLUE","MAGENTA","BROWN"];

show=true;




  constructor() { }

  ngOnInit() {
  }

}
