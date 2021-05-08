import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CovidFormComponent } from './covid-form/covid-form.component';
import { ReportInfoComponent } from './report-info/report-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DataTableComponent,
    CovidFormComponent,
    ReportInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
