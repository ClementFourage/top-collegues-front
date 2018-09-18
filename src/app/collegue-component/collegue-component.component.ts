import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../services/collegue.service'
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss']
})

export class CollegueComponentComponent implements OnInit {

  @Input() collegue: Collegue;
  @Input() avisRecu: string;
  err: string;

  constructor(private _postSrv: CollegueService) { }

  afficherAvis(avis: string) {
    this._postSrv
      .donnerUnAvis(this.collegue, avis.toUpperCase())
      .then(col => {

        if (avis === Avis.AIMER) {
          this.collegue.score = col.score
          this.avisRecu = "Vous avez aimé";
        }

        if (avis === Avis.DETESTER) {
          this.collegue.score = col.score
          this.avisRecu = "Vous avez détesté";
        }
      }
      )
  }

  ngOnInit() {
  }
}