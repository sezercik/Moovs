import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieDetailComponent } from './components/moviedetail/moviedetail.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path:'dashboard',component:DashboardComponent, pathMatch: 'full' },
  { path:'movie',component:SearchComponent, pathMatch: 'full' },
  {path:'movie/:id',component:MovieDetailComponent},
  { path:'search',component:SearchComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
