import { Component, OnInit } from '@angular/core';
import { Vote, Avis, Collegue } from '../models';
@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {
  votes: Array<Vote>;
  vote1: Vote
  newVote: Array<Vote>
  vote: Vote;
  constructor() {
  }

    ngOnInit() {
    }

  }