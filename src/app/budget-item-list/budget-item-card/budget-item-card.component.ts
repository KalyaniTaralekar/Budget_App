import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget_item_model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit{
  //Take in a parameter using input decorator to create aproperty that can be 
  // input into the property
  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(){}

  ngOnInit(): void {
  }
  OnxButtonClick()
  {
    this.xButtonClick.emit();
  }
  OnCardClick()
  {
    this.cardClick.emit();
  }
}
