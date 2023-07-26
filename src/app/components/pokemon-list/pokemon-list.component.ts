import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { UserService } from 'src/app/services/user-service.service';
import { User2 } from 'src/app/models/user';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public pokemons:Pokemon[] = []

  constructor(private readonly router:Router, private readonly pokemonService:PokemonService, private readonly userService:UserService) { }

  ngOnInit(): void {
    // Check if pokemons is saved in sessionStorage
    const storedPokemons = sessionStorage.getItem("pokemons");

    if (storedPokemons) {
      this.pokemons = JSON.parse(storedPokemons) as Pokemon[];
    } else {
      // If not, fetch the data from the API and store it 
      this.pokemonService.getPokemons().subscribe({
        next: (pokemons) => {
          const pokemonDetails: Pokemon[] = pokemons.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            sprites: pokemon.sprites,
            types: pokemon.types,
          }));

          this.pokemons = pokemonDetails;
          sessionStorage.setItem("pokemons", JSON.stringify(pokemonDetails));

        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  collectItem(id : number | undefined){
    const userData = JSON.parse(localStorage.getItem("trainer")!) as User2 ;  
    const pokeid = JSON.stringify(id);

    this.userService.postPokemon(userData.id, userData.pokemon, pokeid).subscribe(
      (updatedUser => {
        localStorage.setItem("trainer", JSON.stringify(updatedUser));
      })
    )
  }
  
}
