import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

@NgModule({
  declarations: [AppComponent, TimePickerComponent],
  imports: [BrowserModule, NgxMaterialTimepickerModule.setLocale("de-DE"), BrowserAnimationsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
