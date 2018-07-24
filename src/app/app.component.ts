import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//where to inject
  templateUrl: './app.component.html',//where to display
  styleUrls: ['./app.component.css']//how to display
})
export class AppComponent {
  title = 'Angular 5 @ Softedge'; //what to display
}
