import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommonService } from '../common.service';
import { Validate } from '../../service/validate'

@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.css']
})
export class AddEmailComponent implements OnInit {
  tableEmailValidate: string;
  idtableEmail: any;
  email:any;

  user: any = {};

  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private auth: AuthService,
    private commonSer: CommonService,
    private validate:Validate,
    public dialogRef: MatDialogRef<AddEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public message: any) { 
    }

  ngOnInit() {
  }

  createForm() {
  }
  
  addEmail(user) {
    if (!this.validate.checkValidations(user)) {
      return;
    }
    if(user.email){
      this.tableEmailValidate = 'true'
    }
    let data = {
      tableEmailEmailAddress: user.email,
      tableEmailValidate: this.tableEmailValidate
    }
    this.auth.addUserEmail(data).subscribe((data: any) => {
      this.idtableEmail = data.idtableEmail;
      if(this.idtableEmail){
        this.commonSer.openSnakBar("Email registered successfully");
        this.dialogRef.close(true)
      }else{
        this.commonSer.openSnakBar("Something went wrong");
        this.dialogRef.close(false)
      }
    }, error => {
      this.commonSer.openSnakBar("Something went wrong");
      this.dialogRef.close(false)
    });
  }
  updateEmailById(){
    
  }
}
