import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
 // providers:[UsersService]
})
export class UsersListComponent implements OnInit {

title="Users List";
users:Array<any>;
message="";


  constructor(private us:UsersService) {
    console.log("UsersListComponent created.....");
     }

  ngOnInit() {
    console.log("UsersListComponent initialized.....");
    this.getAllUsers();
  }


  getAllUsers(){

this.us.getAllUsers()
       .subscribe(response=>this.users=response,error=>this.message=error);
  }


}
