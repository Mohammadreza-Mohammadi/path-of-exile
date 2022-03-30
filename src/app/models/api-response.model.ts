import { Stash } from './stash.model';

export interface ApiResponse {
  id: string;
  next_change_id: string;
  stashes: Stash[];
}
