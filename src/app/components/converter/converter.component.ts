import { Component, OnInit} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// @Injectable({
//   providedIn: 'root'
// })

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent implements OnInit  {


  public fromCurrency : string = 'BRL'
  public toCurrency: string = 'USD'
  public currencies: any;
  public curr: any;
  public symbolsList: any;
  public input1: number = 1
  public input2 : number = 1

  constructor(
    private httpClient: HttpClient
    ){}
   
   ngOnInit(): void {
      this.getCurrency()
      this.getSymbols()
      


    }

    getCurrency():void{
      const url = `https://api.exchangerate.host/convert?from=${this.fromCurrency}&to=${this.toCurrency}`
      this.httpClient.get(url).toPromise().then(data => {
        this.currencies = data
        this.input2 = this.currencies.result.toFixed(2)
        console.log(this.currencies)
      })
    }

    async getSymbols(){
      const url = `https://api.exchangerate.host/symbols`
      await this.httpClient.get(url).toPromise().then(data => {
        this.symbolsList = data
      })
    
    }

    showCurrencies(): any{
      if(this.symbolsList && this.symbolsList.symbols){
        for (const symbol of Object.keys(this.symbolsList.symbols)) {
          const currency = this.symbolsList.symbols[symbol];
          console.log(symbol + ': ' + currency);
        }
    }
  }




    onChangeValue():number{
      this.input2 = this.input1 * this.currencies.result.toFixed(2)
      return   this.input2
    }

}

