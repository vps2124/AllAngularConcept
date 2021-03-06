import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CommentsService {

  private baseURL="https://jsonplaceholder.typicode.com/comments";
  
  
    constructor(private http:HttpClient) {
     console.log("CommentsService created....."); 
     }
  
  
     getAllComments():Observable<any>{
   
     return this.http.get(this.baseURL)
              
    }

    getAllCommentsByPostId(postId:number):Observable<any>{
      return this.http.get(this.baseURL+"?postId="+postId);
     }
  
}
