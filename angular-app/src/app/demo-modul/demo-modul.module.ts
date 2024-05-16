import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoOverviewComponent } from './demo-overview/demo-overview.component';
import { TimeComponent } from './time/time.component';
import { CardComponent } from './card/card.component';
import { CounterComponent } from './counter/counter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeAwayComponent } from './home-away/home-away.component';
import { ErrorComponent } from './error/error.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { PaywallComponent } from './paywall/paywall.component';

@NgModule({
    declarations: [
        DemoOverviewComponent,
        TimeComponent,
        CardComponent,
        CounterComponent,
        TodoListComponent,
        HomeAwayComponent,
        ErrorComponent,
        NavigationHeaderComponent,
        TodoEditComponent,
        PaywallComponent,
    ],
    imports: [CommonModule, RouterModule, FormsModule],
    exports: [
        DemoOverviewComponent,
        TodoListComponent,
        TodoEditComponent,
        NavigationHeaderComponent,
        PaywallComponent,
        ErrorComponent,
    ],
})
export class DemoModulModule {}
