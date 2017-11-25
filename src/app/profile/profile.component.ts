import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Observable";
import {User} from "../models/user";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private id;
   user$: Observable<User>;

  constructor(private  activatedRoute: ActivatedRoute, private  api: ApiService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.user$ = this.api.getProfile(this.id);
  }

}
