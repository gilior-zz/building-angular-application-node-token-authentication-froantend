import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Item} from "./message";
import {User} from "./models/user";
import {environment} from "../environments/environment.prod";

@Injectable()
export class ApiService {

  path:string=environment.path
  constructor(private  http: HttpClient) {
  }



getUsers():Observable<User[]>{
    let res=this.http.get<User[]>(this.path+ 'users' );
    return res;
}

  getProfile(id:number):Observable<User>{
    let res=this.http.get<User>(this.path+'profile/'+id);
    return res;
  }

  getMessages(author:string): Observable<Item[]> {
    let res = this.http.get<Item[]>(this.path+'posts/'+author);

    return res;
  }

  postMessage(msg:string){
    let res = this.http.post(this.path+'post',{msg});
    res.subscribe();
  }

}
