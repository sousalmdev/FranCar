import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicsComponent } from './classics.component';

describe('ClassicsComponent', () => {
  let component: ClassicsComponent;
  let fixture: ComponentFixture<ClassicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicsComponent]
    });
    fixture = TestBed.createComponent(ClassicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
