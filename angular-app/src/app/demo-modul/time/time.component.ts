import { Component } from '@angular/core';

@Component({
    selector: 'app-time',
    template: ` <p>{{ output }}</p> `,
    styles: ``,
})
export class TimeComponent {
    // output ist implizit public und muss auch public sein um vom template darauf zugreifen zu koennen
    output = '';

    constructor() {
        this.setTime();
        setInterval(() => this.setTime(), 1000);
    }

    private setTime() {
        this.output = new Date().toLocaleTimeString();
    }
}
