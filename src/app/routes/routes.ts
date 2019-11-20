import { Routes } from '@angular/router';
import { InstrumentsResolver } from './resolvers/instruments.resolver';
import { AboutRouteContainerComponent } from './containers/about-route-container/about-route-container.component';
import { InstrumentListRouteContainerComponent } from './containers/instrument-list-route-container/instrument-list-route-container.component';
import { InstrumentDetailRouteContainerComponent } from './containers/instrument-detail-route-container/instrument-detail-route-container.component';
import { InstrumentResolver } from './resolvers/instrument.resolver';

export const routerRoutes: Routes = [

    {
        path: 'about',
        component: AboutRouteContainerComponent
    },
    {
        path: 'instrument',
        component: InstrumentListRouteContainerComponent,
        // resolve: {
        //     instruments$: InstrumentsResolver
        // },
        children: [
            {
                path: ':instrumentId',
                component: InstrumentDetailRouteContainerComponent,
                // resolve: {
                //     instrument$: InstrumentResolver
                // }
            },
            {
                path: 'new',
                component: InstrumentDetailRouteContainerComponent,
            }
        ]
    },


]