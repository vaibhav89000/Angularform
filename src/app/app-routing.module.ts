
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { SigninComponent } from '../app/signin/signin.component';
import { SignupComponent } from '../app/signup/signup.component';
const appRoutes: Routes= [
  {path: 'home',component: HomeComponent},
  {path: 'home/signin',component: SigninComponent},
  {path: 'home/signup',component: SignupComponent},
  {path: '**', redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}