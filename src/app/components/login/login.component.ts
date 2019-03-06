import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private cookieService: CookieService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
  this.http.post('https://pikreview.com/rest/user.php?f=authenticate',
  JSON.stringify({
  email:"vivekrautela000@gmail.com",
  password:"jarineee"
  })
  ).subscribe(res=>{
   localStorage.setItem('token',res.token);
   var authToken = localStorage.getItem('token');  
console.log("token is "+authToken);

const headers:HttpHeaders=new HttpHeaders({
  'token':`${authToken}`
});

const req=new HttpRequest(
'GET',
'https://www.pikreview.com/rest/user.php',
{
  headers: headers,
  withCredentials: true
}
);

this.http.request(req).subscribe(data=>{
  console.log(data);
});

  },error=>{
  console.log(error);
  });
  }


}
