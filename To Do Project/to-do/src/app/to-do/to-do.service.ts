import { Injectable } from '@angular/core';
import { map, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private http: HttpClient) {}
  allTasks: string[] = [];
  taskAdded = new Subject<string[]>();
  isAddTaskMode = false;
  taskToEdit: string = '';

  ngOnInit() {
    this.isAddTaskMode = false;
    this.taskAdded.subscribe((newTasks: string[]) => {
      this.allTasks = newTasks;
    });
  }

  addTaskToTasks(newTask: string) {
    this.allTasks.push(newTask);
  }

  saveDataToDB() {
    const tasks = this.allTasks.slice();
    console.log('save to db service reached');
    return this.http.put(
      'https://to-do-27268-default-rtdb.firebaseio.com/tasks.json',
      tasks
    );
  }

  fetchDataFromDB() {
    return this.http
      .get<string[]>(
        'https://to-do-27268-default-rtdb.firebaseio.com/tasks.json'
      )
      .pipe(
        tap((tasks) => {
          this.overwriteTasks(tasks);
        })
      );
  }

  overwriteTasks(tasks: string[]) {
    this.allTasks = tasks;
    this.taskAdded.next(this.allTasks.slice());
  }
}
