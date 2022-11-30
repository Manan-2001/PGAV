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

import { PrevApplianceButtonDirective } from './appliances/buttons/for Appliance list/prev-appliance-button.directive';
import { PrevFurnitureButtonDirective } from './appliances/buttons/for furniture list/prev-furniture-button.directive';
import { NextApplianceButtonDirective } from './appliances/buttons/for Appliance list/next-appliance-button.directive';
import { NextFurnitureButtonDirective } from './appliances/buttons/for furniture list/next-furniture-button.directive';

import { HomeComponent } from './home/home.component';
import { FaqPageComponent } from './faq-page/faq-page.component';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    TiffinComponent,
    VehicleComponent,
    AccomodationComponent,
    AppliancesComponent,
    NavbarComponent,
    FooterComponent,

    PrevApplianceButtonDirective,
    PrevFurnitureButtonDirective,
    NextApplianceButtonDirective,
    NextFurnitureButtonDirective,

    HomeComponent,
    FaqPageComponent,

    RegistrationComponent,
    LoginComponent,
    AboutComponent,
    OffersComponent,
    ContactComponent,
    CheckoutComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
