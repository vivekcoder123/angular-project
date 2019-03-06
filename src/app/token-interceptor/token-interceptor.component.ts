import { Component } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Component({
  selector: 'app-token-interceptor',
  templateUrl: './token-interceptor.component.html',
  styleUrls: ['./token-interceptor.component.css']
})
export class TokenInterceptorComponent implements HttpInterceptor{

  constructor() { }

  intercept(req,next){
  let tokenizedReq=req.clone({
   setHeaders:{
    Authorization:'Bearer xx.yy.zz'
   }
  })
  return next.handle(tokenizedReq)
  }

}
