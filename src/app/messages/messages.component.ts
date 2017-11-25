import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Observable";
import {Item} from "../message";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
   items$: Observable<Array<Item>>;

  constructor(private  api: ApiService) { }

  ngOnInit() {
    this.items$ = this.api.getMessages();
  }

}
