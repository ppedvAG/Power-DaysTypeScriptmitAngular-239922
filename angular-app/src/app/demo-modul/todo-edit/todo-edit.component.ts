import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/todo.model';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-todo-edit',
    templateUrl: './todo-edit.component.html',
    styleUrl: './todo-edit.component.css',
})
export class TodoEditComponent {
    createNew = true;
    currentId?: number;
    currentTodo?: Todo;
    editForm?: FormGroup;

    constructor(
        private service: TodosService,
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ) {
        this.initForm();
    }

    initForm(): void {
        // VORSICHT! Wir rufen hier das snapshot der route auf. D.h. wir
        // erhalten nur die id zum initialen Zeitpunkt
        // TODO Um das zu beheben muessen wir mit observables arbeiten
        this.currentId = Number(this.route.snapshot.params['id']);

        if (this.currentId) {
            const todo = this.service.getTodoItem(this.currentId);
            if (todo) {
                this.createNew = false;
                this.currentTodo = todo;
            } else {
                this.currentTodo = {} as Todo;
            }
        }
        this.editForm = this.formBuilder.group({
            title: [this.currentTodo?.title, Validators.required],
            description: [this.currentTodo?.description],
            duedate: [this.currentTodo?.dueDate?.toDateString()],
            labels: this.formBuilder.array([this.formBuilder.control('')]),
        });
    }

    get labels(): FormArray {
        return this.editForm?.get('labels') as FormArray;
    }

    addLabel() {
        this.labels.push(this.formBuilder.control(''));
    }

    async submit() {
        console.log(this.editForm);
        if (this.currentTodo !== null) {
            this.updateTodo();
        } else {
            this.addTodo('');
        }
        debugger;
        this.router.navigate(['/todos']);
    }

    private async addTodo(value: string) {
        console.log('create todo');
        const todo = {
            id: this.currentId,
            title: value,
            completed: false,
        } as Todo;
        await this.service.commitTodoItem(todo);
    }

    private async updateTodo() {
        if (this.currentId) {
            console.log('update todo');
            await this.service.updateTodoItem(this.currentId, this.currentTodo!);
        }
    }
}
