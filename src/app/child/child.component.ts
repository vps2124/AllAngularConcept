import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  title="Child Component";
  
  message=""
  
  @Input() 
  parentMessage="";

  @Output()
  childChanged=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

 sendMessageToParent(){
   console.log("sending message to parentb :"+this.message);
   this.childChanged.emit(this.message); 
}

}
