import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
import {ActivatedRoute} from "@angular/router";
import { PagerService } from '../service/pager.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title="All Posts With Pagination";
  posts:Array<any>;
  message="";
  userId:number;
  
// pager object
 pager: any = {};
 
// paged items
  pagedItems:Array<any>;

  
    constructor(private route:ActivatedRoute,private ps:PostsService,private pagerService:PagerService) {
      console.log("POstsComponent  created.....");
    this.route.queryParams.subscribe(params=>{
      this.userId=params.userId;
    }) 
    
    }
  
    ngOnInit() {
      console.log("PostsComponent initialized....."+this.userId);
     if(this.userId)
     this.getAllPostsByUserId();
     else
      this.getAllPosts()

      // initialize to page 1
    console.log("Befor setPage...."+this.posts);

   
    }
  
  
    getAllPosts(){
    this.ps.getAllPosts()
         .subscribe(response=>{this.posts=response;
          this.setPage(1);
        },error=>this.message=error);
         
        }
  
    getAllPostsByUserId(){
      this.ps.getAllPostsByUserId(this.userId)
           .subscribe(response=>{this.posts=response;
            this.setPage(1);
              },error=>this.message=error);
           
          }
    

      setPage(page: number) {
        
        console.log("Length.........."+this.posts.length);

        // get pager object from service
      this.pager = this.pagerService.getPager(this.posts.length, page);
 
        // get current page of items
        this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }


}
