import { Mail } from './../interfaces/Mail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  })
export class MailService {
constructor(private http: HttpClient) {
  }

getInboxMails() {
   return this.http.get<Mail[]>('../../assets/data/inbox.json');
  }

getSentMails() {
  return this.http.get<Mail[]>('../../assets/data/sent.json');
  }
}
