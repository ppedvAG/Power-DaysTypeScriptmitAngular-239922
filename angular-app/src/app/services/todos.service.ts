import { Injectable } from '@angular/core';
import { Todo } from '../demo-modul/models/todo.model';

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    readonly url = 'https://jsonplaceholder.typicode.com/todos';

    constructor() {}

    async fetchTodoList(): Promise<Todo[]> {
        return fetch(this.url)
            .then((response) => response.json())
            .catch((error) => console.error(error));
    }

    async commitTodoItem(item: Todo) {
        // sende an server
    }

    async updateTodoItem(id: string, item: Partial<Todo>) {
        // aktualisiere ein Item auf server
    }

    async deleteTodoItem(id: string) {
        // loesche Todo Item
    }
}
