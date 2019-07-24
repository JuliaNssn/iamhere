import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { CheckinDataAccessModule } from './shared/checkin/data-access/checkin-data-access.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CheckinDataAccessModule.forRoot(environment.apiUrl)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
