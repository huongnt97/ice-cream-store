import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private notice = new BehaviorSubject('0');
  currentMessage = this.notice.asObservable();
  constructor() { }
  updateNotice(message: string) {
    this.notice.next(message);
  }
}
