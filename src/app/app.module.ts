import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, CoreModule ],
  declarations: [ AppComponent ],
  exports: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ AppComponent ]
})
export class AppModule { }
