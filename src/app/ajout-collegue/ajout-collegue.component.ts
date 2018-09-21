import { Component, OnInit } from '@angular/core';
import { formCollegue  } from '../models';
import { CollegueService } from '../services/collegue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-collegue',
  templateUrl: './ajout-collegue.component.html',
  styleUrls: ['./ajout-collegue.component.scss']
})

export class AjoutCollegueComponent implements OnInit {

  err: string;
  monModel: formCollegue = new formCollegue();

  constructor(private _postSrv: CollegueService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this._postSrv
      .trouverUnCollegue(this.monModel)
      .then(() => this.router.navigate(['/accueil']))
      .catch(err => (this.err = err));
  }
}
