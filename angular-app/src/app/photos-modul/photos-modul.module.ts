import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosOverviewComponent } from './photos-overview/photos-overview.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
    declarations: [PhotosOverviewComponent, RatingComponent],
    imports: [CommonModule],
    exports: [PhotosOverviewComponent],
})
export class PhotosModulModule {}
