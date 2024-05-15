import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodosService } from '../../services/todos.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit, AfterViewInit {
    todoList: Todo[] = [];
    currentId = 0;

    @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

    constructor(private service: TodosService) {}

    async ngOnInit(): Promise<void> {
        this.todoList = await this.service.fetchTodoList();
        this.currentId = this.todoList.length + 1;
    }

    ngAfterViewInit(): void {
        // Hier koennen wir auf inputRef zugreifen. Davor ist inputRef === undefined!
        this.inputRef.nativeElement.style.borderColor = 'lavender';
    }

    get percentDone() {
        const doneCount = this.todoList.filter((e) => e.completed).length;
        return doneCount / this.todoList.length;
    }

    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }

    edit(todo: Todo) {
        this.inputRef.nativeElement.value = todo.title;
        this.inputRef.nativeElement.focus();
    }
}
