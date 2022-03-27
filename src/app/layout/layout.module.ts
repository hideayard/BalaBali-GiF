import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';

import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { MatCardModule, MatFormFieldModule, MatGridListModule, MatMenuModule, MatIconModule, MatButtonModule, MatAutocompleteModule, MatInputModule } from  '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// MatFormFieldModule, MatInputModule }
@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    SearchComponent,
    DetailComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class LayoutModule { }
