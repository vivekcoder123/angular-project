import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpResponse,HttpHandler,HttpEvent } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

   intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    const authReq = req.clone({
      headers: req.headers.set('token',token)
    })
    return next.handle(authReq)
  }


}