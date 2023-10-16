import { Component, Input, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget_item_model';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit{
  // @Input() item: BudgetItem;
// The aove statement is no more required as we have used the @inject in constructor
  constructor(
    public diaglogRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) { }
  
  ngOnInit(): void {
  }

  onSubmitted(updatedItem:BudgetItem) {
    this.diaglogRef.close(updatedItem);
  }
}
