import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {User2} from '../models/user';
import { environment } from '../environments/environment.prod'

@Injectable({
    providedIn: "root"
})

export class UserService {

    private _users! : User2[]
    private _newUsername: string = "" 

    constructor(private readonly http:HttpClient) {

    }

    // get users and check if the user exists 
    getUsers(){
        this.http.get<User2[]>(environment.API_URL)
        .subscribe({
            next: users => {

                this._users = users;
                this._newUsername = localStorage.getItem("username")!
                const existingUser = users.find((user) => user.username === this._newUsername);

                if (!existingUser) {
                    this.postUser();
                } 
                
            },
            error: error =>{
                console.log(error)
            }
        })

    }

    // add new user 
    postUser(){

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
        })
    }
}