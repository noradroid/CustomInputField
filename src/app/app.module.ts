import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomSelect1Component } from './custom-select-1/custom-select-1.component';
import { CustomSelect2Component } from './custom-select-2/custom-select-2.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSelect1Component,
    CustomSelect2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
