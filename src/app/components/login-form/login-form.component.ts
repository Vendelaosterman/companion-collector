/*  LoginForm
*   The LoginForm handles where users can enter their username to access the pokemon catalogue and their collected pokemon. 
    The LoginForm handles the login functionality by talking to the user-service to check if the user exists, 
    it creates a new user if necessary, and then stores the user data in local storage for it to be later accessed.
*/

import { Component } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user-service.service";

@Component({
    selector:"app-login-form",
    templateUrl: "./login-form.component.html",
    styleUrls:["./login-form.component.css"]
}


)
export class LoginFormComponent{
    userName?:string = "" 

    constructor(private readonly router:Router, 
        private readonly userService:UserService){}

    login(){

        this.userService.getUsers(this.userName).subscribe((user) => {
            if (!user) {
              // User does not exist, create a new user and save it to API and localStorage
              this.userService.postUser({
                id: 0,
                username: this.userName!,
                pokemon: [],
              }).subscribe((createdUser) => {
                localStorage.setItem("trainer", JSON.stringify(createdUser));
                this.router.navigateByUrl("pokemon-catalogue");
              });
            } else {
              // User exists, save it in localStorage
              localStorage.setItem("trainer", JSON.stringify(user));
              this.router.navigateByUrl("pokemon-catalogue");
            }
        });

    }

    userNameChange(event:any):void{
        this.userName = event.target.value
    }

}