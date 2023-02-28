import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TaskService } from './to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit, OnDestroy {
  isAddTask = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toDoService: TaskService
  ) {}

  ngOnInit(): void {
    this.toDoService.fetchDataFromDB().subscribe((tasks: string[]) => {
      this.toDoService.allTasks = tasks;
    });

    this.isAddTask = this.toDoService.isAddTaskMode;
    // this.toDoService.taskAdded.subscribe((tasks: string[]) => {
    //   this.toDoService.allTasks = tasks;
    // });

    console.log('to do is created !!');
  }

  ngOnDestroy(): void {
    // console.log('to do component is destroyed successfully !!');
  }

  onAdd() {
    this.isAddTask = true;
    this.router.navigate(['task']);
  }

  onLoadData() {
    this.toDoService.fetchDataFromDB().subscribe((response) => {
      console.log(response);
    });
  }

  onSaveData() {
    this.toDoService.saveDataToDB().subscribe((respData) => {
      console.log(respData);
    });
  }
}
