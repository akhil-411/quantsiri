import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-managemnent',
  templateUrl: './money-managemnent.component.html',
  styleUrls: ['./money-managemnent.component.scss']
})
export class MoneyManagemnentComponent implements OnInit {
  // Stats: Count, Time, Profit           Avg Win Stats       Avg Loss Stats
  moneyManagement_array = [
    {key : 'Total Margin', value: ''},
    {key : 'Margin Available', value: ''},
    {key : 'Liquidation Value', value: ''},
    {key : 'Realized Profit/Loss', value: ''},
    {key : 'Unrealized Profit/Loss', value: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
