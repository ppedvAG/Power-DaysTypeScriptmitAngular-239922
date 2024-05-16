import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodosService } from '../../services/todos.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
    todoList: Todo[] = [];
    currentId = 0;

    constructor(private service: TodosService) {}

    async ngOnInit(): Promise<void> {
        this.todoList = await this.service.fetchTodoList();
        this.currentId = this.todoList.length + 1;
    }

    get percentDone() {
        const doneCount = this.todoList.filter((e) => e.completed).length;
        return doneCount / this.todoList.length;
    }

    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }
}
