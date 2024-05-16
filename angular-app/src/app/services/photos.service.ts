import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, startWith } from 'rxjs';
import { Photo } from '../photos-modul/models/photo.model';

@Injectable({
    providedIn: 'root',
})
export class PhotosService {
    private photosUrl = 'https://jsonplaceholder.typicode.com/photos/';

    constructor(private http: HttpClient) {}

    getPhotos(): Observable<Photo[]> {
        return this.http.get<Photo[]>(this.photosUrl).pipe(startWith([]));
    }
}
