import { Injectable } from '@angular/core';
import { Collegue, formCollegue } from '../models';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, Subject} from 'rxjs'
import { map, filter } from 'rxjs/operators';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})

export class CollegueService {
  private _superBus = new Subject<string>();

  get superBus(): Observable<string> {
    return this._superBus.asObservable();
  }

  constructor(private _http: HttpClient) {}

  listerCollegues():Observable<Collegue[]>  {
    return this._http
      .get(URL_BACKEND+"collegues/")
      .pipe(
        map((data: any[]) =>
          data.map(collegue =>
            new Collegue(collegue.pseudo, collegue.nom, collegue.prenom, collegue.email, collegue.adresse,collegue.score,collegue.photo))
          )
        )
      ;
  }

  donnerUnAvis(unCollegue: Collegue, avis: string): Observable<Collegue> {
    this._superBus.next(`${unCollegue.pseudo} a reçu le vote "${avis}" `);
    let resultat
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    resultat = this._http.patch(URL_BACKEND+"collegues/" + `/${unCollegue.pseudo}`, "{ \"action\" : \""+avis+"\" }", httpOptions)
    
    return resultat
  
  }

  listerUnCollegue(pseudo: String): Observable<Collegue>{
    return this._http
      .get(URL_BACKEND+"collegues/"+pseudo)
      .pipe(
        map((collegue: any) => new Collegue(collegue.pseudo, collegue.nom, collegue.prenom, collegue.email, collegue.adresse,collegue.score,collegue.photo))
          )
      ;
    }

  trouverUnCollegue(monForm: formCollegue){
    let resultat;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    resultat = this._http.post(URL_BACKEND+"collegues/nouveau",monForm , httpOptions).toPromise();
    return resultat;
  }
}
