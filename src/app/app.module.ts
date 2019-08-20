import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { USerListComponent } from './user-list/user-list.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AddEmailComponent } from './add-email/add-email.component';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { EditEmailComponent } from './edit-email/edit-email.component';
import { Validate } from '../service/validate';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    USerListComponent,
    AddEmailComponent,
    ConfirmationPopupComponent,
    EditEmailComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule 
    
  ],
  providers: [Validate],
  entryComponents: [AddEmailComponent,ConfirmationPopupComponent,EditEmailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
