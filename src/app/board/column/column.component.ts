import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ColumnList } from 'src/app/models/columnList-model';
import { AddCardComponent } from '../add-card/add-card.component';
import { CardService } from "../@shared/card.service"
import { CardList } from 'src/app/models/cardList-model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})

export class ColumnComponent implements OnInit {
  @Input() item: ColumnList;
  public cards: CardList[] = [];

  constructor(private CardService: CardService, public matDialog: MatDialog) { }

  ngOnInit(): void {
   /* this.CardService.getCardsById(this.item.$key)
      .subscribe(cards => {
        console.log(cards);
        
        this.cards = cards
      });*/

      this.CardService.getAllCards()
      .subscribe(cards => {
        let result = this.cards.filter(item=>item.columnListId == this.item.$key);
        console.log(result);
        
        this.cards = cards;
      });
  }

  addCard() {

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
