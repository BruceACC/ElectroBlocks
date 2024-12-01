import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {EmptySectionComponent} from './empty-section/empty-section.component';


export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'new-section', component: EmptySectionComponent }
];
