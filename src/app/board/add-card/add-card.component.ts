import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CardList } from 'src/app/models/cardList-model';
import { CardService } from "../@shared/card.service";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})

export class AddCardComponent implements OnInit {

  cardForm: FormGroup;
  constructor(private CardService: CardService, private formBuilder: FormBuilder) { }

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
    this.CardService.add(newCard);
  }
}
