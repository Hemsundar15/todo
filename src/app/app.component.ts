import { Component } from '@angular/core';

export interface ITodo {
  description: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: ITodo[] = [
    {
        description: 'Learn Angular'
    },  
    {
        description: 'Take bath'
    }
  ]
}
