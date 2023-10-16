import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget_item_model';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {
 
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<any>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void { }

  OnDelete(item:BudgetItem)
  {
    this.delete.emit(item);
  }
  OnCardClick(item:BudgetItem)
  {
    const dialogRef = this.dialog.open(EditItemComponent, {
      width: '580px',
      height:'150px',
      data:item
    });
    dialogRef.afterClosed().subscribe(result => {
      // check if result has a value
      if (result)
      {
      
        this.update.emit(
          {
            old: item,
            new: result
          });
     }
    });
  }

}
export interface UpdateEvent{
  old: BudgetItem;
  new: BudgetItem;
  }