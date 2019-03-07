import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
  this.http.post('https://pikreview.com/rest/user.php?f=authenticate',
  JSON.stringify({
  email:form.value.email,
  password:form.value.password
  })
  ).subscribe(res=>{
  this.toastr.success('You are logged in successfully', 'Successful!');
   localStorage.setItem('token',res.token);
   var authToken = localStorage.getItem('token');  
console.log("token is "+authToken);

const headers:HttpHeaders=new HttpHeaders({
  'token':`${authToken}`
});

const req=new HttpRequest(
'GET',
'https://pikreview.com/rest/user.php?f=feed',
{
  headers: headers
}
);

this.http.request(req).subscribe(data=>{
  console.log(data);
  this.http.get('https://pikreview.com/rest/user.php',{headers:headers}).subscribe(hello=>{
  console.log(hello);
  })
});

  },error=>{
  console.log('something went wrong');
  this.toastr.error('Please enter correct email and password', 'Oops!');
  });
  }


}
