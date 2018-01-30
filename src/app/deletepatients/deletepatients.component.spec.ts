import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepatientsComponent } from './deletepatients.component';

describe('DeletepatientsComponent', () => {
  let component: DeletepatientsComponent;
  let fixture: ComponentFixture<DeletepatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletepatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
