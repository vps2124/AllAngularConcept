import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AlbumsService {

  private baseURL="https://jsonplaceholder.typicode.com/albums";
  
  
    constructor(private http:HttpClient) {
     console.log("AlbumsService created....."); 
     }
  
  
     getAllAlbums():Observable<any>{
   
     return this.http.get(this.baseURL)
              
    }

}
