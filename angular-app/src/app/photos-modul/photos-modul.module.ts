import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PhotosOverviewComponent } from './photos-overview/photos-overview.component';
import { RatingComponent } from './rating/rating.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
    declarations: [PhotosOverviewComponent, RatingComponent, GalleryComponent, PhotoComponent],
    imports: [CommonModule, HttpClientModule],
    exports: [PhotosOverviewComponent],
})
export class PhotosModulModule {}
