import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TiffinComponent } from './tiffin/tiffin.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
=======
import { TifComponent } from './tif/tif.component';
>>>>>>> c997639813938656ce5dc1ba75f27ee86fa1bcaf

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TiffinComponent,
    VehicleComponent,
    AccomodationComponent,
    AppliancesComponent,
    NavbarComponent,
    FooterComponent
=======
    TifComponent
>>>>>>> c997639813938656ce5dc1ba75f27ee86fa1bcaf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
