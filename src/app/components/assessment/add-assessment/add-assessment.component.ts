import { Component } from '@angular/core';
import { AssessmentTypeComponent } from "../../pop-modal/assessment-type/assessment-type.component";

@Component({
  selector: 'app-add-assessment',
  standalone: true,
  imports: [AssessmentTypeComponent],
  templateUrl: './add-assessment.component.html',
  styleUrl: './add-assessment.component.css'
})
export class AddAssessmentComponent {

}
