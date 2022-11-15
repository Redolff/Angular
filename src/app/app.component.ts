import { Component } from '@angular/core';
import { Icon } from '@iconify/vue';
import { newGame } from './games-list/games';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  imagen = 'assets/img/games-ps5.jpg';
  title = 'Hobby Store';
  portada = "assets/img/ps5.jpg";
  tituloCart = "Carrito de compras";
}


export default {
  components: {
    Icon,
  },
};