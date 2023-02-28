import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoTaskComponent } from './to-do/to-do-list/to-do-task/to-do-task.component';
import { AuthGuard } from './auth/auth.guard';
import { WelcomeGuard } from './welcome.guard';
import { ToDoEditTaskComponent } from './to-do/to-do-list/to-do-edit-task/to-do-edit-task.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
  {
    path: 'todo',
    component: ToDoComponent,
    // children: [{ path: 'task', component: ToDoTaskComponent }],
  },
  { path: 'task', component: ToDoTaskComponent },
  { path: 'edit', component: ToDoEditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
