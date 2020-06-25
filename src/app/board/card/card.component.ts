import { Component, OnInit, Input } from '@angular/core';
import { CardList } from 'src/app/models/cardList-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: CardList;

  constructor() { }

  ngOnInit(): void {
  }

}
