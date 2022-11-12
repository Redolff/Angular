import { Component, OnInit } from '@angular/core';
import { Game, newGame } from './games';

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
      cantidad: 0,
    },
    {
      nombre: "God of War: Ragnarok",
      categoria: "Aventura",
      precio: 6000,
      stock: 10,
      imagen: "assets/img/ragnarok.jpg",
      oferta: false,
      cantidad: 0,
    },
    {
      nombre: "Call of Duty: Blackops",
      categoria: "Guerra",
      precio: 4500,
      stock: 3,
      imagen: "assets/img/blackops.jpg",
      oferta: false,
      cantidad: 0,
    },
    {
      nombre: "Destiny 5",
      categoria: "Aventura",  
      precio: 3350,
      stock: 7,
      imagen: "assets/img/destiny5.jpg",
      oferta: true,
      cantidad: 0,
    }
  ];

  newGames: newGame[] = [
    {
      imagen: "assets/img/Formula1-22.jpg",
      nombre: "Formula 1 - 2022",
      descripcion: "Corre con los nuevos y flamantes autos de la temporada 2022 de Formula 1® con la plantilla auténtica de todos los 20 pilotos y 10 equipos. Toma control de tu experiencia de carrera con nuevas secuencias de carrera inmersivas o de emisión.",
      boton: "Reservar",
      fecha: "Proximo 28 de octubre",
    },
    {
      imagen: "assets/img/ModernWarfare2.jpg",
      nombre: "Call of Duty: Morden Warfare II",
      descripcion: "Infinity Ward presenta jugabilidad emocionante, de nueva generación y de tecnología de punta. Lucha junto a amigos en una experiencia verdaderamente envolvente con sonido, iluminación y gráficos increíblemente realistas que producen el Call of Duty más avanzado de la historia.",
      boton: "Reservar",
      fecha: "Proximo 28 de octubre",
    },
    {
      imagen: "assets/img/Hogwarts.jpg",
      nombre: "Hogwarts Legacy",
      descripcion: "Hogwarts Legacy es un RPG de acción envolvente y de mundo abierto dentro del mundo presentado por primera vez en los libros de Harry Potter.",
      boton: "Reservar",
      fecha: "Proximo 28 de octubre",
    },
    {
      imagen: "assets/img/fifa23.jpg",
      nombre: "Fifa 23",
      descripcion: "EA SPORTS™ FIFA 23 trae The World’s Game al campo de juego, con torneos masculinos y femeninos de la Copa Mundial de la FIFA™, la incorporación de equipos de clubes femeninos y nuevas formas de jugar a tus modos de juego favoritos.",
      boton: "Reservar",
      fecha: "Proximo 28 de octubre",
    },
    {
      imagen: "assets/img/fifa23.jpg",
      nombre: "Fifa 23",
      descripcion: "EA SPORTS™ FIFA 23 trae The World’s Game al campo de juego, con torneos masculinos y femeninos de la Copa Mundial de la FIFA™, la incorporación de equipos de clubes femeninos y nuevas formas de jugar a tus modos de juego favoritos.",
      boton: "Reservar",
      fecha: "Proximo 28 de octubre",
    },
    {
      imagen: "assets/img/fifa23.jpg",
      nombre: "Fifa 23",
      descripcion: "EA SPORTS™ FIFA 23 trae The World’s Game al campo de juego, con torneos masculinos y femeninos de la Copa Mundial de la FIFA™, la incorporación de equipos de clubes femeninos y nuevas formas de jugar a tus modos de juego favoritos.",
      boton: "Reservar",
      fecha: "Proximo 28 de octubre",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  restarCantidad(game: Game): void{
    if(game.cantidad > 0){
        game.cantidad--;
    }
  }

  sumarCantidad(game: Game): void{
    if(game.stock > 0 && game.cantidad < game.stock){
      game.cantidad++;
    }
  }

}
