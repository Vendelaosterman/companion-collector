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

          console.log(this.pokemons[0].id);
      },
      error:(error => {
        console.log(error)
      })
    }
    
    );
  }

  collectItem(id : number | undefined){
    let currentPokemons = localStorage.getItem("trainer");
    console.log(currentPokemons);
    console.log(id)
  }

  /*this.userService.getUsers(this.userName).subscribe((user) => {
            if (!user) {
              // User does not exist, create a new user and save it to API and localStorage
              this.userService.postUser({
                id: 0,
                username: this.userName!,
                pokemon: [],
              }).subscribe((createdUser) => {
                localStorage.setItem("trainer", JSON.stringify(createdUser));
                this.router.navigateByUrl("pokemon-catalogue");
              });
            } else {
              // User exists, save it in localStorage
              localStorage.setItem("trainer", JSON.stringify(user));
              this.router.navigateByUrl("pokemon-catalogue");
            }
        });*/
  
}
