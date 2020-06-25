import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CardList } from 'src/app/models/cardList-model';
import { CardService } from "../@shared/card.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})

export class AddCardComponent implements OnInit {

  cardForm: FormGroup;
  constructor(private CardService: CardService, private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.cardForm = this.formBuilder.group({
      title: '',
      description: '',
      order: '',
      color: '',
      priority: ''
    });
  }

  addCard(){
    const formValue = this.cardForm.value;
    let newCard:CardList = new CardList();
      newCard.title = formValue['title'];
      newCard.order = formValue['order'];
      newCard.description = formValue['description'];
      newCard.priority = formValue['priority'];
      newCard.color = formValue['color'];
      newCard.columnListId = this.data.id;
      newCard.$key = this.generateKey();
    this.CardService.add(newCard);
  }
  
  generateKey(): String {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const lengthOfCode = 4;
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }
}
