import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/events.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {
  message: string = 'You are protected.';

  constructor(private eventService: EventsService) {
    this.eventService.sendIfHome(false);
  }

  ngOnInit(): void {
  }

}
