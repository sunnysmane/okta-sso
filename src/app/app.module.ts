import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  OKTA_CONFIG,
  OktaAuthModule
} from '@okta/okta-angular';
import { ProtectedComponent } from './protected/protected.component';
import { LoginComponent } from './login/login.component';

const oktaConfig = {
  issuer: 'https://dev-31173111.okta.com/oauth2/default',
  clientId: '0oa136ewkmi7AKbDx5d7',
  redirectUri: window.location.origin + '/login/callback'
}


@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
