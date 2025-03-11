import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http:HttpClient) { }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
