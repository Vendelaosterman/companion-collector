/*  Pokemon-list-item
*   The pokemon-list-item is a child-component to the pokemon-list to represent a single pokemon in the list of all pokemon.
*/

import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {

  @Input() pokemon?:Pokemon

  constructor() { }

  ngOnInit(): void {
  }

}
