import { NgModule } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { ExceptionService as Exception } from './exception.service';
import { userContextService as userContext} from  './userContext.service';

@NgModule({
  imports:      [],
  declarations: [],
  bootstrap:    [],
  providers:    [ Logger, Exception, userContext ]
})

export class CoreModule {
    constructor( private _logger: Logger, public _exception: Exception, public userContext: userContext){}
}
