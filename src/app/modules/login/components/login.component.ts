import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import * as firebase from 'nativescript-plugin-firebase';

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
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.initPushNotification();
  }

  public goHome() {
    console.log("goHome goHome goHome");
    
    // firebase.getCurrentPushToken().then(($token: string) => {
    //   alert("$token ==>"+$token);
    // });
    this.router.navigate(["/home"], { clearHistory: true });
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
