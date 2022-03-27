import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { MatProgressBarModule,
         MatListModule,
         MatGridListModule,
         MatCardModule,
         MatSelectModule,
         MatFormFieldModule,
         MatDialogModule,
         MatButtonModule
        } from  '@angular/material';
@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    MatProgressBarModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class DetailModule { }
