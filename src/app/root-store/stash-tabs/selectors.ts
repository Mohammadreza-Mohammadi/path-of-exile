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
const getNextStashTabId = (state: State): string | null => state.nextStashTabId;
const getLoading = (state: State): boolean => state.loading;

export const { selectAll, selectEntities, selectIds, selectTotal } =
  stashTabAdapter.getSelectors(selectState);
export const getSelected: MemoizedSelector<object, string> = createSelector(
  selectState,
  getSelectedId
);
export const selectError = createSelector(selectState, getError);
export const selectLoading = createSelector(selectState, getLoading);
export const selectStashTabId = createSelector(selectState, getSelectedId);
export const selectNextStashTabId = createSelector(
  selectState,
  getNextStashTabId
);
export const selectStashTab = createSelector(
  selectEntities,
  selectStashTabId,
  (entities, id) => entities[id]
);
export const selectStashLeague = createSelector(
  selectStashTab,
  (stashTab) => stashTab?.stashes[0].league
);

export const selectStashItems = createSelector(selectStashTab, (stashTab) =>
  !stashTab
    ? []
    : stashTab.stashes
        .map((c) => c.items)
        .reduce((prev, curr, i) => curr.concat(prev), [])
);
