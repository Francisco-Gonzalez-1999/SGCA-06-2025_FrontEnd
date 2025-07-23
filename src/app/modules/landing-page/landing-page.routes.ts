import { Routes } from "@angular/router";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { AppointmentsComponent } from "./pages/appointments/appointments.component";
import { AllInventoryComponent } from "./pages/all-inventory/all-inventory.component";

export default [
  { path: '', component: LandingPageComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'allInventory', component: AllInventoryComponent}
] as Routes
