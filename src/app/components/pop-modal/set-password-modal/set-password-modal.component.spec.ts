import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPasswordModalComponent } from './set-password-modal.component';

describe('SetPasswordModalComponent', () => {
  let component: SetPasswordModalComponent;
  let fixture: ComponentFixture<SetPasswordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetPasswordModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetPasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
