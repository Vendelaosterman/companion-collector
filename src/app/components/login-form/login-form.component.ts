import { Component } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector:"app-login-form",
    templateUrl: "./login-form.component.html",
    styleUrls:["./login-form.component.css"]
}


)
export class LoginFormComponent{
    userName?:string = "not logged"

    constructor(private readonly router:Router){}

    login(){
        localStorage.setItem('username',this.userName!)
        this.router.navigateByUrl("pokemon-catalogue")

    }

    userNameChange(event:any):void{
        this.userName = event.target.value
    }

}