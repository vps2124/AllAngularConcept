import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title="All Todos";
  todos:Array<any>;
  message="";
  userId:number;
  
    constructor(private ts:TodosService,private route:ActivatedRoute) {
      console.log("TodosComponent  created.....");
      this.route.queryParams.subscribe(params=>{
        this.userId=params.userId;
      });

    }
  
    ngOnInit() {
      console.log("TodosComponent initialized....."+this.userId);
      if(this.userId)
      this.getAllTodosByUserId();
      else
      this.getAllTodos()
    }
  
  
    getAllTodos(){
      this.ts.getAllTodos()
           .subscribe(response=>this.todos=response,error=>this.message=error);
      }
      getAllTodosByUserId(){
        this.ts.getAllTodosByUserId(this.userId)
             .subscribe(response=>this.todos=response,error=>this.message=error);
        }
        

}
