import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './board/card/card.component';
import { ColumnComponent } from './board/column/column.component';
import { AddColumnComponent } from './board/add-column/add-column.component';
import { AddCardComponent } from './board/add-card/add-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BoardsComponent } from './boards/boards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ColumnComponent,
    AddColumnComponent,
    AddCardComponent,
    BoardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
