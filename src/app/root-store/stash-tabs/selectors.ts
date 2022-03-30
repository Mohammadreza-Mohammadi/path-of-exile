import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
const memoizee = require('memoize');

import { ApiResponse } from '../../models';
import { State, stashTabAdapter } from './state';

export const selectState = createFeatureSelector<State>('stashTabs');

const getError = (state: State): any => state.error;
const getSelectedId = (state: State): string => state.selectedId;
const getLoading = (state: State): boolean => state.loading;

export const { selectAll, selectEntities, selectIds, selectTotal } =
  stashTabAdapter.getSelectors(selectState);
export const getSelected: MemoizedSelector<object, string> = createSelector(
  selectState,
  getSelectedId
);
export const selectError: MemoizedSelector<State, any> = createSelector(
  selectState,
  getError
);
export const selectLoading: MemoizedSelector<State, boolean> = createSelector(
  selectState,
  getLoading
);
export const selectStashTabId: MemoizedSelector<State, string> = createSelector(
  selectState,
  getSelectedId
);
export const selectStashTab: ApiResponse = memoizee((id: string) =>
  createSelector(selectEntities, (entities) => entities[id])
);
