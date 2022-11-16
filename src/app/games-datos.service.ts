import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { newGame } from './games-list/games';

const URL = 'https://60e0eb3e6b689e001788cc1d.mockapi.io/api/games'; //Api de juegos

@Injectable({
  providedIn: 'root'
})
export class GamesDatosService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<newGame[]>{

    return this.http.get<newGame[]>(URL).pipe(
      tap( (games: newGame[]) => games.forEach(game => game.cantidad = 0))
    );
  }



}
