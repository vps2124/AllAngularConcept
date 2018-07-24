import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    
        trigger('goals', [
          transition('* => *', [
    
            query(':enter', style({ opacity: 0.1,'color':'red' }), {optional: true}),
    
            query(':enter', stagger('10000ms', [
              animate('.6s ease-in', keyframes([
                style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
                style({opacity: .5, transform: 'translateX(35px)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
              ]))]), {optional: true})
              ,
            query(':leave', stagger('10000ms', [
              animate('.6s ease-out', keyframes([
                style({opacity: 1, transform: 'translateX(0)', offset: 0}),
                style({opacity: .5, transform: 'translateX(35px)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateX(-75%)',     offset: 1.0}),
              ]))]), {optional: true})
          ])
        ])
    
      ]

})
export class AnimationComponent implements OnInit {

title="Angular 5 Animation Example";
goals = ["RED","GREEN","BLUE","MAGENTA","ORANGE","BROWN"];

  constructor() {
 console.log("AnimationComponent created....");

   }

  ngOnInit() {
    console.log("AnimationComponent initialized....");
    
  }
  removeItem(i) {
    this.goals.splice(i, 1);
  }

}
