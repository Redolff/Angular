import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { newGame } from './games-list/games';

@Injectable({
  providedIn: 'root'
})
export class CarritoGamesService {

  private _carritoList: newGame[] = [];
  private _itemSubjects: BehaviorSubject<newGame[]> = new BehaviorSubject(this._carritoList);
  
  public items: Observable<newGame[]> = this._itemSubjects.asObservable();
  
  constructor() { } 

  addCarrito(game: newGame){
    let item = this._carritoList.find((v1) => v1.nombre == game.nombre);
    if(!item && game.cantidad > 0){
      this._carritoList.push( {...game} );
    }
    else{
      
    }
    this._itemSubjects.next(this._carritoList);
  }


  /* Codigo del carrito, logica */

}
