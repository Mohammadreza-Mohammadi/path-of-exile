import { Item } from './item.model';

export interface Stash {
  id: string;
  league: string;
  accountName: string;
  items: Item[];
}
