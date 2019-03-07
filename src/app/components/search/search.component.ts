import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

 products: any[];
 
 constructor(private http:HttpClient,private router:Router) { }


 onKey($event: KeyboardEvent) {
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
  });

  }
        });
}

 search_detail(id){
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
  }); 
   }

   close(){
    $("#example").modal("hide");
   }


}
