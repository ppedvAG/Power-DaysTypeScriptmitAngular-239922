import { Component, Input } from '@angular/core';
import { CardType, cardSymbols } from '../models/card.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    @Input({ required: true }) value!: string;
    @Input() type: CardType = 'pik';

    get color() {
        if (this.type === 'herz' || this.type === 'karo') {
            return 'red';
        }
        return 'black';
    }

    get symbol() {
        return cardSymbols[this.type];
    }
}
