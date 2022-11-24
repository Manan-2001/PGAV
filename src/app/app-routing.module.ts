import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { HomeComponent } from './home/home.component';
import { TiffinComponent } from './tiffin/tiffin.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { OffersComponent } from './offers/offers.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [

  {
    path: "",
    component: LoginComponent
  },

  {
    path: "tiffin",
    component: TiffinComponent
  },

  {
    path: "Accomodation",
    component: AccomodationComponent
  },

  {
    path: "tiffin",
    component: TiffinComponent
  },
  {
    path: "home",
    component: HomeComponent
  },

  {
    path: 'faq',
    component: FaqPageComponent
  },

  {
    path: "vehicle",
    component: VehicleComponent
  },

  {
    path: "Appliances",
    component: AppliancesComponent
  },

  {
    path: "About",
    component: AboutComponent
  },

  {
    path: "Contact",
    component: ContactComponent
  },

  {
    path: "offers",
    component: OffersComponent
  },
  {
    path: "register",
    component: RegistrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
