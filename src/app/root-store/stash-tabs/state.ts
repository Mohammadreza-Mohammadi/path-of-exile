import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { ApiResponse } from '../../models';

export const stashTabAdapter: EntityAdapter<ApiResponse> =
  createEntityAdapter<ApiResponse>({ selectId: (c: ApiResponse) => c.id });

export interface State extends EntityState<ApiResponse> {
  loading: boolean;
  error: any;
  selectedId: string;
  nextStashTabId: string | null;
}

export const initialState: State = stashTabAdapter.getInitialState({
  selectedId: '',
  nextStashTabId: null,
  loading: false,
  error: null,
});
