import { Component, OnInit } from '@angular/core';
import {Page} from "tns-core-modules/ui/page";
import { RouterExtensions  } from 'nativescript-angular/router';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginError:string;

  constructor(
    private page: Page,
    private router: RouterExtensions,
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit() {
  }

  public goHome(){
    this.router.navigate(["/home"], { clearHistory: true });
  }
}
