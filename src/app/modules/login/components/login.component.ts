import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import * as firebase from 'nativescript-plugin-firebase';
import { LoginService } from "../services/login.service";
import { device } from "tns-core-modules/platform";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginError: string;
  private token: string;
  private os: string;
  private idcliente: string;

  constructor(
    private page: Page,
    private router: RouterExtensions,
    private service: LoginService,
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
    this.initPushNotification();
    this.getToken();
  }

  private getToken(){
    firebase.getCurrentPushToken().then((token: string) => {
      this.token = token;
      this.os = device.os;
    });
  }

  public goHome() {
    console.log("goHome goHome goHome");
    this.service.verifyCredencials(this.idcliente, this.token, this.os).then((result)=>{
      console.log("verifyCredencials",result);
      if(result.success){
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
