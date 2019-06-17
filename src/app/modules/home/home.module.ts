import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { HomeComponent } from './components/home.component';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { HomeService } from './services/home.service';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes),
    NativeScriptUIListViewModule,
    NativeScriptHttpModule
  ],
  declarations: [HomeComponent],
  providers:[
    HomeService
  ]
})
export class HomeModule { }
