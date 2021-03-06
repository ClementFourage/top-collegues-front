import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DemoComponent } from './demo/demo.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { HttpClientModule } from "@angular/common/http";
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCollegueComponent } from './details-collegue/details-collegue.component';
import { FormsModule }   from '@angular/forms';
import { AjoutCollegueComponent } from './ajout-collegue/ajout-collegue.component';
import { ScorePipe } from './pipes/score.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';



const appRoutes: Routes = [

  { path: 'accueil', component: AccueilComponent }, // /page1 affiche le composant accueil
  { path: 'demo', component: DemoComponent },  // /demo affiche le composant demo
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' }, // redirige vers la route accueil par défaut
  { path: 'collegues/nouveau', component: AjoutCollegueComponent },
  { path: 'collegues/:pseudo', component: DetailsCollegueComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    HistoriqueVotesComponent,
    MenuComponent,
    AccueilComponent,
    DetailsCollegueComponent,
    AjoutCollegueComponent,
    ScorePipe,
    FilterPipe,
    VotreDernierAvisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
