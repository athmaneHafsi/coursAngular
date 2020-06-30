import { Component, OnInit, Input, Output } from '@angular/core';
import { CardList } from 'src/app/models/cardList-model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: CardList;
  @Output() rem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeCard(){
    this.rem.emit(this.item);
  }
}
