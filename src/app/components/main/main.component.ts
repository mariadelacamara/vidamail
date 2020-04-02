import { MailService } from './../../services/mail.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Mail } from './../../interfaces/Mail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public inboxMails: Mail[];
  public sentMails: Mail[];
  public mailsShowed: Mail[];
  public sentShowed: Mail[];
  public userLoggedMail: string;
  public showInbox: boolean;
  public endOfMails: boolean;
  public showView: boolean;
  public currentMail: Mail;
  public searchParameter: string;
  public showCompose: boolean;
  public nextSend: number;
  constructor(
    private router: Router,
    private authservice: AuthService,
    private mailService: MailService,
    ) {
      this.userLoggedMail = this.authservice.isAuthenticated();
      this.showInbox = true;
      this.endOfMails = false;
      this.showView = false;
      this.showCompose = false;
     }

  ngOnInit() {
   if (!this.authservice.isAuthenticated()){
     this.router.navigate(['login'])
   }
   this.mailService.getInboxMails().subscribe(data => this.inboxMails = data.reverse());
   this.mailService.getInboxMails().subscribe(data => this.mailsShowed = data.reverse().slice(0, 10));
   this.mailService.getSentMails().subscribe(data => this.sentMails = data.reverse());
   this.mailService.getSentMails().subscribe(data => this.sentShowed = data.reverse().slice(0, 10));
  }

  showInboxMails() {
    this.showView = false;
    this.showCompose = false;
    this.showInbox = true;
  }

  showSentMails() {
    this.showCompose = false;
    this.showView = false;
    this.showInbox = false;
  }

  onScrollInbox() {
    const lastPostId = this.mailsShowed[this.mailsShowed.length - 1].id;
    if (lastPostId && this.mailsShowed.length < this.inboxMails.length) {
    this.mailsShowed = [...this.mailsShowed, ...this.inboxMails.slice(lastPostId, lastPostId + 10)];
  }
    this.endOfMails = true
  }

  onScrollSent() {
    const lastPostId = this.sentShowed[this.sentShowed.length - 1].id;
    if (lastPostId && this.sentShowed.length <= this.sentMails.length) {
      this.sentShowed = this.sentShowed.concat(this.sentMails.slice(lastPostId, lastPostId + 10));
    }
    this.endOfMails = true;
  }

  scrollToTop(){
    window.scroll(0, 0);
  }

  goToCompose() {
    this.showCompose = true;
    this.showView = false;
    this.nextSend = this.sentMails.length;
  }

  showMail(mail) {
    this.currentMail = mail;
    this.showView = true;
  }

  sendMail(sentmail) {
    this.sentMails.unshift(sentmail);
    alert('mail enviado');
    this.showCompose = false;
  }

  logout(){
    localStorage.removeItem('isLogged');
    this.router.navigate(['/login']);
  }
}
