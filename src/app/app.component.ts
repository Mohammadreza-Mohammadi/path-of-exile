import { Component, OnInit } from '@angular/core';
import { debounceTime, delay, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ContentDensityService } from '@fundamental-ngx/core';

import { environment } from '../environments/environment';
import * as Actions from './root-store/stash-tabs/actions';
import * as Selectors from './root-store/stash-tabs/selectors';
import { Item, StringOrNull } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  stashItems$: Observable<Item[]>;
  loading$: Observable<boolean>;
  availableLeagueInStashTab$: Observable<string[]>;
  error$: Observable<any>;

  constructor(
    private _store: Store,
    _contentDensityService: ContentDensityService
  ) {
    _contentDensityService.contentDensity.next('compact');
    this._load();
    this.stashItems$ = this._store.select(Selectors.selectStashItems);

    this.availableLeagueInStashTab$ = this._store.select(
      Selectors.selectAvailableLeague
    );

    this.error$ = this._store.select(Selectors.selectError);
    this.loading$ = this._store.select(Selectors.selectLoading);
  }
  ngOnInit() {
    this._store
      .select(Selectors.selectNextStashTabId)
      .pipe(delay(environment.TIMER))
      .subscribe((nextStashTabId) => {
        if (nextStashTabId)
          this._store.dispatch(Actions.Load({ id: nextStashTabId }));
      });
  }
  onRetry() {
    this._retry();
  }
  onLeagueChange(e: StringOrNull) {
    this._store.dispatch(Actions.SetLeague({ name: e }));
  }
  onSearchTermChange(e: StringOrNull): void {
    this._store.dispatch(Actions.SetSearchTerm({ term: e }));
  }
  private _load() {
    this._store.dispatch(Actions.Load({ id: environment.FIRST_STASH }));
  }
  private _retry() {
    this._store.dispatch(Actions.Retry());
  }
}
