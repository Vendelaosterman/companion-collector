import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {User2} from '../models/user';
import { environment } from '../environments/environment.prod'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})

export class UserService {

    private _users! : User2[]
    private _newUsername: string = "" 
    private _user!: User2 | undefined

    constructor(private readonly http:HttpClient, private readonly router: Router) {

    }

    // get users and check if the user exists 

    getUsers(username: string = ""): Observable<User2 | null> {
        return this.http.get<User2[]>(environment.API_URL).pipe(
          map((users: User2[]) => {
            const existingUser = users.find((user: User2) => user.username === username);
            this._users = users
            return existingUser || null;
          })
        );
      }

    returnUser(){
        return this._user;
    }

    postUser(newUser: User2): Observable<User2> {
        newUser.id = this._users.length + 1;
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'x-api-key': environment.API_KEY,
        });
    
        return this.http.post<User2>(environment.API_URL, newUser, {headers});
      }

    postPokemon(userId: number, currentPokemon: string[], newPokemon: string): Observable <User2>{

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': environment.API_KEY,
      });

      const updatedUser: Partial <User2> = {
        pokemon: [...currentPokemon, newPokemon] // Add the newPokemon to the existing list
      };
    
      return this.http.patch<User2>(`${environment.API_URL}/${userId}`, updatedUser, { headers });

    } 

    removePokemon(userId: number, currentPokemon: string[], removedPokemon: string): Observable <User2>{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': environment.API_KEY,
      });
      let updatedPokemons: Partial <User2> = {
        pokemon: currentPokemon.filter((item) => item !== removedPokemon)
      }
      return this.http.patch<User2>(`${environment.API_URL}/${userId}`, updatedPokemons, { headers });
    }
}