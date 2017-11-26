import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users/users.component";
import {AppComponent} from "./app.component";
import {MessagesComponent} from "./messages/messages.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'messages/:id',component:MessagesComponent},
  {path:'post',component:PostComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutungRoutingModule { }
