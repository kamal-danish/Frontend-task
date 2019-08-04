import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { CommonService } from '../common.service';
import { Validate } from 'src/service/validate';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-email',
  templateUrl: './edit-email.component.html',
  styleUrls: ['./edit-email.component.css']
})
export class EditEmailComponent implements OnInit {
  user: any = {};
  tableEmailValidate: string;
  idtableEmail: any;

  constructor( private auth: AuthService,
    private commonSer: CommonService,
    private validate:Validate,
    public dialogRef: MatDialogRef<EditEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public message: any) { 
      this.user.email = message.tableEmailEmailAddress;
      this.idtableEmail = message.idtableEmail;
    }

  ngOnInit() {
  }
  updateEmail(user){
    if (!this.validate.checkValidations(user)) {
      return;
    }
    if(user.email){
      this.tableEmailValidate = 'true'
    }
    let data = {
      tableEmailEmailAddress: user.email,
      tableEmailValidate: this.tableEmailValidate,
    }
    this.auth.updateEmailById(this.idtableEmail,data).subscribe((data:any)=>{
      if(data.idtableEmail){
         this.commonSer.openSnakBar('Email Update Successfully');
         this.dialogRef.close(true);
      }else{
        this.commonSer.openSnakBar('Something went wrong');
        this.dialogRef.close(false);
      }
     
    } ,error=>{
      this.commonSer.openSnakBar('Something went wrong');
      this.dialogRef.close(false);
    })
  }
}
