import { Component, OnDestroy } from '@angular/core';
import { Photo } from '../models/photo.model';
import { PhotosService } from '../../services/photos.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnDestroy {
    photoList: Photo[] = [];
    subscription: Subscription;

    constructor(service: PhotosService) {
        // Wir koennen uns bereits im constructur auf das Observable subscriben statt OnInit weil wir kein async/await benoetigen
        this.subscription = service.getPhotos().subscribe((result) => (this.photoList = result.slice(0, 20)));
    }

    ngOnDestroy(): void {
        // Wichtig da sonst Speicherlecks entstehen koennen
        this.subscription.unsubscribe();
    }
}
