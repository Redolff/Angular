import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbyStoreGamesComponent } from './hobby-store-games/hobby-store-games.component';
import { FooterComponent } from './footer/footer.component';
import { GamesListComponent } from './games-list/games-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'games', component: GamesListComponent},
  { path: 'home', component: HobbyStoreGamesComponent},
  { path: 'about', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }