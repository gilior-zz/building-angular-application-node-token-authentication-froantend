import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Observable";
import {User} from "../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
   users$: Observable<User[]>;

  constructor(private  api:ApiService) { }

  ngOnInit() {
    this.users$=this.api.getUsers();
  }

}
