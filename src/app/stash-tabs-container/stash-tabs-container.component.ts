import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FdSelectChange } from '@fundamental-ngx/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

import { Item, StringOrNull } from '../models';

@Component({
  selector: 'app-stash-tabs-container',
  templateUrl: './stash-tabs-container.component.html',
  styleUrls: ['./stash-tabs-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StashTabsContainerComponent implements OnInit {
  @Input() items: Item[] = [];
  @Input() leagues: string[] = [];
  @Output() searchTermChange = new EventEmitter<StringOrNull>();
  @Output() selectedLeagueChange = new EventEmitter<StringOrNull>();

  searchTerm: string = '';
  league: string = '';
  private _searchTermSouce = new Subject<StringOrNull>();
  constructor() {}

  ngOnInit(): void {
    this._searchTermSouce
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((term) => this.searchTermChange.emit(term));
  }

  onLeagueSelectionChange(e: FdSelectChange) {
    this.selectedLeagueChange.emit(
      typeof e === 'object' && e !== null ? e.value : e
    );
  }
  onSearchInputChanged(e: string): void {
    this._searchTermSouce.next(e);
  }

  onResetSearch(): void {
    this.searchTerm = '';
    this.searchTermChange.emit(null);
  }
}
