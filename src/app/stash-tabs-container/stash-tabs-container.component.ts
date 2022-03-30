import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FdSelectChange } from '@fundamental-ngx/core';

import { Item, StringOrNull } from '../models';

@Component({
  selector: 'app-stash-tabs-container',
  templateUrl: './stash-tabs-container.component.html',
  styleUrls: ['./stash-tabs-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StashTabsContainerComponent implements OnInit {
  @Output() searchTermChange = new EventEmitter<StringOrNull>();
  @Output() selectedLeagueChange = new EventEmitter<StringOrNull>();
  @Input() items: Item[] = [];
  @Input() leagues: string[] = [];

  searchTerm: string = '';
  league: string = '';
  constructor() {}

  ngOnInit(): void {}

  onLeagueSelectionChange(e: FdSelectChange) {
    this.selectedLeagueChange.emit(
      typeof e === 'object' && e !== null ? e.value : e
    );
  }
  onSearchInputChanged(event: string): void {
    this.searchTermChange.emit(event);
  }

  onResetSearch(): void {
    this.searchTermChange.emit(null);
  }
}
