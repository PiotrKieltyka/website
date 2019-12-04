import { Component, OnInit } from '@angular/core';

@Component({
  styles: [`
    div {
      color: rgb(7, 15, 87);
      margin-top: 10rem;
    }
  `],
  template: `
    <div class="text-center">
      <img src="../../assets/emojing_wizard_400x300.gif" alt="403 error">
      <h2>YOU SHALL NOT PASS</h2>
      <h4>Sorry, but you don't have permission to access this page.</h4>
    </div>`
})
export class ForbiddenComponent {}
