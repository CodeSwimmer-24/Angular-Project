import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListsComponent } from './rooms/rooms-lists/rooms-lists.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeesComponent } from './employees/employees.component';
import {
  API_ENDPOINTS,
  APP_CONFIG_SERVICE,
} from './AppConfig/appConfig.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListsComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    {
      provide: APP_CONFIG_SERVICE,
      useValue: API_ENDPOINTS,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
