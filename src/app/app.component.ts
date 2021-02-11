import { slideInAnimation } from './animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  animations: [slideInAnimation],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  constructor() {
    console.log(
      '%c%s',
      'color: #939393; background: transparent; font-size: 24pt; background-clip: text; text-shadow: 0px 1px 3px rgba(243,243,243,.5);',
      'Hello stranger! Are you lost?'
    );
  }
}
