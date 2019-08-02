import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog} from '@angular/material';
import { AuthService } from '../../service/auth.service'
import { AddEmailComponent } from '../add-email/add-email.component';
import { ConfirmationPopupComponent } from '../confirmation-popup/confirmation-popup.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class USerListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(
    private auth:AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
   // this.getUserEmail();
  }

  // getUserEmail(){

  //   this.auth.getUserListByEmail().subscribe((data:any)=>{
  //     console.log('data',data);
  //   })
  // }

  updateEmail(): void {
    const dialogRef = this.dialog.open(AddEmailComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  addNewEmail(): void{
    const dialogRef = this.dialog.open(AddEmailComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  deleteEmail():void{
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this email?"
    });
dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        console.log(result)
        console.log('Yes clicked');
      }
    });
  }
  
}
