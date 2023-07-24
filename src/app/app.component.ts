import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'companion-collector';
  isLoggedIn: boolean = false;

  constructor(private readonly router: Router) {}

  ngOnInit(){
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.checkUserLoggedIn());
  }

  checkUserLoggedIn(){
    const user = localStorage.getItem('username');
    this.isLoggedIn = !!user; 
  }
}
