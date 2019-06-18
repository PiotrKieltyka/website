import { slideInAnimation } from './animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  constructor() {
    console.log('%c%s', 'color: transparent; background: transparent; font-size: 24pt; background-clip: text; text-shadow: 0px 2px 3px rgba(243,243,243,.5);', 'Hello stranger! Are you lost?');
  }
}
