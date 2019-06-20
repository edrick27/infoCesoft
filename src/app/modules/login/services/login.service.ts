import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '~/app/enviroments/enviroment';
import * as firebase from 'nativescript-plugin-firebase';

@Injectable()
export class LoginService {


  constructor(private http: HttpClient) { }

  public verifyCredencials(idcliente, token, os): Promise<any> {
    return new Promise((resolve, reject) => {
      let data = { idcliente: idcliente, token: token, os: os };
      this.http.post(environment.apiurl + "authUser", data).subscribe(async data => {
        resolve(data);
      });
    });
  }
}
