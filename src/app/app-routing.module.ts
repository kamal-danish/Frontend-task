import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { USerListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path:'user-list' , component:USerListComponent
  },{
    path:'**',component:USerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
