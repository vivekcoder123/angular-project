import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

 products:any[];
 loader:boolean;
 modalShow:boolean;
 
 constructor(private http:HttpClient,private router:Router,private toastr: ToastrService) { }


 onKey($event: KeyboardEvent) {
   this.loader=true;
   this.modalShow=false;
   var v=$event.target.value;

   this.http.get(`https://www.pikreview.com/rest/post.php?f=search&keywords=${v}`).subscribe((res : any[])=>{
            this.products = res['items'];
            for(let post of this.products){
  var id=post.postId;
  this.http.get(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe(item=>{
    post.title=item.title;
    post.views=item.view_count;
    post.review_by=item.review_by;
    post.review_img=item.coverPikUrl;
    post.description=item.description.substring(0,200);
    post.landingUrl=item.landingUrl;
    post.additionalLinks=item.additionalLinks;
    this.loader=false;
  });

  }
        });
}

 search_detail(id){
 this.modalShow=true;
$("#example").modal("show");
  this.http.get(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe((searchanswer:any[])=>{
    this.searchanswer=searchanswer;
    this.searchanswer.rss=searchanswer.additionalLinks.BLOG;
    this.searchanswer.fb=searchanswer.additionalLinks.FB;
    this.searchanswer.ig=searchanswer.additionalLinks.IG;
    this.searchanswer.pin=searchanswer.additionalLinks.PIN;
    this.searchanswer.yt=searchanswer.additionalLinks.YT;
    this.searchanswer.review=searchanswer.review_by.name;
    this.images=searchanswer.images;
     this.http.get(`https://www.pikreview.com/rest/post.php?f=viewRCat&id=${id}`).subscribe(category=>{
      this.searchanswer.category_id=category.category_id;
      this.searchanswer.category_name=category.category_name;
    });
  }); 
   }

   close(){
   this.modalShow=false;
    $("#example").modal("hide");
   }

   addComment(id){
    let comment=$("#commentData").val();
    this.http.get(`https://www.pikreview.com/bl/manage-review.php?f=sc&comment=${comment}&review_id=${id}`).subscribe((comment:any[])=>{
      this.toastr.success("Comment added successfully", 'Success!');
    });
   }


}
