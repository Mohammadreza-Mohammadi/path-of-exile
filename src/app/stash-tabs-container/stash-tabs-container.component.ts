import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FdSelectChange, MenuComponent } from '@fundamental-ngx/core';

import { Item } from '../models';
type StirngOrNull = string | null;
@Component({
  selector: 'app-stash-tabs-container',
  templateUrl: './stash-tabs-container.component.html',
  styleUrls: ['./stash-tabs-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StashTabsContainerComponent implements OnInit {
  @ViewChild('menu', { static: false })
  menu: MenuComponent | null = null;
  @Output() searchTermChange = new EventEmitter<StirngOrNull>();
  @Output() SelectedLeagueChange = new EventEmitter<StirngOrNull>();
  @Input() items: Item[] = [];
  @Input() leagues: string[] = [];

  searchTerm: string = '';
  constructor() {}

  ngOnInit(): void {}

  onLeagueSelectionChange(e: FdSelectChange) {
    this.SelectedLeagueChange.emit(e.value);
  }
  onSearchInputChanged(event: string): void {
    this.searchTermChange.emit(event);
  }

  onResetSearch(): void {
    this.searchTermChange.emit(null);
  }
}
