import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponent, routes } from './';

@NgModule({
  declarations: [ DemoComponent ],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class DemoModule { }
