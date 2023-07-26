import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { UserService } from 'src/app/services/user-service.service';
import { User } from 'src/app/models/user';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  constructor(private readonly router:Router, private readonly userService:UserService, private readonly pokemonService:PokemonService) { }

  ngOnInit(): void {

    let allPokemons = JSON.parse(sessionStorage.getItem("pokemons")!) as Pokemon[]
    let caughtPokemons = JSON.parse(localStorage.getItem("trainer")!)

    caughtPokemons.pokemon.map((caught : string) => {
      let caughtToInt = parseInt(caught)
      const foundPokemon = allPokemons.find((pokemon: Pokemon) => pokemon.id === caughtToInt);
      console.log(foundPokemon)
    })

}
}
