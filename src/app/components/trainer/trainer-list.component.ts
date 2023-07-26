import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  constructor(private readonly router:Router, private readonly userService:UserService) { }

  ngOnInit(): void {
    console.log(this.userService.returnUser());

  }
  

  // get userDetails(): User{
  //   return this.userService.userDetails
  // }

  handlePokemonSelected(pokemonId:number){
    
  }

}
