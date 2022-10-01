import { Component, OnInit } from '@angular/core';
import { Game } from './games';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  games: Game[] = [
    {
      nombre : "Fifa 23",
      categoria: "Futbol",
      precio: 5000,
      stock: 0,
      imagen: "assets/img/fifa23.jpg",
      oferta: false,
    },
    {
      nombre: "God of War: Ragnarok",
      categoria: "Aventura",
      precio: 6000,
      stock: 10,
      imagen: "assets/img/ragnarok.jpg",
      oferta: false,
    },
    {
      nombre: "Call of Duty: Blackops",
      categoria: "Guerra",
      precio: 4500,
      stock: 3,
      imagen: "assets/img/blackops.jpg",
      oferta: false,
    },
    {
      nombre: "Destiny 5",
      categoria: "Aventura",  
      precio: 3350,
      stock: 7,
      imagen: "assets/img/destiny5.jpg",
      oferta: true,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
