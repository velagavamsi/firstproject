import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientcardComponent } from './patientcard.component';

describe('PatientcardComponent', () => {
  let component: PatientcardComponent;
  let fixture: ComponentFixture<PatientcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
