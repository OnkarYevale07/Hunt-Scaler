import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentTypeComponent } from './assessment-type.component';

describe('AssessmentTypeComponent', () => {
  let component: AssessmentTypeComponent;
  let fixture: ComponentFixture<AssessmentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
