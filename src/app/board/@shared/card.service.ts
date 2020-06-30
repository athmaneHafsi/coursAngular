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

    remove(card: CardList) {
        this.cardList.splice(this.cardList.findIndex((item)=>item.$key == card.$key), 1);
       
    }

    getAllCards(): Observable<CardList[]> {
        return of(this.cardList)
    }
    
    getCardsById(id: String): Observable<CardList[]> {
        let result = this.cardList.filter(item=>item.columnListId == id);
        console.log(result);
        return of(result);
    }

}