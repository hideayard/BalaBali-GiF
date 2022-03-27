import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './layout/about/about.component';
import { SearchComponent } from './layout/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: "search", component: SearchComponent},
  { path: 'detail/:name', loadChildren: () => import('./layout/detail/detail.module').then(m => m.DetailModule)  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
