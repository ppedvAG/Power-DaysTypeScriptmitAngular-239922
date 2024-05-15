import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoOverviewComponent } from './demo-overview/demo-overview.component';
import { TimeComponent } from './time/time.component';
import { CardComponent } from './card/card.component';
import { CounterComponent } from './counter/counter.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
    declarations: [DemoOverviewComponent, TimeComponent, CardComponent, CounterComponent, TodosComponent],
    imports: [CommonModule],
    exports: [DemoOverviewComponent],
})
export class DemoModulModule {}
