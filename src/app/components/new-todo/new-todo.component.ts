import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from 'src/app/app.component';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  @Input() todos: ITodo[] = [];
  
  constructor() {}
  
  ngOnInit(): void {
    console.log(this.todos)
  }

  newTodo: string = '';
  
  handleUpdate(event: any) {
    this.newTodo = event.target.value;
  }

  handleSubmit(event: any){
    event.preventDefault();

    if (this.newTodo.length !== 0){
      this.todos.push({description: this.newTodo})
    }
  }
}
