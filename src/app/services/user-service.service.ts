import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {User2} from '../models/user';

@Injectable({
    providedIn: "root"
})

export class UserService {

    private userDetails? : User2[]

    constructor(private readonly http:HttpClient) {

    }

    getUser(){
        this.http.get<User2[]>("https://sign-language-translator-api-production.up.railway.app/trainers")
        .subscribe({
            next: user => this.userDetails = user, 
            error: error =>console.log(error)
        })
    }
}