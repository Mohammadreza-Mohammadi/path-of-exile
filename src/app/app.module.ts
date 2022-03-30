import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  ContentDensityService,
  FundamentalNgxCoreModule,
} from '@fundamental-ngx/core';
import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';

import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store';
import { HttpStashService } from './services';
import { StashTabsContainerComponent } from './stash-tabs-container/stash-tabs-container.component';
import { LoadingHocComponent } from './loading-hoc/loading-hoc.component';
import { ErrorHandlingHocComponent } from './error-handling-hoc/error-handling-hoc.component';

import { LottieModule } from 'ngx-lottie';
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}
@NgModule({
  declarations: [AppComponent, StashTabsContainerComponent, LoadingHocComponent, ErrorHandlingHocComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FundamentalNgxCoreModule,
    FundamentalNgxPlatformModule,
    RootStoreModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [HttpStashService, ContentDensityService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
