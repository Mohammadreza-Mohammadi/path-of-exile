import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as ActionTypes from './actions';
import { HttpStashService } from '../../services';

@Injectable()
export class StashTabStoreEffects {
  constructor(
    private stashService: HttpStashService,
    private actions$: Actions
  ) {}

  loadStashTab$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.Load),
      switchMap((action) =>
        this.stashService.load(action.id).pipe(
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
}
