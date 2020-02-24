import {Component, Inject, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TaskInterface} from '../task.interface';
import {MatSnackBar} from '@angular/material/snack-bar';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TaskInterface[],
    public dialogRef: MatDialogRef<TaskDeleteComponent>,
    private taskService: TaskService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  delete() {
    forkJoin(
      this.data.map(
        task => this.taskService.delete$(task)
      )).subscribe(() => {
      this.dialogRef.close(true);
      this.snackBar.open('Task successfully saved.');
    });
  }

}
