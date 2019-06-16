import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { LoginComponent } from './components/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];


@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
