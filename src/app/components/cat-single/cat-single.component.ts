import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cat-single',
  templateUrl: './cat-single.component.html',
  styleUrls: ['./cat-single.component.css']
})
export class CatSingleComponent implements OnInit {

  catposts:any[];
  loader:boolean;
  modalShow:boolean;
  
  constructor(private route:ActivatedRoute,private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit() {

  this.loader=true;
  this.modalShow=false;

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
    post.description=item.description;
    post.landingUrl=item.landingUrl;
    post.catid=this.route.snapshot.params.slug;
    post.additionalLinks=item.additionalLinks;
    this.loader=false;
  });
  }
  });


  	
  }

 cat_detail(id){
 this.modalShow=true;
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
     this.http.get(`https://www.pikreview.com/rest/post.php?f=viewRCat&id=${id}`).subscribe(category=>{
      this.catdetail.category_id=category.category_id;
      this.catdetail.category_name=category.category_name;
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


   datePost(){

   this.loader=true;
  this.modalShow=false;

   var id=this.route.snapshot.params.slug;
    this.http.get(`https://www.pikreview.com/rest/post.php?f=search&categories=${id}`).subscribe(catposts=>{
  this.catposts = catposts['items'].sort((a,b)=>{
           return a.date_uploaded==b.date_uploaded?0
                 :a.date_uploaded>b.date_uploaded?1:-1
      });
  for(let post of this.catposts){
  var id=post.postId;
  this.http.get(`https://www.pikreview.com/rest/post.php?f=view&id=${id}`).subscribe(item=>{
    post.title=item.title;
    post.views=item.view_count;
    post.review_by=item.review_by;
    post.review_img=item.coverPikUrl;
    post.description=item.description;
    post.landingUrl=item.landingUrl;
    post.catid=this.route.snapshot.params.slug;
    post.additionalLinks=item.additionalLinks;
    this.loader=false;
  });
  }
  });

   }

}