import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbyStoreGamesComponent } from './hobby-store-games/hobby-store-games.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  { path: '*', redirectTo: 'games', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'games', component: HobbyStoreGamesComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
