import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { InputComponent } from './shared/input/input.component';
import { FormsModule } from '@angular/forms';
import { ToDoTaskComponent } from './to-do/to-do-list/to-do-task/to-do-task.component';
import { ToDoListComponent } from './to-do/to-do-list/to-do-list.component';
import { ToDoComponent } from './to-do/to-do.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ToDoEditTaskComponent } from './to-do/to-do-list/to-do-edit-task/to-do-edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    InputComponent,
    ToDoTaskComponent,
    ToDoListComponent,
    ToDoComponent,
    HeaderComponent,
    AlertComponent,
    ToDoEditTaskComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
