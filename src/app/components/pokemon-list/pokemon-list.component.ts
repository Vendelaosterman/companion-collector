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
    ability: "" ,
    sprite: "https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/25.png",
  },
  {
    id: 2,
    name: "Bulbasaur",
    ability: "",
    sprite: "https://th.bing.com/th/id/R.fda75fcc5e87c54e8e41cb95f9feed59?rik=KGxCEZErC6sUXw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f11%2fBulbasaur-PNG-Transparent-Image.png&ehk=iPUr8kInH6ju1PrWo1ow3GWjkoyCOvPumhqPvYQyw5s%3d&risl=&pid=ImgRaw&r=0",
  }]

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
  }

  handlePokemonSelected(pokemonId:number){
    this.router.navigate(['hej',pokemonId])
  }

}
