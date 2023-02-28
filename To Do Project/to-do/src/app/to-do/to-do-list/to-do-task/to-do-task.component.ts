import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../to-do.service';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css'],
})
export class ToDoTaskComponent implements OnInit {
  // @Input() task: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toDoService: TaskService
  ) {}

  ngOnInit(): void {
    console.log('to do task init');
  }

  onCancel() {
    this.router.navigate(['todo']);
  }

  onAdd(task: string) {
    this.toDoService.isAddTaskMode = false;
    this.toDoService.addTaskToTasks(task);
    const tasks = this.toDoService.allTasks;
    this.toDoService.saveDataToDB().subscribe(() => {
      this.toDoService.taskAdded.next(tasks);
      this.router.navigate(['todo']);
    });
  }
}
