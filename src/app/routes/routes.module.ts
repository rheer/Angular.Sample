import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRouteContainerComponent } from './containers/about-route-container/about-route-container.component';
import { RouterModule } from '@angular/router';
import { routerRoutes } from './routes';
import { InstrumentListRouteContainerComponent } from './containers/instrument-list-route-container/instrument-list-route-container.component';
import { InstrumentDetailRouteContainerComponent } from './containers/instrument-detail-route-container/instrument-detail-route-container.component';
import { PresentationsModule } from '../presentations/presentations.module';

@NgModule({
  imports: [
    CommonModule,
    PresentationsModule,
    RouterModule,
  ],
  declarations: [
    AboutRouteContainerComponent,
    InstrumentListRouteContainerComponent,
    InstrumentDetailRouteContainerComponent]
})
export class RoutesModule { }
