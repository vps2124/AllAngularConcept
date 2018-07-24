import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PhotosService {

  private baseURL="https://jsonplaceholder.typicode.com/photos";
  
  
    constructor(private http:HttpClient) {
     console.log("PhotosService created....."); 
     }
  
  
     getAllPhotos():Observable<any>{
   
     return this.http.get(this.baseURL)
              
    }

}
