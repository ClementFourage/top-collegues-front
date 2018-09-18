import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})

export class DemoComponent implements OnInit {

  collegues: Collegue[] = [];

  err: string;

  constructor(private _postSrv: CollegueService) { }
  ngOnInit() {
    this._postSrv
      .listerCollegues()
      .then(tabPosts => (this.collegues = tabPosts))
      .catch(err => (this.err = err));
  }
}