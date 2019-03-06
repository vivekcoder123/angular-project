import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home-redirect',
  templateUrl: './home-redirect.component.html',
  styleUrls: ['./home-redirect.component.css']
})
export class HomeRedirectComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigate(['/']);
  }

}
