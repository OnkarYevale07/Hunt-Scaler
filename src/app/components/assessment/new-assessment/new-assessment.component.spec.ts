import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAssessmentComponent } from './new-assessment.component';

describe('NewAssessmentComponent', () => {
  let component: NewAssessmentComponent;
  let fixture: ComponentFixture<NewAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAssessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
