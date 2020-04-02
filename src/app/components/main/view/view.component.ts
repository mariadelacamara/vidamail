import { Mail } from './../../../interfaces/Mail';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() mail: Mail;
  @Input() compose: boolean;
  @Input() view: boolean;
  @Input() userLogged: string;
  @Input() idMail: number;

  @Output() addMail: EventEmitter<Mail>;

  public sentMail: Mail;

  constructor() {
    this.sentMail = {
      id: 0,
      from: '',
      to: '',
      subject: '',
      body: ''
    }
    this.addMail = new EventEmitter<Mail>();
  }

  ngOnInit() {
  }

  sendMail() {
    this.sentMail.id = this.idMail;
    this.addMail.emit(this.sentMail);
  }
}
