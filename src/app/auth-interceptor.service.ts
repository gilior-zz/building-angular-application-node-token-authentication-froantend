import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private  injector:Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if(req.method=='POST')  return next.handle(req);
    let authService=this.injector.get(AuthService);
    let token=authService.token;
    console.log(`token ${token||''}`);
    const authReq = req.clone({setHeaders: {auth: token||''}});
    return next.handle(authReq);
  }

}
