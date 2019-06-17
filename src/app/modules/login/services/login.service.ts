import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '~/app/enviroments/enviroment';
import * as firebase from 'nativescript-plugin-firebase';

@Injectable()
export class LoginService {


  constructor(private http: HttpClient) { }

  public verifyCredencials(code): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.getCurrentPushToken().then((token: string) => {
        this.http.post(environment.apiurl + "authUser", {code: code, token: token}).subscribe(async data => {
          resolve(data);
        });
      });
    });
  }
}
