import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {

  @Input() pokemon?:Pokemon
  @Output() collectItem:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPokemonClicked(): void {
    this.collectItem.emit(this.pokemon?.id);
  }

  

  /*pokemonClicked():void{
    this.pokemonSelected.emit(this.pokemon?.id)
  }*/

}
