import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiffinComponent } from './tiffin/tiffin.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TifComponent } from './tif/tif.component';

import { PrevApplianceButtonDirective } from './appliances/buttons/for Appliance list/prev-appliance-button.directive';
import { PrevFurnitureButtonDirective } from './appliances/buttons/for furniture list/prev-furniture-button.directive';
import { NextApplianceButtonDirective } from './appliances/buttons/for Appliance list/next-appliance-button.directive';
import { NextFurnitureButtonDirective } from './appliances/buttons/for furniture list/next-furniture-button.directive';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
>>>>>>> ca2b5e69c30a83a90181ddc235167384691e5722

@NgModule({
  declarations: [
    AppComponent,
    TiffinComponent,
    VehicleComponent,
    AccomodationComponent,
    AppliancesComponent,
    NavbarComponent,
    FooterComponent,
    TifComponent,

    PrevApplianceButtonDirective,
    PrevFurnitureButtonDirective,
    NextApplianceButtonDirective,
    NextFurnitureButtonDirective,
<<<<<<< HEAD
    HomeComponent
=======
    LoginComponent,
    AboutComponent,
    ContactComponent
>>>>>>> ca2b5e69c30a83a90181ddc235167384691e5722
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
