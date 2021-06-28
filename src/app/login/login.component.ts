import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';

import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';
import { EventsService } from '../service/events.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authService: OktaAuthService;
  widget = new OktaSignIn({
    el: '#okta-signin-container',
    baseUrl: 'https://dev-31173111.okta.com',
    authParams: {
      pkce: true
    },
    clientId: '0oa136ewkmi7AKbDx5d7',
    redirectUri: 'http://localhost:4200/login/callback'
  });

  constructor(private oktaAuth: OktaAuthService, public router: Router, private eventService: EventsService) { 
    this.authService = oktaAuth;

    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        switch(event.url) {
          case '/login':
            break;
          case '/protected':
            break;
          default:
            this.widget.remove();
            break;
        }
      }
    });

    this.eventService.sendIfHome(false);
  }

  ngOnInit(): void {
    this.widget.showSignInAndRedirect().catch((err: any) => {
      throw(err);
    });
  }

}
