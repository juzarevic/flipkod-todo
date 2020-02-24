import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskDeleteComponent} from './task-delete.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserModule} from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [TaskDeleteComponent],
  imports: [
    CommonModule,
    FormsModule,

    MatDialogModule,

    MatFormFieldModule,

    MatButtonModule,
    MatSnackBarModule
  ]
})
export class TaskDeleteModule {
}
