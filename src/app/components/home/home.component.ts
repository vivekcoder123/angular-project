import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  posts: any[];
  categories: any[];

  constructor(private http:HttpClient,private router:Router) { 

  }

  ngOnInit() {
  this.http.get("https://www.pikreview.com/rest/category.php?mode=2").subscribe((categories:any[])=>{
  this.categories=categories;
  });
  this.http.get("https://www.pikreview.com/rest/feed.php?f=featured").subscribe((posts:any[])=>{
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
  this.http.get(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe((data:any[])=>{
    this.data=data;
    this.data.rss=data.additionalLinks.BLOG;
    this.data.fb=data.additionalLinks.FB;
    this.data.ig=data.additionalLinks.IG;
    this.data.pin=data.additionalLinks.PIN;
    this.data.yt=data.additionalLinks.YT;
    this.data.review=data.review_by.name;
    this.images=data.images;
  }); 
   }

   close(){
    $("#example").modal("hide");
   }


}
