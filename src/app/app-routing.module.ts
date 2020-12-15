import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'mens', loadChildren: () => import('./mens/mens.module').then(m => m.MensModule)},
  {path:'womens', loadChildren: () => import('./womens/womens.module').then(m => m.WomensModule)},
  {path:'kids', loadChildren: () => import('./kids/kids.module').then(m => m.KidsModule)},
  {path:'contactus', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
