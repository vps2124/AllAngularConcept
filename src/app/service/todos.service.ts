import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TodosService {

  private baseURL="https://jsonplaceholder.typicode.com/todos";
  
  
    constructor(private http:HttpClient) {
     console.log("TodosService created....."); 
     }
  
  
     getAllTodos():Observable<any>{
   
     return this.http.get(this.baseURL)
              
    }
    getAllTodosByUserId(userId:number):Observable<any>{
      return this.http.get(this.baseURL+"?userId="+userId);
     }
  
}
