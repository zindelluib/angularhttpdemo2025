import { Component } from '@angular/core';
import { TodolistService } from './todolist.service';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [NgFor,NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos:any;

  constructor(private todoListService: TodolistService ) {}

  ngOnInit(){
    this.loadTodos()
  }

  loadTodos(){
    this.todoListService.getTodos().subscribe( res => {
      this.todos  =  res
    })
  }
}
