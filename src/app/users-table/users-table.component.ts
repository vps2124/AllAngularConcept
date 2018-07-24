import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  //providers:[UsersService]
})
export class UsersTableComponent implements OnInit {

  title="Users Table";
  users:Array<any>;
  message="";
  
  
    constructor(private us:UsersService) {
      console.log("UsersTable created.....");
       }
  
    ngOnInit() {
      console.log("UsersTable initialized.....");
      this.getAllUsers();
    }
  
  
    getAllUsers(){
  
  this.us.getAllUsers()
         .subscribe(response=>this.users=response,error=>this.message=error);
    }
  

}
