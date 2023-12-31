/*  Trainer-list
*   The trainer-list is responsible for displaying the list of caught Pokemon for the logged-in trainer. 
    It gets the collected pokemon details from the localStorage and fetches their complete details from sessionStorage. The 
    trainer-list also has functionality to remove unwanted pokemon.
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { UserService } from 'src/app/services/user-service.service';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  pokemons? : Pokemon [] = []

  constructor(private readonly router: Router, private readonly userService: UserService, private readonly location:Location) { }

  ngOnInit(): void {

    let allPokemons = JSON.parse(sessionStorage.getItem("pokemons")!) as Pokemon[]
    let caughtPokemons = JSON.parse(localStorage.getItem("trainer")!)

    caughtPokemons.pokemon.map((caught: string) => {
      let caughtToInt = parseInt(caught)
      const foundPokemon = allPokemons.find((pokemon: Pokemon) => pokemon.id === caughtToInt);
      if(foundPokemon){
        this.pokemons?.push(foundPokemon);
      }
    })

  }

  handleRemoveClicked(pokemonid: number | undefined){

    let userDetails = JSON.parse(localStorage.getItem("trainer")!)
    if(pokemonid){
      let pokemonToInt = pokemonid.toString()
      this.userService.removePokemon(userDetails.id, userDetails.pokemon, pokemonToInt).subscribe(
        (updatedUser => {
          localStorage.setItem("trainer", JSON.stringify(updatedUser));
          location.reload()
        })

      )
    }
  }
}
