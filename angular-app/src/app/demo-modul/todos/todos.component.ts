import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
    todoList: Todo[] = [];
    currentId = 0;

    @ViewChild('inputRef') inputRef!: ElementRef;

    async ngOnInit(): Promise<void> {
        const list = await fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .catch((error) => console.error(error));
        this.todoList = list.splice(0, 21);
        this.currentId = this.todoList.length;
    }

    get percentDone() {
        const doneCount = this.todoList.filter((e) => e.completed).length;
        return doneCount / this.todoList.length;
    }

    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }

    addTodo(value: string) {
        // push fuegt Element an letzter Stelle hinzu,
        // unshift fuegt Element an erster Stelle hinzu
        this.todoList.push({
            id: `${++this.currentId}`,
            title: value,
            completed: false,
        });
    }
}
