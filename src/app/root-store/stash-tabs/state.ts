import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { ApiResponse, StringOrNull } from '../../models';

export const stashTabAdapter: EntityAdapter<ApiResponse> =
  createEntityAdapter<ApiResponse>({ selectId: (c: ApiResponse) => c.id });

export interface State extends EntityState<ApiResponse> {
  loading: boolean;
  error: any;
  selectedId: string;
  nextStashTabId: StringOrNull;
  league: StringOrNull;
  searchTerm: StringOrNull;
}

export const initialState: State = stashTabAdapter.getInitialState({
  selectedId: '',
  nextStashTabId: null,
  loading: true,
  error: null,
  searchTerm: null,
  league: null,
});
