import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import * as firebase from 'nativescript-plugin-firebase';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginError: string;

  constructor(
    private page: Page,
    private router: RouterExtensions,
    private service: LoginService,
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.initPushNotification();
  }

  public goHome() {
    console.log("goHome goHome goHome");
    this.service.verifyCredencials("s1").then((result)=>{
      if(result.response){
        this.router.navigate(["/home"], { clearHistory: true });
      }else{
        this.loginError = result.error;
      } 
    });
  }

  private initPushNotification() {
    firebase.init({
      persist: false,
      onMessageReceivedCallback: (message) => {
        if (message.foreground != true) {

        } else {

        }
      },
    });
  }
}
