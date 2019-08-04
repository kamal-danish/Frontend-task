import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthService } from '../../service/auth.service'
import { AddEmailComponent } from '../add-email/add-email.component';
import { ConfirmationPopupComponent } from '../confirmation-popup/confirmation-popup.component';
import { CommonService } from '../common.service';
import { EditEmailComponent } from '../edit-email/edit-email.component'




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class USerListComponent implements OnInit {
  emailList: [];
  tableEmailValidate: string;
  idtableEmail: any;
  constructor(
    private auth: AuthService,
    public dialog: MatDialog,
    private commonSer: CommonService
  ) { }

  ngOnInit() {
    this.getUserEmail();
  }

  getUserEmail() {
    this.auth.getUserListByEmail().subscribe((data: any) => {
      this.emailList = data;
    }, error => {
      this.commonSer.openSnakBar("Something went wrong");
    });
  }


  addNewEmail(): void {
    const dialogRef = this.dialog.open(AddEmailComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.getUserEmail();
      }
    });
  }

  updateEmail(email): void {
    const dialogRef = this.dialog.open(EditEmailComponent, {
      width: '300px',
      data: {
        tableEmailEmailAddress: email.tableEmailEmailAddress,
        tableEmailValidate: email.tableEmailValidate,
        idtableEmail: email.idtableEmail
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.getUserEmail();
      }
    });
  }

  deleteEmail(email): void {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this email?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.idtableEmail = email.idtableEmail;
        this.deleteUserEmail(this.idtableEmail)
      }
    });
  }


  deleteUserEmail(idtableEmail) {
    this.auth.deleteEmailById(idtableEmail).subscribe((data: any) => {
      if (data == true) {
        this.commonSer.openSnakBar('Email deleted succefully');
        this.getUserEmail();
      } else {
        this.commonSer.openSnakBar('Something went wrong');
      }
    }, error => {
      this.commonSer.openSnakBar('Something went wrong')
    })
  }

}
