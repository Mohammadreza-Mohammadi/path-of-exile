import { MetaReducer, ActionReducerMap, ActionReducer } from '@ngrx/store';
import { StashTabState, StashTabReducer } from './stash-tabs';
import { environment } from '../../environments/environment';

export interface State {
  stashTabs: StashTabState.State;
}

export const reducers: ActionReducerMap<State> = {
  stashTabs: StashTabReducer.reducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    return result;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = environment.production
  ? // ? [logger]
    []
  : [];
