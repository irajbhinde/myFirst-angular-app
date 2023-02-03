import { Component,Input,Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
  @Input() todo: Todo;
  @Input() i : number;
  @Output() todoDelete: EventEmitter <Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter <Todo> = new EventEmitter();
  clickFunc(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("Onclick triggered");
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckbox.emit(todo); 
  }
  constructor(){}
}
