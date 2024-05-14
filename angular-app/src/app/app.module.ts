import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModulModule } from './demo-modul/demo-modul.module';
import { PhotosModulModule } from './photos-modul/photos-modul.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, DemoModulModule, PhotosModulModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
