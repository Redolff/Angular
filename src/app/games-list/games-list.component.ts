import { Component, OnInit } from '@angular/core';
import { newGame } from './games';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  newGames: newGame[] = [
    {
      imagen: "assets/img/Formula1-22.jpg",
      nombre: "Formula 1 - 2022",
      precio: 5000,
      stock: 8,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      imagen: "assets/img/ModernWarfare2.jpg",
      nombre: "Call of Duty: Morden Warfare II",
      precio: 5000,
      stock: 0,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      imagen: "assets/img/Hogwarts.jpg",
      nombre: "Hogwarts Legacy",
      precio: 5000,
      stock: 8,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      imagen: "assets/img/fifa23.jpg",
      nombre: "Fifa 23",
      precio: 5000,
      stock: 8,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      imagen: "assets/img/fifa23.jpg",
      nombre: "Fifa 23",
      precio: 5000,
      stock: 8,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      imagen: "assets/img/fifa23.jpg",
      nombre: "Fifa 23",
      precio: 5000,
      stock: 8,
      cantidad: 0,
      boton: "Agregar al carrito",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
