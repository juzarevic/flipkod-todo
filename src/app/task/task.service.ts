import {Injectable} from '@angular/core';
import {TaskInterface} from './task.interface';
import {Observable, of} from 'rxjs';
import {max} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: TaskInterface[] = [
    {
      id: 1,
      name: 'Prvi task ikad',
      description: 'Ovaj task je temelj svih taskova.',
      created: new Date(2020, 2, 14, 21, 42, 17),
    }, {
      id: 2,
      name: 'Platiti račune',
      description: 'Trebalo bi platiti makar struju.',
      created: new Date(2020, 2, 15, 12, 34, 56),
    }, {
      id: 3,
      name: 'Treći task',
      description: 'Kako bismo mogli imati tri taska.',
      created: new Date(2020, 2, 22, 13, 14, 15),
    },
  ];

  constructor() {
  }

  emptyModel$(): Observable<TaskInterface> {
    return of({
      id: 0,
      name: '',
      description: '',
      created: new Date(),
    });
  }

  list$(): Observable<TaskInterface[]> {
    return of(this.tasks);
  }

  create$(entry: TaskInterface): Observable<TaskInterface> {
    const newId = Math.max(...this.tasks.map(task => task.id)) + 1;
    const newEntry = {...entry, id: newId, created: new Date()};
    this.tasks.push(newEntry);
    return of(newEntry);
  }

  update$(entry: TaskInterface): Observable<TaskInterface> {
    const index = this.tasks.findIndex(obj => obj.id === entry.id);
    this.tasks[index] = {...entry};
    return of(this.tasks[index]);
  }

  delete$(entry: TaskInterface): Observable<TaskInterface> {
    const index = this.tasks.findIndex(obj => obj.id === entry.id);
    this.tasks.splice(index, 1);
    return this.emptyModel$();
  }
}
