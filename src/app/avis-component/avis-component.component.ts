import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avis } from '../models'

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.scss']
})
export class AvisComponentComponent implements OnInit {


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
