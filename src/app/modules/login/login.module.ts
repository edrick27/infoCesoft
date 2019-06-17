import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { LoginComponent } from './components/login.component';
import { CommonModule } from '@angular/common';
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { LoginService } from './services/login.service';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];


@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes),
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    CommonModule
  ],
  declarations: [LoginComponent],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
