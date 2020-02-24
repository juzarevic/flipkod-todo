import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {TaskInterface} from '../task.interface';
import {TaskService} from '../task.service';
import {TaskDetailComponent} from '../task-detail/task-detail.component';
import {MatDialog} from '@angular/material/dialog';
import {SelectionModel} from '@angular/cdk/collections';
import {TaskDeleteComponent} from '../task-delete/task-delete.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements AfterViewInit, OnInit {

  constructor(
    private taskService: TaskService,
    public dialog: MatDialog
  ) {
    this.taskService.emptyModel$().subscribe(next => this.selectedTask = next);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TaskInterface>;
  dataSource: MatTableDataSource<TaskInterface>;

  selection = new SelectionModel<TaskInterface>(true, []);


  selectedTask: TaskInterface;

  displayedColumns = ['select', 'id', 'name', 'description', 'created'];

  get isAllSelected() {
    return this.lengthSelected === this.dataSource.data.length;
  }

  get lengthSelected() {
    return this.selection.selected.length;
  }

  masterToggle() {
    this.isAllSelected ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
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

    dialogRef.afterClosed().subscribe(() => {
      this.resetAndRefreshTable();
    });
  }

  openTaskDeleteDialog() {
    const dialogRef = this.dialog.open(TaskDeleteComponent, {
      width: '400px',
      data: [...this.selection.selected]
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.selection.clear();
      }
      this.resetAndRefreshTable();
    });
  }

  private resetAndRefreshTable() {
    this.dataSource.data = this.dataSource.data;
    this.taskService.emptyModel$().subscribe(next => this.selectedTask = next);
  }
}
