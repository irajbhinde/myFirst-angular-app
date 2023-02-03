import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter <Todo> = new EventEmitter();
  title: string;
  description : string;
  submitTodo(){
    console.log("click");
    const todo = {
      id: 333,
      title : this.title,
      description : this.description,
      active : true
    }
    this.todoAdd.emit(todo)
  }
}
