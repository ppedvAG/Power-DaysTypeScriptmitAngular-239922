import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodosService } from '../../services/todos.service';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit, AfterViewInit {
    todoList: Todo[] = [];
    currentId = 0;

    @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

    constructor(private service: TodosService) {}

    async ngOnInit(): Promise<void> {
        const list = await this.service.fetchTodoList();
        this.todoList = list.splice(0, 21);
        this.currentId = this.todoList.length;
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

    async addTodo(value: string) {
        const todo = {
            id: `${++this.currentId}`,
            title: value,
            completed: false,
        };
        await this.service.commitTodoItem(todo);

        // push fuegt Element an letzter Stelle hinzu,
        // unshift fuegt Element an erster Stelle hinzu
        this.todoList.push(todo);
    }
}
