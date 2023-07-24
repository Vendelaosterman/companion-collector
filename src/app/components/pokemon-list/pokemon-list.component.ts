import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public pokemons:Pokemon[] = [{
    id: 1,
    name: "pikatuch",
    img: "http://localhost:3000/assets/images/1.jpg",
  },
  {
    id: 2,
    name: "Ashcethcup",
    img: "http://localhost:3000/assets/images/2.jpg",
  }]

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
  }

  handlePokemonSelected(pokemonId:number){
    this.router.navigate(['hej',pokemonId])
  }

}
