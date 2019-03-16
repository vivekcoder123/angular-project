import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:any[];
  loader:boolean;

  constructor(private http:HttpClient,private router:Router) { };

  ngOnInit() {

  this.loader=true;

  this.http.get<any>("https://www.pikreview.com/rest/category.php?mode=2").subscribe(categories=>{
  
  this.categories=categories;
  this.loader=false;

  });

  }

}
