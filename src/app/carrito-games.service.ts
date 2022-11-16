import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { GamesDatosService } from './games-datos.service';
import { newGame } from './games-list/games';

@Injectable({
  providedIn: 'root'
})
export class CarritoGamesService {

  private _carritoList: newGame[] = [];
  
  _items: BehaviorSubject<newGame[]> = new BehaviorSubject(this._carritoList);
  
  constructor(private datos: GamesDatosService) { } 
  
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

  deleteGameCart(game: newGame){
    let item = this._carritoList.find((v1)  => v1.nombre == game.nombre);
    let itemGame = this.datos.games.find((v1) => v1.nombre == game.nombre);
    let indice = this._carritoList.findIndex((v1) => v1.id == game.id);
    if(item && itemGame){
      if(item.cantidad > 1){
        itemGame.stock++;
        item.cantidad = item.cantidad-1;
      }
      else{
        itemGame.stock++;
        this._carritoList.splice(indice, 1);
      }
    }
    this._items.next(this._carritoList);
  }

  vaciarCarrito(){
    this._carritoList.forEach(elemC => {
      this.datos.games.forEach(elemJ => {
        if(elemC.nombre == elemJ.nombre){
          elemJ.stock += elemC.cantidad;
        }
      })
    });
    this._carritoList = [];
    this._items.next(this._carritoList);
  }
  
}