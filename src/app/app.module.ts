import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator'
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { HistoryComponent } from './components/history/history.component';
import { ConverterComponent } from './components/converter/converter.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoinsComponent } from './components/coins/coins.component';
import { TableModule } from 'primeng/table';
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    ConverterComponent,
    CurrenciesComponent,
    FooterComponent,
    NavbarComponent,
    GreetingsComponent,
    CoinsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    TableModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
