import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { newGame } from './games-list/games';

@Injectable({
  providedIn: 'root'
})
export class CarritoGamesService {

  contadorCarrito = 0;
  private _carritoList: newGame[] = [];
  
  _items: BehaviorSubject<newGame[]> = new BehaviorSubject(this._carritoList);
  
  constructor() { } 
  
  addCarrito(game: newGame){
    let item = this._carritoList.find((v1) => v1.nombre == game.nombre);
    if(!item){
      if(game.cantidad > 0){
        this._carritoList.push( {...game} );
      }
    }
    else{
      item.cantidad += game.cantidad;
    }
    this._items.next(this._carritoList);
  }

  contarCarrito(){
    this.contadorCarrito = this._carritoList.length;
  }

  deleteGameCart(game: newGame){
    let item = this._carritoList.find((v1)  => v1.nombre == game.nombre);
    let indice = this._carritoList.findIndex((v1) => v1.id == game.id);
    if(item){
      this._carritoList.splice(indice, 1);
    }
  }
  
}