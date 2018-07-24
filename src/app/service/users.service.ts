import { Injectable } from '@angular/core';
//import {Http} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";
//import "rxjs/add/operator/map";
//import "rxjs/add/operator/catch";


@Injectable()
export class UsersService {

  private baseURL="https://jsonplaceholder.typicode.com/users";


  constructor(private http:HttpClient) {
   console.log("UsersService created....."); 
   }
/*
   constructor(private http:Http) {
    console.log("UsersService created....."); 
    }

   getAllUsers():Observable<any>{
 
   return this.http.get(this.baseURL)
             .map(response=>response.json())
             .catch(error=>error.json())
            }
     }
*/

getAllUsers():Observable<any>{
  return this.http.get(this.baseURL);
    
}

getUserByUserId(userId:number):Observable<any>{
  return this.http.get(this.baseURL+"/"+userId);
    
}


}     