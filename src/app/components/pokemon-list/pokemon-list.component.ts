import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public pokemons:Pokemon[] = []

  constructor(private readonly router:Router, private readonly pokemonService:PokemonService, private readonly userService:UserService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons()
      .subscribe({ 
        next: (pokemons)=>{
          this.pokemons = pokemons
      },
      error:(error => {
        console.log(error)
      })
    }
    
    );
  }
  
  // get userDetails(): User{
  //   return this.userService.userDetails
  // }


  /*
  async getSpriteUrl(pokemonId: number | undefined): Promise<string> {
    if (pokemonId === undefined) {
      // Return a default image URL or an appropriate fallback URL
      return 'path_to_default_image.png';
    }
  
    try {
      // Fetch the Pokemon data to get the sprite URL
      const pokemonData = await this.pokemonService.getPokemonById(pokemonId).toPromise();
      return pokemonData?.sprites?.front_default || 'path_to_default_image.png';
    } catch (error) {
      console.log('Error fetching sprite URL:', error);
      return 'path_to_default_image.png'; // Return a default image URL in case of an error
    }
  }*/
  
}
