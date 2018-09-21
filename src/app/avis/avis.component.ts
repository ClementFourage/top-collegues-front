import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avis } from '../models'

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {


  constructor() { }

  @Output() avis: EventEmitter<Avis> = new EventEmitter<Avis>();

  clicAime() {

    this.avis.emit(Avis.AIMER);
  }

  clicDeteste() {
    this.avis.emit(Avis.DETESTER);
  }

  ngOnInit() {
  }

}
