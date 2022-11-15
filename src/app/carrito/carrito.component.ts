import { Component, OnInit } from '@angular/core';
import { CarritoGamesService } from '../carrito-games.service';
import { newGame } from '../games-list/games';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {


  cart = document.querySelector("#container-carrito");
  contadorCarrito = document.querySelector("#contador-carrito");
  carritoList: newGame[] = [];
  constructor(private carrito: CarritoGamesService) {  
  }

  ngOnInit(): void {
    this.carrito._items.subscribe(data => {
      this.carritoList = data;
    });  
  }

  total(){
    let sum = 0;
    this.carritoList.forEach(cart => {
      sum += cart.cantidad * cart.precio;
    });
    return sum;
  }
  
  deleteGameCart(cart: newGame): void{
    this.carrito.deleteGameCart(cart);
  }

  
}
