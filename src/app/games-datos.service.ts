import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { newGame } from './games-list/games';

//const URL = 'https://60e0eb3e6b689e001788cc1d.mockapi.io/api/games'; //Api de juegos

@Injectable({
  providedIn: 'root'
})
export class GamesDatosService {

  constructor(private http: HttpClient) { }

  games:newGame[] = [
    {
      id: 1,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_625709-MLA51631928803_092022-F.webp",
      nombre: "NBA 2K23",
      precio: 18600,
      stock: 3,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 2,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_741918-MLA52048564342_102022-F.webp",
      nombre: "Fifa 23",
      precio: 13000,
      stock: 20,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 3,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_988793-MLA50805599762_072022-F.webp",
      nombre: "Formula 1 - 2022",
      precio: 15000,
      stock: 8,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 4,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_884647-MLA52240221403_112022-F.webp",
      nombre: "Call of Duty: Morden Warfare II",
      precio: 12000,
      stock: 0,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 5,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_828968-MLA49018599957_022022-F.webp",
      nombre: "Uncharted Resmatered",
      precio: 15000,
      stock: 1,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 6,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_937786-MLA48037633803_102021-F.webp",
      nombre: "Battlefield 2042",
      precio: 25000,
      stock: 2,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 7,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_610735-MLA45742726429_042021-F.webp",
      nombre: "Assasins'S creed: Valhalla",
      precio: 10900,
      stock: 10,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 8,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_981861-MLA51427398809_092022-F.webp",
      nombre: "The last of us - Parte 1",
      precio: 14000,
      stock: 0,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 9,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_901749-MLA51758763378_092022-F.webp",
      nombre: "Gran Turismo 7",
      precio: 27000,
      stock: 2,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 10,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_775301-MLA50786466723_072022-F.webp",
      nombre: "Spider-Man Miles Morales",
      precio: 17250,
      stock: 5,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 11,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_757117-MLA52286165127_112022-F.webp",
      nombre: "God Of Wars: Ragnarok",
      precio: 22400,
      stock: 1,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
    {
      id: 12,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_870773-MLA49924351256_052022-F.webp",
      nombre: "Grand Theft Auto V",
      precio: 22300,
      stock: 0,
      cantidad: 0,
      boton: "Agregar al carrito",
    },
  ];

  /*public getAll(): Observable<newGame[]>{

    return this.http.get<newGame[]>(URL).pipe(
      tap( (games: newGame[]) => games.forEach(game => game.cantidad = 0))
    );
  }*/

}
