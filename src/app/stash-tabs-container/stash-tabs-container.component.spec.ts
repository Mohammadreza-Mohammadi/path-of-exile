import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StashTabsContainerComponent } from './stash-tabs-container.component';

describe('StashTabsContainerComponent', () => {
  let component: StashTabsContainerComponent;
  let fixture: ComponentFixture<StashTabsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StashTabsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StashTabsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
