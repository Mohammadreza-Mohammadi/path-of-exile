import { Component, OnInit } from '@angular/core';
import { ContentDensityService } from '@fundamental-ngx/core';
import { Store } from '@ngrx/store';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as Actions from './root-store/stash-tabs/actions';
import * as Selectors from './root-store/stash-tabs/selectors';
import { Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'path-of-exile';
  stashItems$: Observable<Item[]>;
  /**
   *
   */

  constructor(
    private _store: Store,
    _contentDensityService: ContentDensityService
  ) {
    _contentDensityService.contentDensity.next('compact');
    this._store.dispatch(Actions.Load({ id: environment.FIRST_STASH }));
    this.stashItems$ = this._store.select(Selectors.selectStashItems);
  }
  ngOnInit() {
    this._store
      .select(Selectors.selectNextStashTabId)
      .pipe(delay(10000))
      .subscribe((nextStashTabId) => {
        if (nextStashTabId)
          this._store.dispatch(Actions.Load({ id: nextStashTabId }));
      });
  }
}
