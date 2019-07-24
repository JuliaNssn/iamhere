import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewModule } from './overview/overview.module';
import { CheckinDataAccessModule } from './shared/checkin/data-access/checkin-data-access.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CheckinDataAccessModule.forRoot(environment.apiUrl),
    AppRoutingModule,
    OverviewModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
