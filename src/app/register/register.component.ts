import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../api.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private  fb: FormBuilder, private  auth: AuthService) {
    this.buildForm();
  }

  registerForm: FormGroup;

  buildForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required],
      name: ['', Validators.required],
      desc: ['', Validators.required],
    })
  }

  onSubmit() {
    let email = this.email;
    let pwd = this.pwd;
    let name = this.name;
    let desc = this.desc;
    this.auth.regiterUser({email: email, pwd: pwd,desc:desc,name:name});
  }

  get email(): string {
    return this.registerForm.get('email').value;
  }

  get pwd(): string {    return this.registerForm.get('pwd').value;  }
  get desc(): string {    return this.registerForm.get('desc').value;  }
  get name(): string {    return this.registerForm.get('name').value;  }

  ngOnInit() {
  }

}
