import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import {ContactComponent} from "./pages/contact/contact.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutPageComponent
  }
];
