import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CoinsService } from './coins.service';
import { CoinsObject } from './coin.interface';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})

export class CoinsComponent {
  coins: any[] = []
  displayedColumns: string[] = ['code', 'description']; // Colunas a serem exibidas
  dataSource = new MatTableDataSource<any>(this.coins);

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private coinsService: CoinsService){}

  ngOnInit():void{
    this.coinsService.getCoins().subscribe(data => {
      this.coins = data
      this.dataSource.data = this.coins
      this.dataSource.paginator = this.paginator
    })
  }

  // ngAfterViewInit(){
  //   this.dataSource.paginator = this.paginator
  //   this.paginator.pageSize = 20
  // }

}
