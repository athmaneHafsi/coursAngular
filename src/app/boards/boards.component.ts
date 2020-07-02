import { Component, OnInit } from '@angular/core';
import { BoardList } from '../models/boardList-model';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  boardLists: BoardList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
