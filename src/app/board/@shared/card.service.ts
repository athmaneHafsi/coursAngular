import { Injectable } from '@angular/core';
import { CardList } from 'src/app/models/cardList-model';
import {Observable, BehaviorSubject, of} from "rxjs";

@Injectable({ providedIn: 'root' })

export class CardService {
    private cardList: CardList[] = [];

    add(card: any) {
        // add modal to array of active modals
        this.cardList.push(card);
    }

    remove(id: string) {
        
    }

    getAllColumn(): Observable<CardList[]> {
        return of(this.cardList)
    }
    

}