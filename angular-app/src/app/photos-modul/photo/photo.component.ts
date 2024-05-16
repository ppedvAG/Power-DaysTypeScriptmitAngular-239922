import { Component, Input } from '@angular/core';
import { Photo } from '../models/photo.model';

@Component({
    selector: 'app-photo',
    templateUrl: './photo.component.html',
    styleUrl: './photo.component.css',
})
export class PhotoComponent {
    @Input() photo!: Photo;

    get rating(): number {
        return this.photo.id % 5;
    }
}
