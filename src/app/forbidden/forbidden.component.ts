import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  styleUrls: ['./forbidden.component.scss'],
  template: ` <div class="text-center">
    <img src="../../assets/403_-_forbidden.png" alt="403 error" />
    <h2>YOU SHALL NOT PASS</h2>
    <h4>Sorry, but you don't have permission to access this page.</h4>
  </div>`,
})
export class ForbiddenComponent {}
