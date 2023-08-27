import { Component, OnInit } from '@angular/core';
import { CoinsService } from './coins.service';
import { CoinsObject } from './coin.interface';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})

export class CoinsComponent {
  coins: any[] = []
  
  constructor(private coinsService: CoinsService){}

  ngOnInit():void{
    this.coinsService.getCoins().subscribe(data => {
      this.coins = data
      console.log(this.coins)
    })
  }

}
