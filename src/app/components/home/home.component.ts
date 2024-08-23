import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddAssessmentComponent } from "../assessment/add-assessment/add-assessment.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent, RouterLink, RouterLinkActive, AddAssessmentComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}