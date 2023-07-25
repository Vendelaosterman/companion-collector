import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly http:HttpClient) { }

  getPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon/ditto')
  }

  getPokemonById(id:number):Observable<Pokemon>{
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/ditto${id}`)
  }
}
