import { NgModule, Injector } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import {
  OktaCallbackComponent,
  OktaAuthGuard,
  OktaAuthService
} from '@okta/okta-angular';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';

export function onAuthRequired(oktaAuth: OktaAuthService, injector: Injector) {
  const router = injector.get(Router);
  router.navigate(['/login']);
}

const routes: Routes = [
  {
    path: 'login/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ OktaAuthGuard ],
    data: {
      onAuthRequired
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
