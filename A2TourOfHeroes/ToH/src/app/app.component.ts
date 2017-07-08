import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
  hero = 'DrunkMan';
}
