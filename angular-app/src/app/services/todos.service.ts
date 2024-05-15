import { Injectable } from '@angular/core';
import { Todo } from '../demo-modul/models/todo.model';

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    readonly url = 'https://jsonplaceholder.typicode.com/todos';
    todoList: Todo[] = [];

    constructor() {}

    async fetchTodoList(): Promise<Todo[]> {
        if (this.todoList.length < 1) {
            const list = await fetch(this.url)
                .then((response) => response.json())
                .catch((error) => console.error(error));
            this.todoList = list.splice(0, 21);
        }
        return this.todoList;
    }

    async commitTodoItem(item: Todo) {
        // sende an server
        this.todoList.push(item);
    }

    async updateTodoItem(id: string, item: Partial<Todo>) {
        // aktualisiere ein Item auf server
    }

    async deleteTodoItem(id: string) {
        // loesche Todo Item
    }
}
