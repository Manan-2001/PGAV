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
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilePageComponent } from './dashboard/component/profile-page/profile-page.component';
import { OrdersPageComponent } from './dashboard/component/orders-page/orders-page.component';
import { AddressPageComponent } from './dashboard/component/address-page/address-page.component';
import { AnalyticsPageComponent } from './dashboard/component/analytics-page/analytics-page.component';
import { AccountDetailsPageComponent } from './dashboard/component/account-details-page/account-details-page.component';

const routes: Routes = [
  {
    path: "Login",
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
    path: "",
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
    path: "checkout",
    component: CheckoutComponent
  },

  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ProfilePageComponent
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      },
      {
        path: 'orders',
        component: OrdersPageComponent
      },
      {
        path: 'address',
        component: AddressPageComponent
      },
      {
        path: 'analytics',
        component: AnalyticsPageComponent
      },
      {
        path: 'account-details',
        component: AccountDetailsPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
