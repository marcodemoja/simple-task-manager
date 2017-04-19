import { NgModule } from '@angular/core';
import { Logger } from 'angular2-logger/core';

@NgModule({
  imports:      [],
  declarations: [],
  bootstrap:    [],
  providers:    [ Logger ]
})

export class CoreModule {
    constructor( private _logger: Logger){}
}
