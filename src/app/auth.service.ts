import { Injectable } from '@angular/core';
import {User} from "./models/user";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor(private  http: HttpClient) { }
  loginUser(user: User): Observable<any> {
    let res = this.http.post('http://localhost:3000/auth/login', user,{responseType:'text'});
    res.subscribe(i=>{
      console.log(i);
      localStorage.setItem('token',i);
    });
    return res;
  }
  regiterUser(user: User): Observable<any> {
    let res = this.http.post('http://localhost:3000/auth/register', user,{responseType:'text'});
    res.subscribe();
    return res;
  }
}
