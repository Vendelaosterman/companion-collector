import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { PokemonCataloguePageComponent } from "./pages/pokemon-catalogue-page/pokemon-catalogue-page.component";
import { TrainerPageComponent } from "./pages/trainer-page/trainer-page.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
      path:'',
      pathMatch:"full",
      component: LandingPageComponent
  },
  {
      path:'pokemon-catalogue',
      component:PokemonCataloguePageComponent,
      canActivate:[AuthGuard]
  },
  {
      path:'trainer',
      component:TrainerPageComponent,
      canActivate:[AuthGuard]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }