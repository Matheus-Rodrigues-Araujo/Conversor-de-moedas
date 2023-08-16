import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HistoryComponent } from './components/history/history.component';
import { ConverterComponent } from './components/converter/converter.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GreetingsComponent } from './components/greetings/greetings.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    ConverterComponent,
    CurrenciesComponent,
    FooterComponent,
    NavbarComponent,
    GreetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
