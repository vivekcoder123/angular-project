import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cat-single',
  templateUrl: './cat-single.component.html',
  styleUrls: ['./cat-single.component.css']
})
export class CatSingleComponent implements OnInit {

  catposts: any[];
  
  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {

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

 cat_detail(id){
$("#example").modal("show");
  this.http.get(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe((catdetail:any[])=>{
    this.catdetail=catdetail;
    this.catdetail.rss=catdetail.additionalLinks.BLOG;
    this.catdetail.fb=catdetail.additionalLinks.FB;
    this.catdetail.ig=catdetail.additionalLinks.IG;
    this.catdetail.pin=catdetail.additionalLinks.PIN;
    this.catdetail.yt=catdetail.additionalLinks.YT;
    this.catdetail.review=catdetail.review_by.name;
    this.images=catdetail.images;
  }); 
   }


   close(){
    $("#example").modal("hide");
   }


}
