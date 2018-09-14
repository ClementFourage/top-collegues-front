import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})

export class DemoComponent implements OnInit {

  col1: Collegue;
  collegues: Collegue[];
  constructor() {
    const col1 = new Collegue();
    col1.pseudo = "Sterling";
    col1.score = 1001;
    
    const col2 = new Collegue();
    col2.pseudo = "Malory";
    col2.score = 72;

    const col3 = new Collegue();
    col3.pseudo = "Lana";
    col3.score = 1000;

    const col4 = new Collegue();
    col4.pseudo = "Cyril";
    col4.score = 12;

    const col5 = new Collegue();
    col5.pseudo = "Cheryl";
    col5.score = 99;

    const col6 = new Collegue();
    col6.pseudo = "Pam";
    col6.score = 834;

    const col7 = new Collegue();
    col7.pseudo = "Krieger";
    col7.score = 666;

    const col8 = new Collegue();
    col8.pseudo = "Ray";
    col8.score = 2;

    this.collegues = [col1, col2, col3, col4, col5, col6, col7, col8];
  }
  masquerSection = true;
  avisRecu: string;
  traiter($event: Avis) {
    if ($event == Avis.AIMER)
      this.avisRecu = "Vous avez aimé";
    if ($event == Avis.DETESTER)
      this.avisRecu = "Vous avez détesté";
  }
  ngOnInit() {
  }
}