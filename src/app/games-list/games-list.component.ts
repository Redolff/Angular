import { Component, OnInit } from '@angular/core';
import { CarritoGamesService } from '../carrito-games.service';
import { GamesDatosService } from '../games-datos.service';
import { newGame } from './games';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  games: newGame[] = [];
  
  constructor(private carrito: CarritoGamesService, private juegos: GamesDatosService) {   }

  ngOnInit(): void {
    /*this.juegos.getAll().subscribe(games => {
      this.games = games;
    });*/
    this.games = this.juegos.games;
  }

  addCarrito(game: newGame): void {
    this.carrito.addCarrito(game);
    game.stock -= game.cantidad;
    game.cantidad = 0;
  }

}
