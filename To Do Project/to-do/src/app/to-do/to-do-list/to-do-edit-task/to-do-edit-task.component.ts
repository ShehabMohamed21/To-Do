import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../to-do.service';

@Component({
  selector: 'app-to-do-edit-task',
  templateUrl: './to-do-edit-task.component.html',
  styleUrls: ['./to-do-edit-task.component.css'],
})
export class ToDoEditTaskComponent implements OnInit {
  taskToEdit: string = '';
  constructor(private toDoService: TaskService) {}

  ngOnInit(): void {
    this.taskToEdit = this.toDoService.taskToEdit;
    console.log(this.taskToEdit);
  }

  onEdit() {
    console.log(this.taskToEdit);
  }
  onCancel() {}
}
