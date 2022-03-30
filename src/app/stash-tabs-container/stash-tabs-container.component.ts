import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-stash-tabs-container',
  templateUrl: './stash-tabs-container.component.html',
  styleUrls: ['./stash-tabs-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StashTabsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
