import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pokemon-catalogue-page',
  templateUrl: './pokemon-catalogue-page.component.html',
  styleUrls: ['./pokemon-catalogue-page.component.css']
})
export class PokemonCataloguePageComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.removeClass(document.body, 'login-bg')
  }

}