import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  tasks: string[] = [];
  index: number = 0;
  evEmit = new EventEmitter<string>();
  constructor(private toDoService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.tasks = this.toDoService.allTasks;
    this.toDoService.taskAdded.subscribe((newTasks: string[]) => {
      // this.tasks = this.toDoService.allTasks;
      this.tasks = newTasks;
    });
  }

  onDoneTask(index: number) {
    const tasks = this.toDoService.allTasks;
    tasks.splice(index, 1);
    this.toDoService.taskAdded.next(tasks.slice());
  }

  onEditTask(index: number) {
    const currentTask = this.toDoService.allTasks[index];
    this.toDoService.taskToEdit = currentTask;
    console.log(this.toDoService.taskToEdit);
    this.router.navigate(['edit']);
  }
}
