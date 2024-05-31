import { Component } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html'
})
export class LoadingScreenComponent {
  loading$ = this.loadingService.isLoading;

  constructor(private loadingService: LoadingService) {}
}
