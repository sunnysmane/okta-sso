import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private subject = new Subject<any>();

  constructor() { }

  sendIfHome(isHome: boolean) {
    this.subject.next(isHome);
  }

  getIfHome(): Observable<any> {
    return this.subject.asObservable();
  }
}
