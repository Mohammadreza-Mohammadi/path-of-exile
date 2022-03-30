import { createAction, props } from '@ngrx/store';
import { ApiResponse, StringOrNull } from '../../models';

export const Load = createAction('[Stash Tab] Load', props<{ id: string }>());

export const LoadStashTabSuccess = createAction(
  '[Stash Tab] Load Success',
  props<{ stashTab: ApiResponse }>()
);
export const LoadStashTabFailure = createAction(
  '[Stash Tab] Load Failure',
  props<{ error: any }>()
);

export const SetLeague = createAction(
  '[Set League] Name',
  props<{ name: StringOrNull }>()
);

export const SetSearchTerm = createAction(
  '[Set Term] Search',
  props<{ term: StringOrNull }>()
);
