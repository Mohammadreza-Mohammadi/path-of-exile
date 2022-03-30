import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store';
import { HttpStashService } from './services';
import { StashTabsContainerComponent } from './stash-tabs-container/stash-tabs-container.component';

@NgModule({
  declarations: [AppComponent, StashTabsContainerComponent],
  imports: [BrowserModule, HttpClientModule, RootStoreModule],
  providers: [HttpStashService],
  bootstrap: [AppComponent],
})
export class AppModule {}
