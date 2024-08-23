import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-assessment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-assessment.component.html',
  styleUrl: './new-assessment.component.css'
})
export class NewAssessmentComponent {
  public timeType: string|null="0";
  constructor(private route:ActivatedRoute){}
  ngOnInit() {
    this.timeType = this.route.snapshot.paramMap.get('timeType');
    console.warn(typeof this.timeType);
 }
}
