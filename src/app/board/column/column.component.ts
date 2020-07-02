import { Component, OnInit, Input, Output } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ColumnList } from 'src/app/models/columnList-model';
import { AddCardComponent } from '../add-card/add-card.component';
import { CardService } from "../@shared/card.service"
import { CardList } from 'src/app/models/cardList-model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})

export class ColumnComponent implements OnInit {
  @Input() item: ColumnList;
  @Output() column = new EventEmitter();
  public cards: CardList[] = [];

  constructor(private CardService: CardService, public matDialog: MatDialog) { }

  ngOnInit(): void {
      this.CardService.getAllCards()
      .subscribe(cards => {
        this.cards = cards;
      });
  }
  
  removeCard(card: CardList){
    this.CardService.remove(card);
  }
  
  removeAllCards() {
    this.CardService.removeAll(this.item.$key);
  }

  removeSelf() {
    this.column.emit(this.item);
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "300px";
    dialogConfig.width = "500px";
    dialogConfig.data = {id: this.item.$key};
    const modalDialog = this.matDialog.open(AddCardComponent, dialogConfig);
  }

}
