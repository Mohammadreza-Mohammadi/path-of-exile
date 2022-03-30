import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StashTabStoreEffects } from './effects';
import { reducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('stashTabs', reducer),
    EffectsModule.forFeature([StashTabStoreEffects]),
  ],
  providers: [StashTabStoreEffects],
})
export class StashTabsStoreModule {}
