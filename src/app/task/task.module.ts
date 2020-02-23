import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TaskListModule} from './task-list/task-list.module';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskDetailModule} from './task-detail/task-detail.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    TaskListModule,
    TaskDetailModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskModule {
}
