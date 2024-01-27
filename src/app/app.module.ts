import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CheckBoxComponent } from './CheckboxComponent/checkbox.component';
import { MultiComponent } from './MultiComponent/multi.component';

@NgModule({
  declarations: [AppComponent, CheckBoxComponent, MultiComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
