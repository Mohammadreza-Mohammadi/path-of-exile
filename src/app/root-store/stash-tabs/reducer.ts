import * as ActionTypes from './actions';
import { initialState, State, stashTabAdapter } from './state';
import { createReducer, on, Action } from '@ngrx/store';

const stashTabReducer = createReducer(
  initialState,

  on(ActionTypes.Load, (state, action) => ({
    ...state,
    error: null,
    loading: true,
    loaded: false,
    selectedId: action.id,
  })),
  on(ActionTypes.LoadStashTabSuccess, (state, action) => ({
    ...stashTabAdapter.upsertOne({ ...action.stashTab }, state),
    loading: false,
    loaded: true,
    selectedId: action.stashTab.id,
    nextStashTabId: action.stashTab.next_change_id,
  })),

  on(ActionTypes.LoadStashTabFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(ActionTypes.SetLeague, (state, action) => ({
    ...state,
    league: action.name,
  })),
  on(ActionTypes.SetSearchTerm, (state, action) => ({
    ...state,
    searchTerm: action.term,
  }))
);
export function reducer(state: State | undefined, action: Action) {
  return stashTabReducer(state, action);
}
