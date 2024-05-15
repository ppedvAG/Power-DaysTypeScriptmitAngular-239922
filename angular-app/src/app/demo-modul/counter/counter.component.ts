import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html',
    styles: `
    button { padding: 1rem 2rem }
    .warning { color: orange; }
    .danger { color: red; }
    .okay { color: green; }
    `,
})
export class CounterComponent {
    count = 0;

    @Input() limit = 10;

    // Wir definieren ein eigenes Event mit Output
    @Output() limitReached = new EventEmitter();

    increment() {
        if (this.count >= this.limit) {
            // Hier feuern wir unser Event worauf wir ausserhalb der Component damit reagieren koennen
            this.limitReached.emit();
        }
        this.count++;
    }
}
