import { Component } from '@angular/core';

@Component({
    selector: 'app-home-away',
    template: `
        <p [ngClass]="{ home: home, away: !home }" (mouseover)="home = true" (mouseout)="home = false">
            <span *ngIf="home">🎉 Home</span>
            <span *ngIf="!home">🌏 Away</span>
        </p>
    `,
    styles: `
    p { cursor: default; padding: 1rem 2rem; display: inline-block; }
    .home { color: black; background-color: gold; }
    .away { color: white; background-color: gray; }
    `,
})
export class HomeAwayComponent {
    home = false;
}
