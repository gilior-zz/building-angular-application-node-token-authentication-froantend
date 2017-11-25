import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private  fb: FormBuilder, private  auth: AuthService) {
    this.buildForm();
  }
  public loginForm: FormGroup;

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required],
    })
  }

  onSubmit() {
    let email = this.email;
    let pwd = this.pwd;
    this.auth.loginUser({email:email,pwd:pwd});
  }

  get email(): string {
    return this.loginForm.get('email').value;
  }

  get pwd(): string {
    return this.loginForm.get('pwd').value;
  }
  ngOnInit() {
  }

}
