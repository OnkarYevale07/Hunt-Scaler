import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddAssessmentComponent } from './components/assessment/add-assessment/add-assessment.component';
import { NewAssessmentComponent } from './components/assessment/new-assessment/new-assessment.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        { path: '', component: AddAssessmentComponent },
        { path: 'new-assessment/:timeType', component: NewAssessmentComponent},

    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
