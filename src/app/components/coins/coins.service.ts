// coins.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { CoinsObject } from './coin.interface';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  constructor(private http: HttpClient) {}

  getCoins(): Observable<any[]> {
    return this.http.get<any>("https://api.exchangerate.host/symbols").pipe(
        map(data => {
          const symbolsArray = [];
          for (const key in data.symbols) {
            if (data.symbols.hasOwnProperty(key)) {
              symbolsArray.push({
                code: key,
                description: data.symbols[key]
              });
            }
          }
          return symbolsArray;
        })
      );
    }
  
}
