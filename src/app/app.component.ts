import {Component, OnInit} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs/Observable";
import {Item} from "./message";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private items$: Observable<Array<Item>>;

  constructor(public  authService: AuthService) {

  }



  ngOnInit(): void {

  }

  title = 'app';
}
