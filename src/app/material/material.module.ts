import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatCheckboxModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    CdkTableModule,
    MatTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCheckboxModule
  ],
  exports:[
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    CdkTableModule,
    MatTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
