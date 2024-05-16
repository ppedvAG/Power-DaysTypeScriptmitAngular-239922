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

    getTodoItem(id: number): Todo | null {
        if (this.todoList[id]) {
            return this.todoList[id];
        }
        return null;
    }

    async commitTodoItem(item: Todo) {
        // TODO sende an server
        this.todoList.push(item);
    }

    async updateTodoItem(id: number, item: Todo) {
        // TODO aktualisiere ein Item auf server
        this.todoList[id] = item;
    }

    async deleteTodoItem(id: number) {
        // loesche Todo Item
    }
}
