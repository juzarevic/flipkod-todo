import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {TaskInterface} from '../task.interface';
import {TaskService} from '../task.service';
import {TaskDetailComponent} from '../task-detail/task-detail.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TaskInterface>;
  dataSource: MatTableDataSource<TaskInterface>;

  selectedTask: TaskInterface;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description', 'created'];

  constructor(
    private taskService: TaskService,
    public dialog: MatDialog
  ) {
    this.taskService.emptyModel$().subscribe(next => this.selectedTask = next);
  }

  ngOnInit() {
    this.taskService.list$().subscribe(next => this.dataSource = new MatTableDataSource(next));
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openTaskDetailDialog() {
    const dialogRef = this.dialog.open(TaskDetailComponent, {
      width: '400px',
      data: {...this.selectedTask}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataSource.data = this.dataSource.data;
      this.taskService.emptyModel$().subscribe(next => this.selectedTask = next);
    });
  }
}
