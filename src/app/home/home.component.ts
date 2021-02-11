import { Component, AfterContentInit, OnInit } from '@angular/core';

@Component({
  selector: 'site-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterContentInit {
  time: Date;

  ngOnInit(): void {
    this.utcTime();
  }

  ngAfterContentInit(): void {
    const owlEyes = document.getElementById('eyes');
    setInterval(() => {
      owlEyes.classList.add('eyes-blink');
      setTimeout(() => {
        owlEyes.classList.remove('eyes-blink');
      }, 100);
    }, 4500);
  }

  utcTime(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
