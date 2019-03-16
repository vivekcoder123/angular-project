import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as bootstrap from "bootstrap"; 
import * as $AB from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
 searchanswer:any[];
 products:any[];
 category:any[];
 loader:boolean;
 modalShow:boolean;
 
 constructor(private http:HttpClient,private router:Router,private toastr: ToastrService) { }
 
 onKey($event: KeyboardEvent) {
   this.loader=true;
   this.modalShow=false;
   var v=(<HTMLInputElement>$event.target).value;

  this.http.get<any>(`https://www.pikreview.com/rest/post.php?f=search&keywords=${v}`).subscribe((res : any[])=>{
  this.products = res['items'];
  for(let post of this.products){
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

 search_detail(id){
 this.modalShow=true;
$("#example").modal("show");
  this.http.get<any>(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe(searchanswer=>{
    this.searchanswer=searchanswer;
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

   reviewPost(id){

  this.loader=true;
  this.modalShow=false;
  $("#example").modal("hide");

  this.http.get<any>(`https://www.pikreview.com/rest/post.php?f=search&createdBy=${id}`).subscribe(products=>{
  this.products=products['items'];
  for(let post of this.products){
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

}