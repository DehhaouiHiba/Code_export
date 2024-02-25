import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardChartsTables1Component } from './components/dashboard-charts-tables-1/dashboard-charts-tables-1.component';

@NgModule({
  declarations: [AppComponent, DashboardChartsTables1Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
