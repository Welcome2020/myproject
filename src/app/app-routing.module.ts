import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDetailedComponentComponent } from './view-detailed-component/view-detailed-component.component';

const routes: Routes = [
  {path : 'details',  component: ViewDetailedComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
