import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.component.html',
    styleUrl: './todo-add.component.css',
})
export class TodoAddComponent implements OnInit {
    currentId?: string;

    constructor(private service: TodosService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        // VORSICHT! Wir rufen hier das snapshot der route auf. D.h. wir
        // erhalten nur die id zum initialen Zeitpunkt
        this.currentId = this.route.snapshot.params['id'];

        // Um das zu beheben muessen wir mit observables arbeiten
        // TODO
    }

    async addTodo(value: string) {
        const todo = {
            id: `${this.currentId}`,
            title: value,
            completed: false,
        };
        await this.service.commitTodoItem(todo);
        this.router.navigate(['/todos']);
    }
}
