import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  feeds: any[];

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {

  this.http.get("https://www.pikreview.com/rest/feed.php?f=main").subscribe(feeds=>{
  
  this.feeds=feeds['items'];
  for(let post of this.feeds){
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

  feed_detail(id){
$("#example").modal("show");
  this.http.get(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe((feedData:any[])=>{
    this.feedData=feedData;
    this.feedData.rss=feedData.additionalLinks.BLOG;
    this.feedData.fb=feedData.additionalLinks.FB;
    this.feedData.ig=feedData.additionalLinks.IG;
    this.feedData.pin=feedData.additionalLinks.PIN;
    this.feedData.yt=feedData.additionalLinks.YT;
    this.feedData.review=feedData.review_by.name;
    this.images=feedData.images;
  }); 
   }

   close(){
    $("#example").modal("hide");
   }


}
