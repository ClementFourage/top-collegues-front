import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-collegue',
  templateUrl: './details-collegue.component.html',
  styleUrls: ['./details-collegue.component.scss']
})

export class DetailsCollegueComponent implements OnInit {

  pseudo: string;

  // Injection du service ActivatedRoute
  constructor(private route: ActivatedRoute) {

    // récupération du paramètre peudo
    this.pseudo = route.snapshot.paramMap.get("pseudo")
  }

  ngOnInit() {
  }

}
