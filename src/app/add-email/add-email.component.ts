import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.css']
})
export class AddEmailComponent implements OnInit {
  emailForm: FormGroup

  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private auth: AuthService,
    private commonSer: CommonService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailregex)]]
    })
  }
  
  get f() {
    return this.emailForm.controls;
  }
  getErrorEmail() {
    return this.emailForm.get('email').hasError('required') ? 'Field is required' :
      this.emailForm.get('email').hasError('pattern') ? 'Not a valid emailaddress' : '';
  }

  addEmail() {
    this.commonSer.openSnakBar("Something went wrong");
    let data = {
      tableEmailEmailAddress: this.emailForm.value,
      tableEmailvalidate: true
    }
    this.auth.addUserEmail(data).subscribe((data: any) => {
      console.log(data, 'data')
    })
  }
  updateEmailById(){
    
  }
}
