import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private readonly router:Router){}

  ngOnInit(): void {
    if(localStorage.getItem("username") !== null){
      this.router.navigateByUrl("pokemon-catalogue")
    }
  }

}

