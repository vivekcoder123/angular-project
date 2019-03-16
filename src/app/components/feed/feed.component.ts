import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as bootstrap from "bootstrap"; 
import * as $AB from 'jquery';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  feeds:any[];
  feedData:any[];
  category:any[];
  loader:boolean;
  modalShow:boolean;

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit() {

  this.loader=true;
  this.modalShow=false;

  this.http.get<any>("https://www.pikreview.com/rest/feed.php?f=main").subscribe(feeds=>{
  this.feeds=feeds['items'];
  for(let post of this.feeds){
  var id=post.postId;
  this.http.get<any>(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe(item=>{
    if(item!=null){
    post.title=item.title;
    post.views=item.view_count;
    post.review_by=item.review_by;
    post.review_img=item.coverPikUrl;
    post.description=item.description;
    post.landingUrl=item.landingUrl;
    post.additionalLinks=item.additionalLinks;
    this.loader=false;
    }
  });

  }

  });


  }

  feed_detail(id){
  this.modalShow=true;
$("#example").modal("show");
  this.http.get<any>(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe((feedData:any[])=>{
    this.feedData=feedData;
     this.http.get<any>(`https://www.pikreview.com/rest/post.php?f=viewRCat&id=${id}`).subscribe(category=>{
      this.category=category;
    });
  }); 
   }

   close(){
   this.modalShow=false;
    $("#example").modal("hide");
   }

   addComment(id){
    let comment=$("#commentData").val();
    this.http.get<any>(`https://www.pikreview.com/bl/manage-review.php?f=sc&comment=${comment}&review_id=${id}`).subscribe((comment:any[])=>{
      this.toastr.success("Comment added successfully", 'Success!');
    });
   }

   datePost(){

    this.loader=true;
  this.modalShow=false;

  this.http.get<any>("https://www.pikreview.com/rest/feed.php?f=main").subscribe(feeds=>{
   this.feeds = feeds['items'].sort((a,b)=>{
           return a.date_uploaded==b.date_uploaded?0
                 :a.date_uploaded>b.date_uploaded?1:-1
      });

  for(let post of this.feeds){
  var id=post.postId;
  this.http.get<any>(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe(item=>{
    post.title=item.title;
    post.views=item.view_count;
    post.review_by=item.review_by;
    post.review_img=item.coverPikUrl;
    post.description=item.description;
    post.landingUrl=item.landingUrl;
    post.additionalLinks=item.additionalLinks;
    this.loader=false;
  });

  }

  });

}

reviewPost(id){

  this.loader=true;
  this.modalShow=false;
  $("#example").modal("hide");

  this.http.get<any>(`https://www.pikreview.com/rest/post.php?f=search&createdBy=${id}`).subscribe(feeds=>{
  this.feeds=feeds['items'];
  for(let post of this.feeds){
  var id=post.postId;
  this.http.get<any>(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe(item=>{
    post.title=item.title;
    post.views=item.view_count;
    post.review_by=item.review_by;
    post.review_img=item.coverPikUrl;
    post.description=item.description;
    post.landingUrl=item.landingUrl;
    post.additionalLinks=item.additionalLinks;
    this.loader=false;
  });

  }

  });
  
}


}