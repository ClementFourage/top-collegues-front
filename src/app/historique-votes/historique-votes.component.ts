import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis, Vote} from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {

  @Input() voteTab:Vote[]

  constructor() {
    /*const col2 = new Collegue();
    col2.pseudo = "Archer";
    col2.score = 1000;

    const vote1 = new Vote();
    vote1.avis = Avis.AIMER;
    vote1.collegue = col2;

    const vote2 = new Vote();
    vote2.avis = Avis.DETESTER;
    vote2.collegue = col2;

    this.voteTab = [vote1, vote2];*/

   }

  clicDelete() {
    //Supprimer le vote
  }

  ngOnInit() {
  }

}
