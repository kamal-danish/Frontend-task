import { NgModule,Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModalModule { 
  constructor(
    public dialogRef: MatDialogRef<ModalModule>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
}
