import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { Subscription } from 'rxjs';
import { EventsService } from './service/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'okta-sso';
  isAuthenticated: boolean = false;
  isHome: boolean = true;
  subscription: Subscription;

  constructor (private oktaAuth: OktaAuthService, public router: Router, private eventService: EventsService) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
    })
    this.subscription = this.eventService.getIfHome().subscribe(isHome => {
      this.isHome = isHome;
    })
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
    this.oktaAuth.signInWithRedirect({
      originalUri: '/protected'
    });
  }

  async logout() {
    await this.oktaAuth.signOut();
    this.router.navigateByUrl('/');
  }
}
