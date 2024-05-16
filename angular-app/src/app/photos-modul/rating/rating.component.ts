import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styles: ``,
})
export class RatingComponent {
    @Input() stars = 0;

    get starsString() {
        return '⭐'.repeat(this.stars);
    }
}
