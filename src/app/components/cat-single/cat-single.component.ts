import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cat-single',
  templateUrl: './cat-single.component.html',
  styleUrls: ['./cat-single.component.css']
})
export class CatSingleComponent implements OnInit {

  catposts: Object;
  post_detail_cat: Object;
  
  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {


   var slug2=this.route.snapshot.params.slug2;

   if(typeof slug2 == "undefined"){
   
  }else{
 
   $("#example").modal("show");
  this.http.get(`https://www.pikreview.com/rest/post.php?f=view&id=${slug2}`).subscribe(post_detail=>{
    this.post_detail_cat=post_detail;
    this.post_detail_cat.catid=this.route.snapshot.params.slug;
    this.post_detail_cat.rss=post_detail.additionalLinks.BLOG;
    this.post_detail_cat.fb=post_detail.additionalLinks.FB;
    this.post_detail_cat.ig=post_detail.additionalLinks.IG;
    this.post_detail_cat.pin=post_detail.additionalLinks.PIN;
    this.post_detail_cat.yt=post_detail.additionalLinks.YT;
    this.post_detail_cat.review=post_detail.review_by.name;
  }); 
  }

  var id=this.route.snapshot.params.slug;
    	this.http.get(`https://www.pikreview.com/rest/post.php?f=search&categories=${id}`).subscribe(catposts=>{
  
  this.catposts=catposts['items'];
  for(let post of this.catposts){
  var id=post.postId;
  this.http.get(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe(item=>{
    post.title=item.title;
    post.views=item.view_count;
    post.review_by=item.review_by;
    post.review_img=item.coverPikUrl;
    post.description=item.description.substring(0,200);
    post.landingUrl=item.landingUrl;
    post.catid=this.route.snapshot.params.slug;
    post.additionalLinks=item.additionalLinks;
  });
  }
  });


  	
  }

  post_detail_cat(id){

   }

   close(){
    $("#example").modal("hide");
   }


}
