import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postForm: FormGroup

  constructor(private  api: ApiService, private  fb: FormBuilder) {
    this.buildForm();
  }

  get post(): string {
    return this.postForm.get('post').value;
  }

  buildForm() {
    this.postForm = this.fb.group({
      post: ['', Validators.required]
    })
  }

  onSubmit() {
    this.api.postMessage(this.post);
  }

  ngOnInit() {
  }

}
