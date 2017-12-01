import { Injectable } from '@angular/core';
import {User} from "./models/user";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable()
export class AuthService {
  path:string=environment.path+'auth/';
  logOut() {    localStorage.removeItem('token');  }

  constructor(private  http: HttpClient) { }
  get token():string{return localStorage.getItem('token')}

  loginUser(user: User): Observable<any> {
    let res = this.http.post(this.path+'login', user,{responseType:'text',headers:new HttpHeaders().set("accept","application/json")});
    res.subscribe(i=>{
      console.log(i);
      localStorage.setItem('token',JSON.parse(i)["token"]);
    });
    return res;
  }
  regiterUser(user: User): Observable<any> {
    let res = this.http.post(this.path+'register', user,{responseType:'text'});
    res.subscribe(i=>{
      localStorage.setItem('token',JSON.parse(i)["token"]);
    });

    return res;
  }
}
