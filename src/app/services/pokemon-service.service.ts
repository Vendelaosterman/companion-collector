import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Observable, forkJoin } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly http: HttpClient) { }

  // ta in 40 st pokemon, gör en switch map på varje så den hämtar varje: 

  getPokemons(): Observable<Pokemon[]> {
    const limit = 40;
    const offset = 80;

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    return this.http.get<any>(url).pipe(
      map((response: any) => response.results),
      switchMap((pokemonList: any[]) => {
        const pokemonRequests: Observable<Pokemon>[] = pokemonList.map((pokemonItem: any) =>
          this.http.get<Pokemon>(pokemonItem.url)
        );
        return forkJoin(pokemonRequests);
      })
    );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
