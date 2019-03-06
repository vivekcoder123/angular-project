import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-redirect',
  templateUrl: './search-redirect.component.html',
  styleUrls: ['./search-redirect.component.css']
})
export class SearchRedirectComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  	this.router.navigate(['/search']);
  }

}
