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
import { RouterModule } from '@angular/router';
import { TodoAddComponent } from './todo-add/todo-add.component';
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
        TodoAddComponent,
        PaywallComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        DemoOverviewComponent,
        TodoListComponent,
        TodoAddComponent,
        NavigationHeaderComponent,
        PaywallComponent,
        ErrorComponent,
    ],
})
export class DemoModulModule {}
