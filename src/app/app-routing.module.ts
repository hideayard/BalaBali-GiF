import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './layout/about/about.component';
import { SearchComponent } from './layout/search/search.component';
import { DetailComponent } from './layout/detail/detail.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SearchComponent},
  { path: 'about', component: AboutComponent},
  { path: "search", component: SearchComponent, children: [
    { path: 'detail', component: DetailComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
