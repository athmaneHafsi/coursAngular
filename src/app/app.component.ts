import { Component, Inject, OnInit } from '@angular/core';
import {ColumnList} from './models/columnList-model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import {AddColumnComponent} from "./board/add-column/add-column.component";
import { ColumnService } from "./board/@shared/column.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'coursAngular';
  columLists:ColumnList[]

  constructor(private ColumnService: ColumnService, public matDialog: MatDialog) {}

  ngOnInit(): void {
    this.ColumnService.getAllColumn()
        .subscribe(columnList => this.columLists = columnList);
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "200px";
    dialogConfig.width = "300px";
    const modalDialog = this.matDialog.open(AddColumnComponent, dialogConfig);
  }

}
