import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private toastr: ToastrService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
  this.http.post('https://pikreview.com/rest/user.php?f=authenticate',
  JSON.stringify({
  email:form.value.email,
  password:form.value.password
  })
  ).subscribe(res=>{
   localStorage.setItem('token',res.token);
   var authToken = localStorage.getItem('token');  
   console.log("token is "+authToken);
   this.router.navigate(['/profile']);
  },error=>{
  console.log(error.error);
  this.toastr.error(error.error, 'Oops!');
  });
  }


}
