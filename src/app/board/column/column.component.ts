import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ColumnList } from 'src/app/models/columnList-model';
import { AddCardComponent } from '../add-card/add-card.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() item: ColumnList;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  addCard() {
    
    
  }
  
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "300px";
    dialogConfig.width = "500px";
    const modalDialog = this.matDialog.open(AddCardComponent, dialogConfig);
  }

}
