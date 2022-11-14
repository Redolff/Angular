import { Component, OnInit } from '@angular/core';
import { CarritoGamesService } from '../carrito-games.service';
import { newGame } from '../games-list/games';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  carritoList: newGame[] = [];
  constructor(private carrito: CarritoGamesService) {  
  }

  
  ngOnInit(): void {
    this.carrito.items.subscribe(data => {
      this.carritoList = data;
    });
  }

  
}
