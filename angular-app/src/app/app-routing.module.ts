import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoOverviewComponent } from './demo-modul/demo-overview/demo-overview.component';
import { PhotosOverviewComponent } from './photos-modul/photos-overview/photos-overview.component';
import { TodoListComponent } from './demo-modul/todo-list/todo-list.component';
import { TodoEditComponent } from './demo-modul/todo-edit/todo-edit.component';
import { ErrorComponent } from './demo-modul/error/error.component';
import { CanActivateRouteGuard } from './demo-modul/guards/barrier.guard';
import { PaywallComponent } from './demo-modul/paywall/paywall.component';

const routes: Routes = [
    { path: '', component: DemoOverviewComponent },
    { path: 'todos', component: TodoListComponent },
    { path: 'todos/:id', component: TodoEditComponent },
    { path: 'donation', component: PaywallComponent },
    {
        path: 'photos',
        component: PhotosOverviewComponent,
        canActivate: [CanActivateRouteGuard],
    },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
