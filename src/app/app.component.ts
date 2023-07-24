import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'companion-collector';
  isLoggedIn: boolean = false;

  ngOnInit(){
    this.checkUserLoggedIn();
  }

  checkUserLoggedIn(){
    const user = localStorage.getItem('username');
    this.isLoggedIn = !!user; 
  }
}
