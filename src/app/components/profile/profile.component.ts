import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
 var authToken=localStorage.getItem('token');
const httpOptions = {
  headers: new HttpHeaders({
   'Content-Type':  'application/json',
   'token': '${authToken}'
  })
};

this.http.get('https://pikreview.com/rest/user.php',httpOptions).subscribe(data=>{
  console.log(data);
});
  }

}
