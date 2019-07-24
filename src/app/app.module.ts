import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckInModule } from './check-in/check-in.module';
import { OverviewModule } from './overview/overview.module';
import { CheckInDataAccessModule } from './shared/check-in/data-access/check-in-data-access.module';
import { StoreModule } from './shared/store/store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CheckInDataAccessModule.forRoot(environment.apiUrl),
    AppRoutingModule,
    OverviewModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CheckInModule,
    StoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
