import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Routes } from '@angular/router';

export let routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: './components/+demo/demo.module#DemoModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
