import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-feed-redirect',
  templateUrl: './feed-redirect.component.html',
  styleUrls: ['./feed-redirect.component.css']
})
export class FeedRedirectComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  	this.router.navigate(['/feed']);
  }

}
