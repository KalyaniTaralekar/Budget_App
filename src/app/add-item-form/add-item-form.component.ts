import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget_item_model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  
  //takes in the value of the model
  @Input() item: BudgetItem = new BudgetItem('', 0);
  //creating a event emitter after the form is submitted
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  
  isNewItem: boolean;
  ngOnInit()
  {
    if (this.item) {
      //if item has a value then the item is updated not added 
      this.isNewItem = false;
    }
    else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
   }
  
  onSubmit(form:NgForm)
  {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
