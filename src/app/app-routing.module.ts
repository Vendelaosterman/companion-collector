/*  App-routing
*   The app-routing is responsible for defining the routes for the application, it maps the URL paths to the corresponding 
    components. The app-routing also specifies the auth guard to control the access to certain routes.
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { PokemonCataloguePageComponent } from "./pages/pokemon-catalogue-page/pokemon-catalogue-page.component";
import { TrainerPageComponent } from "./pages/trainer-page/trainer-page.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
      path:'login',
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
  },
{
  path: '**',
  redirectTo: 'login', 
  pathMatch: 'full'
},
{
  path: '',
  redirectTo: 'login', 
  pathMatch: 'full'
}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }