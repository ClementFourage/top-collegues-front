import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DemoComponent } from './demo/demo.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { HttpClientModule } from "@angular/common/http";
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCollegueComponent } from './details-collegue/details-collegue.component';

const appRoutes: Routes = [

  { path: 'accueil', component: AccueilComponent }, // /page1 affiche le composant A

  { path: 'demo', component: DemoComponent }, // /page2 affiche le composant B

  { path: '',   redirectTo: '/accueil', pathMatch: 'full' }, // redirige vers la route page1 par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListeColleguesComponent,
    HistoriqueVotesComponent,
    MenuComponent,
    AccueilComponent,
    DetailsCollegueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
