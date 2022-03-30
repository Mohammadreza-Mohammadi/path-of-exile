import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-stash-tabs-container-skeleton',
  templateUrl: './stash-tabs-container-skeleton.component.html',
  styleUrls: ['./stash-tabs-container-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StashTabsContainerSkeletonComponent implements OnInit {
  items = [{}, {}, {}, {}, {}, {}, {}];
  constructor() {}

  ngOnInit(): void {}
}
