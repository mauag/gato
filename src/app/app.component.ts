import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameStarted: boolean = false;
  constructor(){
  
  }
  initGame(){
    this.gameStarted = true;
  }
}
