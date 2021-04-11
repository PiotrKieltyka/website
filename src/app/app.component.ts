import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  animations: [slideInAnimation],
  selector: 'app-root',
  styles: [],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    console.log(
      '%c%s',
      'color: #939393; background: transparent; font-size: 24pt; background-clip: text; text-shadow: 0px 1px 3px rgba(243,243,243,.5);',
      'Hello stranger! Are you lost?',
    );
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
