import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InMemoryHttpBackendService } from './services/in-memory-http-backend.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { routerRoutes } from './routes/routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoutesModule } from './routes/routes.module';
import { PresentationsModule } from './presentations/presentations.module';
import { AppStoreModule } from './store/store.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PresentationsModule,
    RoutesModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryHttpBackendService),
    RouterModule.forRoot(routerRoutes),
    AppStoreModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
