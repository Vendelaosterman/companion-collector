import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';
import { User2 } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'companion-collector';
  isLoggedIn: boolean = false;
  user: string = "";
  username: string = "";

  constructor(private readonly router: Router) {}

  ngOnInit(){
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.checkUserLoggedIn());
  }

  checkUserLoggedIn(){
    const userData = JSON.parse(localStorage.getItem("trainer")!) as User2 ;
    this.user = userData?.username
    this.isLoggedIn = !!this.user;
  }
}
