import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleGradeComponent } from './vehicle-grade.component';

describe('VehicleGradeComponent', () => {
  let component: VehicleGradeComponent;
  let fixture: ComponentFixture<VehicleGradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleGradeComponent]
    });
    fixture = TestBed.createComponent(VehicleGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
