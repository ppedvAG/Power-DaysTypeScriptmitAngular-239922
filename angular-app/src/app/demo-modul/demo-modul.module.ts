import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoOverviewComponent } from './demo-overview/demo-overview.component';

@NgModule({
    declarations: [DemoOverviewComponent],
    imports: [CommonModule],
    exports: [DemoOverviewComponent],
})
export class DemoModulModule {}
