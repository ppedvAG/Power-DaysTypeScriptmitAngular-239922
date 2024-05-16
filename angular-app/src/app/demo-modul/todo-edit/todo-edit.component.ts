import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/todo.model';

@Component({
    selector: 'app-todo-edit',
    templateUrl: './todo-edit.component.html',
    styleUrl: './todo-edit.component.css',
})
export class TodoEditComponent implements OnInit {
    currentId?: number;
    currentTodo: Todo | null = null;

    constructor(private service: TodosService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        // VORSICHT! Wir rufen hier das snapshot der route auf. D.h. wir
        // erhalten nur die id zum initialen Zeitpunkt
        this.currentId = Number(this.route.snapshot.params['id']);

        if (this.currentId) {
            this.currentTodo = this.service.getTodoItem(this.currentId);
        }

        // TODO Um das zu beheben muessen wir mit observables arbeiten
    }

    async submit(value: string) {
        if (this.currentTodo !== null) {
            this.updateTodo();
        } else {
            this.addTodo(value);
        }
    }

    private async addTodo(value: string) {
        const todo = {
            id: this.currentId,
            title: value,
            completed: false,
        } as Todo;
        await this.service.commitTodoItem(todo);
        this.router.navigate(['/todos']);
    }

    private async updateTodo() {
        if (this.currentId) {
            await this.service.updateTodoItem(this.currentId, this.currentTodo!);
        }
    }
}
