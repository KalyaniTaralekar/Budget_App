import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit{
  //Take in a parameter using input decorator to create aproperty that can be 
  // input into the property
  @Input() isIncome: boolean = true;

  constructor(){}

  ngOnInit(): void {
  }
}
