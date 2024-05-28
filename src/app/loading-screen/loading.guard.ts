import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { ApiService } from 'src/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanActivate {
  constructor(private loadingService: LoadingService, private apiService: ApiService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    this.loadingService.show();
    return this.apiService.getItems().pipe(
      map(() => true),
    );
  }
}
