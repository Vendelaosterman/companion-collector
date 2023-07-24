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
    userName?:string = "not logged"

    constructor(private readonly router:Router, 
        private readonly userService:UserService){}

    login(){
        localStorage.setItem('username',this.userName!)
        this.userService.getUser()
        this.router.navigateByUrl("pokemon-catalogue")

    }

    userNameChange(event:any):void{
        this.userName = event.target.value
    }

}