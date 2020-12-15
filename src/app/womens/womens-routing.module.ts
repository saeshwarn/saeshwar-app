import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WomensComponent } from './womens.component';

const routes: Routes = [
  {path:'', component:WomensComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomensRoutingModule { }
