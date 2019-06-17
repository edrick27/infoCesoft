import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '~/app/enviroments/enviroment';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  public getMessage(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiurl + "getMessages").subscribe(async data => {
        resolve(data);
      });
    });
  }
}
