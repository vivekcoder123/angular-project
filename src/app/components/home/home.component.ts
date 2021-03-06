import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as bootstrap from "bootstrap"; 
import * as $AB from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  posts:any[];
  data:any[];
  categories:any[];
  category:any[];
  p:any[];
  modalShow:boolean;
  loader:boolean;

  constructor(private http:HttpClient,private router:Router,private toastr: ToastrService) { 
  }

  ngOnInit() {
  this.loader=true;
  this.modalShow=false;
  this.http.get<any>("https://www.pikreview.com/rest/category.php?mode=2").subscribe((categories:any[])=>{
  this.categories=categories;
  });
  this.http.get<any>("https://www.pikreview.com/rest/feed.php?f=featured").subscribe((posts:any[])=>{
  this.posts=posts['items'];
  for(let post of this.posts){
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


post_detail(id){
  this.modalShow=true;
$("#example").modal("show");
  this.http.get(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe((data:any[])=>{
    this.data=data;
    this.http.get<any>(`https://www.pikreview.com/rest/post.php?f=viewRCat&id=${id}`).subscribe((category:any[])=>{
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

   reviewPost(id){

  this.loader=true;
  this.modalShow=false;
  $("#example").modal("hide");

  this.http.get<any>(`https://www.pikreview.com/rest/post.php?f=search&createdBy=${id}`).subscribe(posts=>{
  this.posts=posts['items'];
  for(let post of this.posts){
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