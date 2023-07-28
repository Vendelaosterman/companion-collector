/*  Landing-page   
*   The landing-page is responsible for displaying the landing page, ie the login page. 
    It directs the user to the pokemon-catalogue page if they are already logged in.
*/  

import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private readonly router:Router, private renderer: Renderer2){}

  ngOnInit(): void {

    this.renderer.addClass(document.body, 'login-bg')

    if(localStorage.getItem("trainer") !== null){
      this.router.navigateByUrl("pokemon-catalogue")
    }
  }

}

