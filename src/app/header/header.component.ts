import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'site-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
  ) {}
}
