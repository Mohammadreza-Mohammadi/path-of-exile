import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingHocComponent } from './loading-hoc.component';

describe('LoadingHocComponent', () => {
  let component: LoadingHocComponent;
  let fixture: ComponentFixture<LoadingHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
