import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { StashTabsStoreModule } from './stash-tabs';
import { reducers, metaReducers } from './state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {},
    }),
    EffectsModule.forRoot([]),
    StashTabsStoreModule,
  ],
  declarations: [],
})
export class RootStoreModule {}
