import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { USerListComponent } from './user-list/user-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  {
    path:'user-list' , component:USerListComponent
  },{
    path:'**',component:ReactiveFormComponent
  },{
    path:'reactive',component:ReactiveFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
