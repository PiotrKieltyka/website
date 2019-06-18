import {
  Component,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'site-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterContentInit {

  ngAfterContentInit(): void {
    const owlEyes = document.getElementById('eyes');
    setInterval(() => {
      owlEyes.classList.add('eyes-blink');
      setTimeout(() => {
        owlEyes.classList.remove('eyes-blink');
      }, 100);
    }, 4500);

  }

}
