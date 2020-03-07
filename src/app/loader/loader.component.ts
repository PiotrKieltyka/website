import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'site-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  isLoading: Subject<boolean> = this.loaderService.isLoading;
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  constructor(
    private loaderService: LoaderService
  ) {}
}
