import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { UsersService } from '../service/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title="User Details";
  user:any;
  userId:number;
  message="";
  
  constructor(private route:ActivatedRoute,private us:UsersService) {
    console.log("UsersComponent created......");
    route.params.subscribe(params=>{
     this.userId=params.userId;
    }); 
  }

  ngOnInit() {
    console.log("UsersComponent initialized........"+this.userId);
  if(this.userId)
  this.getUser();
    
  }

   getUser(){
    
    this.us.getUserByUserId(this.userId)
           .subscribe(response=>this.user=response,error=>this.message=error);
      }
    



}
