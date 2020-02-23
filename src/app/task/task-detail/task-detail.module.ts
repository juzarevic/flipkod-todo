import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskDetailComponent} from './task-detail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [TaskDetailComponent],
  imports: [
    CommonModule,
    FormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

    MatSnackBarModule

  ]
})
export class TaskDetailModule {
}
