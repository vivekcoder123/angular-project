import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
 

const req=new HttpRequest(
'GET',
'https://pikreview.com/rest/user.php'
);

this.http.request(req).subscribe(data=>{
  console.log(data);
});
  }

}
