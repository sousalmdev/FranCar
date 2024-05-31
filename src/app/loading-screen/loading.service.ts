import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading = false;
  public loadingMessageTimeout: any;
  public loadingMessage$ = new Subject<string>();

  show(): void {
    this.loading = true;
    this.loadingMessageTimeout = setTimeout(() => {
      this.loadingMessage$.next('Carregando mais que o normal, aguarde...');
    }, 3000);
  }

  hide(): void {
    this.loading = false;
  }

  isLoading(): boolean {
    return this.loading;
  }
}
