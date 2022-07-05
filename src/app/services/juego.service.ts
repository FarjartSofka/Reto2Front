import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private URL_BASE = environment.url_api;

  constructor(private http :  HttpClient) { }


  crearJuego(juego : any): Observable<string>{
    return this.http.post(`${this.URL_BASE}/crearJuego`, juego, {responseType: 'text'});
  }


  iniciarJego(idjuego :string): Observable<string>{
    return this.http.post(`${this.URL_BASE}/iniciarJuego`, {juegoId: idjuego}, {responseType: 'text'});
  }

  obtenerPuntajes() : Observable<Score[]>{
    return this.http.get<Score[]>(`${this.URL_BASE}/score`);
  }


}
