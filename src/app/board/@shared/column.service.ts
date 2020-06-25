import { Injectable } from '@angular/core';
import { ColumnList } from 'src/app/models/columnList-model';
import {Observable, BehaviorSubject, of} from "rxjs";

@Injectable({ providedIn: 'root' })

export class ColumnService {
    private columnList: ColumnList[] = [];

    add(column: any) {
        // add modal to array of active modals
        this.columnList.push(column);
    }

    remove(id: string) {

    }

    getAllColumn(): Observable<ColumnList[]> {
        return of(this.columnList)
    }
    

}