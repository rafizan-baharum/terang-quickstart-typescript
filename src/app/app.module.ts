import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';
import {DashboardPage} from './dashboard.page';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
