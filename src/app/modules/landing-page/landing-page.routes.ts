import { Routes } from "@angular/router";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { AppointmentsComponent } from "./pages/appointments/appointments.component";

export default [
  { path: '', component: LandingPageComponent },
  { path: 'appointments', component: AppointmentsComponent }
] as Routes
