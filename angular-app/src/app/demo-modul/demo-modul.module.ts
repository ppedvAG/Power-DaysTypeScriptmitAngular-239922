import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoOverviewComponent } from './demo-overview/demo-overview.component';
import { TimeComponent } from './time/time.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [DemoOverviewComponent, TimeComponent, CardComponent],
    imports: [CommonModule],
    exports: [DemoOverviewComponent],
})
export class DemoModulModule {}
