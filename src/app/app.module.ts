import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportesComponent } from './Reportes/reportes.component';
import { Ejemplo1Component } from './Ejemplos/ejemplo1/ejemplo1.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportesComponent,
    Ejemplo1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
