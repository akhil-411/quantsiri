import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OrderBookComponent } from './components/order-book/order-book/order-book.component';
import { MoneyManagemnentComponent } from './components/order-book/money-managemnent/money-managemnent.component';
import { OrderBookTableComponent } from './components/order-book/order-book-table/order-book-table.component';
import { PositionBookComponent } from './components/order-book/position-book/position-book.component';

import { OrderWindowComponent } from './components/manual-order/order-window/order-window.component';
import { MarketWatchComponent } from './components/manual-order/market-watch/market-watch.component';
import { TradeJournalComponent } from './components/manual-order/trade-journal/trade-journal.component';
import { OpenPositionsComponent } from './components/manual-order/open-positions/open-positions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    OrderBookComponent,
    MoneyManagemnentComponent,
    PositionBookComponent,
    OrderBookTableComponent,
    OrderWindowComponent,
    MarketWatchComponent,
    TradeJournalComponent,
    OpenPositionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
