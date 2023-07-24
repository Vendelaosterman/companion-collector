import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { PokemonCataloguePageComponent } from "./pages/pokemon-catalogue-page/pokemon-catalogue-page.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
      path:'',
      pathMatch:"full",
      component:LoginPageComponent,
  },
  {
      path:'landing',
      component:LandingPageComponent,
      //canActivate:[AuthGuard]
  },
  {
      path:'pokemon-catalogue',
      component:PokemonCataloguePageComponent,
      //canActivate:[AuthGuard]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }