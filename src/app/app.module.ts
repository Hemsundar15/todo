import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoListsComponent } from './components/todo-lists/todo-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    TodoListsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
