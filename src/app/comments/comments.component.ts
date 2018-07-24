import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../service/comments.service';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {


  title="All Comments";
  comments:Array<any>;
  message="";
  postId:number;

  
    constructor(private cs:CommentsService,private route:ActivatedRoute) {
      console.log("CoomentsComponent  created.....");
      this.route.queryParams.subscribe(params=>{
        this.postId=params.postId;
      }) 
     
    
    }
  
    ngOnInit() {
      console.log("CommentsComponent initialized....."+this.postId);
      if(this.postId)
      this.getAllCommentsByPostId();
      else
      this.getAllComments()
    }
  
  
    getAllComments(){
      
      this.cs.getAllComments()
             .subscribe(response=>this.comments=response,error=>this.message=error);
        }
  
        getAllCommentsByPostId(){
          
          this.cs.getAllCommentsByPostId(this.postId)
                 .subscribe(response=>this.comments=response,error=>this.message=error);
            }
              

}
