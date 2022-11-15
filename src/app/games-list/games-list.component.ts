import { Component, OnInit } from '@angular/core';
import { CarritoGamesService } from '../carrito-games.service';
import { newGame } from './games';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  games: newGame[] = [
    {
      id: 1,
      imagen: "assets/img/nba-2k23.jpg",
      nombre: "NBA 2K23",
      precio: 8600,
      stock: 3,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 2,
      imagen: "assets/img/fifa23.jpg",
      nombre: "Fifa 23",
      precio: 6000,
      stock: 20,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 3,
      imagen: "assets/img/Formula1-22.jpg",
      nombre: "Formula 1 - 2022",
      precio: 5000,
      stock: 8,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 4,
      imagen: "assets/img/ModernWarfare2.jpg",
      nombre: "Call of Duty: Morden Warfare II",
      precio: 5000,
      stock: 0,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 5,
      imagen: "assets/img/Hogwarts.jpg",
      nombre: "Hogwarts Legacy",
      precio: 5000,
      stock: 8,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 6,
      imagen: "assets/img/battlefield.jpg",
      nombre: "Battlefield",
      precio: 5000,
      stock: 2,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 7,
      imagen: "assets/img/valhalla.jpg",
      nombre: "Assasins'S creed: Valhalla",
      precio: 3900,
      stock: 10,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 8,
      imagen: "assets/img/pubg.jpg",
      nombre: "PUBG: Battlegrounds",
      precio: 4000,
      stock: 0,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 9,
      imagen: "assets/img/gran_turismo7.jpg",
      nombre: "Gran Turismo 7",
      precio: 7000,
      stock: 2,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 10,
      imagen: "assets/img/destiny5.jpg",
      nombre: "Destiny 2",
      precio: 7250,
      stock: 5,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 11,
      imagen: "assets/img/ragnarok.jpg",
      nombre: "God Of Wars: Ragnarok",
      precio: 2400,
      stock: 1,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 12,
      imagen: "assets/img/cyberpunk.webp",
      nombre: "Cyberpunk",
      precio: 2000,
      stock: 0,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
  ];

  constructor(private carrito: CarritoGamesService) {   }

  ngOnInit(): void {
  }

  addCarrito(game: newGame): void {
    this.carrito.addCarrito(game);
    game.stock -= game.cantidad;
    game.cantidad = 0;
  }

}
