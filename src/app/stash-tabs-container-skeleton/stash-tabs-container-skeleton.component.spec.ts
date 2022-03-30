import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StashTabsContainerSkeletonComponent } from './stash-tabs-container-skeleton.component';

describe('StashTabsContainerSkeletonComponent', () => {
  let component: StashTabsContainerSkeletonComponent;
  let fixture: ComponentFixture<StashTabsContainerSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StashTabsContainerSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StashTabsContainerSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
