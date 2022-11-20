import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { HomeComponent } from './home/home.component';
import { TiffinComponent } from './tiffin/tiffin.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [

   
   
   
  
   {
    path:"Accomodation",
    component:AccomodationComponent
   },

   {
    path:"tiffin",
    component:TiffinComponent
   },
   {
    path:"home",
    component:HomeComponent
   },
   
  

   {
    path:"vehicle",
    component:VehicleComponent
   },

   {
    path:"Appliances",
    component:AppliancesComponent
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
