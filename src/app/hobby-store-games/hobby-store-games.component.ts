import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby-store-games',
  templateUrl: './hobby-store-games.component.html',
  styleUrls: ['./hobby-store-games.component.scss']
})
export class HobbyStoreGamesComponent implements OnInit {

  portada = "assets/img/ps5.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
