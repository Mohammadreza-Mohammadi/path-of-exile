import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as ActionTypes from './actions';
import { HttpStashService } from '../../services';
import { selectStashTabId } from './selectors';

@Injectable()
export class StashTabStoreEffects {
  constructor(
    private _stashService: HttpStashService,
    private _actions$: Actions,
    private _store: Store
  ) {}

  loadStashTab$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(ActionTypes.Load),
      switchMap((action) =>
        this._stashService.load(action.id).pipe(
          map((result) =>
            ActionTypes.LoadStashTabSuccess({ stashTab: result })
          ),
          catchError((error) =>
            observableOf(ActionTypes.LoadStashTabFailure({ error }))
          )
        )
      )
    )
  );
  retry$: Observable<Action> = createEffect(() =>
    this._actions$.pipe(
      ofType(ActionTypes.Retry),
      withLatestFrom(this._store.select(selectStashTabId)),
      map(([action, id]) => ActionTypes.Load({ id }))
    )
  );
}
