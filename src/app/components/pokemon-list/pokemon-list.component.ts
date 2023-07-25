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

  handlePokemonSelected(pokemonId:number){
    this.router.navigate(['pokemon-details',pokemonId])
  }

}
