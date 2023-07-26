import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {User2} from '../models/user';
import { environment } from '../environments/environment.prod'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator

@Injectable({
    providedIn: "root"
})

export class UserService {

    private _users! : User2[]
    private _newUsername: string = "" 
    private _user!: User2 | undefined

    constructor(private readonly http:HttpClient) {

    }

    // get users and check if the user exists 

    getUsers(username: string = ""): Observable<User2 | null> {
        return this.http.get<User2[]>(environment.API_URL).pipe(
          map((users: User2[]) => {
            const existingUser = users.find((user: User2) => user.username === username);
            return existingUser || null;
          })
        );
      }

    /*getUsers(username : string = ""){
       this.http.get<User2[]>(environment.API_URL)
        .subscribe({
            next: users => {

                this._users = users;
                //this._newUsername = localStorage.getItem("username")!
                //console.log(username);
                const existingUser = users.find((user) => user.username === username);

                this._user = existingUser;

                if (!existingUser) {
                    this.postUser();
                }else{
                    //localStorage.setItem("trainer", JSON.stringify(existingUser));
                } 
                
            },
            error: error =>{
                console.log(error)
            }
        })

    }*/

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

    // add new user 
    /*postUser(){

        const newUser = {
            id: this._users.length + 1,
            username: this._newUsername,
            pokemon: []
        };

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'x-api-key': environment.API_KEY,
          });

        this.http.post(environment.API_URL, newUser, {headers})
        .subscribe(() => {  
            localStorage.setItem("trainer", JSON.stringify(newUser));
        })
    }*/
}