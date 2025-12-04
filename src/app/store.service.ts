
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandleService {

  constructor(private http: HttpClient) {}  

  getCandels(): Observable<any> {
    return this.http.get<any>('https://fakestoreapi.com/products');
  }
}
