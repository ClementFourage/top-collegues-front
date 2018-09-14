import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss']
})

export class CollegueComponentComponent implements OnInit {

  @Input() collegue: Collegue;

  constructor() { }

  avisRecu: string;
  traiter($event: Avis) {
    console.log('gfff', $event)
    // if ($event == Avis.AIMER)
    this.avisRecu = "Vous avez aimé";
    if ($event == Avis.DETESTER)
      this.avisRecu = "Vous avez détesté";
  }


  ngOnInit() {
  }
}