import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, observeOn } from 'rxjs';
import { LogInComponent } from './log-in/log-in.component';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  _HttpClient=inject(HttpClient)
}

// LogIn(data:any)Observable<any>{

// this.HttpClient.post(http://localhost:2833/login,data )

// } 