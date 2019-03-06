import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  
 constructor(private _authService:authService,private _router:Router){ }

 CanActivate():boolean{
  if(this._authService.loggedIn()){
   return true;
  }else{
   this.router.navigate(['/login']);
   return false;
  }
 }

}
