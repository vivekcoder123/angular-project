import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpResponse,HttpHandler,HttpEvent } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = localStorage.getItem('token');
    if (jwt) {
     req = req.clone({
       setHeaders: {
         'token': `${jwt}`
       }
     });
   }
   return next.handle(req);
 }
}
