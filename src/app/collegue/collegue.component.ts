import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../services/collegue.service'
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})

export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  @Input() avisRecu: string;

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

  ngOnInit() {}
}