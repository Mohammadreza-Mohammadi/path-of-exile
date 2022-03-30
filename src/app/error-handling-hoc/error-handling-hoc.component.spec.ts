import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingHocComponent } from './error-handling-hoc.component';

describe('ErrorHandlingHocComponent', () => {
  let component: ErrorHandlingHocComponent;
  let fixture: ComponentFixture<ErrorHandlingHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorHandlingHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHandlingHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
