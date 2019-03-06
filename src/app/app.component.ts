import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  searchComponent:boolean;
 
 constructor(private http:HttpClient,private router:Router) { 

    this.router.events.subscribe((res) => { 
    
    if(this.router.url=="/search"){
     this.searchComponent=false;
    }else{
      this.searchComponent=true;
    }

   });

    }

focusAuto(){
  this.searchComponent=false;
  this.router.navigate(['/search']);
  }

   


    }