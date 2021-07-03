// The first block is to import any Angular dependencies that are common to most apps and the App component
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { FormsModule } from '@angular/forms';

// The NgModule decorator takes 'AppModule' as an object with a few different properties
@NgModule({
  // The declarations property is to provide a list of any components and directives to make available to the ENTIRE application.
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
  ],
  // The imports property is an array of other modules upon which this module depends (such as third-party modules or ones you’ve created)
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  // The providers property is empty by default. Any services that are created are to be listed here
  providers: [StocksService],
  // The bootstrap property defines which components to bootstrap at runtime
  bootstrap: [AppComponent],
})

// Exports an empty class, which gets annotated with configuration from NgModule
export class AppModule {}
