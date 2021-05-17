import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-book',
  templateUrl: './order-book.component.html',
  styleUrls: ['./order-book.component.scss']
})
export class OrderBookComponent implements OnInit {
  orderBook_array = [
    {assest: 'All', pnl: '', mfe: '', mae: ''},
    {assest: 'Equity', pnl: '', mfe: '', mae: ''},
    {assest: 'Eq Futures', pnl: '', mfe: '', mae: ''},
    {assest: 'Eq Options', pnl: '', mfe: '', mae: ''},
    {assest: 'Commodity', pnl: '', mfe: '', mae: ''},
    {assest: 'Currency', pnl: '', mfe: '', mae: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
