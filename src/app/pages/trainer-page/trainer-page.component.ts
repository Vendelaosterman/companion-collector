import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service'; 
import { Router } from "@angular/router";

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent {
  constructor(private readonly userService: UserService, private readonly router: Router) {} 


  ngOnInit(): void {
    // Check if the user is already logged in
    if (localStorage.getItem('trainer') === null) {
      // Redirect to the login page
      this.router.navigateByUrl('');
    }
  }
  
  checkPokemonLength(): boolean{
    let caughtPokemons = JSON.parse(localStorage.getItem("trainer")!)
    console.log(caughtPokemons.pokemon.length)
    return caughtPokemons.pokemon.length > 0;
  }
  
  
  handleLogoutClick(): void {
    if (window.confirm('Do you really want to log out?')) {
      localStorage.removeItem('trainer'); // Remove the 'trainer' item from localStorage
      this.router.navigateByUrl(''); // Redirects the user to the login page
    }
  }
}

