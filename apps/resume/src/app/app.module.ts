import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NavBarComponent } from '@mono/resume/nav-bar';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    AppRoutingModule,
    NavBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
