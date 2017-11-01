import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlueColorDirective } from './blue-color.directive';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'dashboard'
    , component: DashboardComponent
  },
  {
    path: ''
    , component: HomeComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlueColorDirective,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
    , RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
