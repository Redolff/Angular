import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby-store-games',
  templateUrl: './hobby-store-games.component.html',
  styleUrls: ['./hobby-store-games.component.scss']
})
export class HobbyStoreGamesComponent implements OnInit {

  imagen = 'assets/img/games-ps5.jpg';
  portada = "assets/img/ps5.jpg";
  tituloCart = "Carrito de compras";

  constructor() { }

  ngOnInit(): void {
  }

}
