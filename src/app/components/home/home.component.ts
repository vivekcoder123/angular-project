import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  posts: Object;
  post_detail: Object;
  categories: Object;

  constructor(private http:HttpClient,private router:Router) { 

  }

  ngOnInit() {
  this.http.get("https://www.pikreview.com/rest/category.php?mode=2").subscribe(categories=>{
  this.categories=categories;
  });
  this.http.get("https://www.pikreview.com/rest/feed.php?f=featured").subscribe(posts=>{
  this.posts=posts['items'];
  for(let post of this.posts){
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


post_detail(id){
$("#example").modal("show");
  this.http.get(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe(post_detail=>{
    this.post_detail=post_detail;
    this.post_detail.rss=post_detail.additionalLinks.BLOG;
    this.post_detail.fb=post_detail.additionalLinks.FB;
    this.post_detail.ig=post_detail.additionalLinks.IG;
    this.post_detail.pin=post_detail.additionalLinks.PIN;
    this.post_detail.yt=post_detail.additionalLinks.YT;
    this.post_detail.review=post_detail.review_by.name;
  }); 
   }

   close(){
    $("#example").modal("hide");
    this.router.navigate(['/home-redirect']);
   }


}
