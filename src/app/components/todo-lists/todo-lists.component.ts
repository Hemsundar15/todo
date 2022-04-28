import { Component, OnInit, Input } from '@angular/core';
import {ITodo}  from './../../app.component';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.scss']
})
export class TodoListsComponent implements OnInit {
  @Input() todos: ITodo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(id: number){
    this.todos = this.todos.filter((value: ITodo, index) => index !== id);
  }
}