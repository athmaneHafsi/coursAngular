import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ColumnList } from 'src/app/models/columnList-model';
import { ColumnService } from "../@shared/column.service";

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss']
})

export class AddColumnComponent implements OnInit {
  columnForm: FormGroup;
  constructor(private ColumnService : ColumnService, public dialogRef: MatDialogRef<AddColumnComponent>, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.initForm();
  }

  closeModal() {
    this.dialogRef.close();
  }

  initForm() {
    this.columnForm = this.formBuilder.group({
      title: ['', Validators.required],
      order: ''
    });
  }

  addColumn(){
    const formValue = this.columnForm.value;
    let newColumn:ColumnList = new ColumnList();
      newColumn.title = formValue['title'];
      newColumn.order = formValue['order'];
    this.ColumnService.add(newColumn);
  }

}
