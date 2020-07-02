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

    remove(col: ColumnList) {
        this.columnList.splice(this.columnList.findIndex((item)=>item.$key == col.$key), 1);   
    }

    getAllColumn(): Observable<ColumnList[]> {
        return of(this.columnList)
    }
    

}