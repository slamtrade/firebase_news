import { Component, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { text } from '@angular/core/src/render3';
import * as firebase from 'firebase';
import { viewAttached } from '@angular/core/src/render3/instructions';
import { timestamp } from 'rxjs/operators';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Key } from 'protractor';
import { link } from 'fs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public message: any = {
    coin: "",
    title: "",
    url: "",
    time: ""

  }
  public messages = [];
  constructor(db: AngularFireDatabase, private zone: NgZone) {
    this.message = db.list('/message');

  }
  cancel(): void {
    console.log('do nothing')
    this.message.coin = ""
    this.message.url = ""
  }
  save(): void {
    let error = false;

    if (error === false) {
      this.message.push({
        "coin": this.message.coin,
        "title": this.message.title,
        "url": this.message.url,
        "time": firebase.database.ServerValue.TIMESTAMP

      });
      console.log(this.message);
      alert("Submitted Successfully!");
      this.message.coin = ""
      this.message.title = ""
      this.message.url = ""

    }
  }
}
