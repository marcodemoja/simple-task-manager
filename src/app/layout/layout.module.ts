import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent ],
  bootstrap: [ LayoutComponent ],
  exports: [ LayoutComponent ],
  imports: []
})

export class LayoutModule {}
