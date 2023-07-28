/*  Pokemon-list
*   The pokemon-list is responsible for handling a list of pokemon, checking if a specific pokemon has already been collected 
    by the user. It provides the functionality to collect new Pokemon and to update the user's data in localStorage and 
    the pokeAPI. 
*/

import { Component, OnInit, Input } from '@angular/core';
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

  @Input() pokemons:Pokemon[] = []

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

  checkAlreadyCollected(pokemonid: number){
    let collectedIds = JSON.parse(localStorage.getItem("trainer")!);

    return collectedIds.pokemon.some((caught: string) => {
      let caughtToInt = parseInt(caught);
      return caughtToInt === pokemonid;
    });
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
