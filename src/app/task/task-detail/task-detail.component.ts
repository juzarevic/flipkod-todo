import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TaskInterface} from '../task.interface';
import {TaskService} from '../task.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  private dataOriginal: TaskInterface;

  get title(): any {
    if (this.dataOriginal.id) {
      return `Edit task <strong>${this.dataOriginal.name}</strong>`;
    } else {
      return `Create new task`;

    }
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TaskInterface,
    private taskService: TaskService,
    private snackBar: MatSnackBar
  ) {
    this.dataOriginal = {...data};
  }

  ngOnInit(): void {
  }

  save() {
    this.taskService.update$(this.data).subscribe(next => {
      this.data = next;
      this.dataOriginal = {...this.data};

      this.snackBar.open('Task successfully saved.');
    });
  }

  add() {
    this.taskService.create$(this.data).subscribe(next => {
      this.data = next;
      this.dataOriginal = {...this.data};

      this.snackBar.open('Task successfully created.');
    });
  }
}
