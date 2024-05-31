import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, catchError, delay } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { ApiService } from 'src/api/api.service';
import { CacheService } from 'src/api/cache.service';


@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanActivate {
  private cacheKey = 'items';

  constructor(
    private loadingService: LoadingService,
    private apiService: ApiService,
    private cacheService: CacheService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    if (this.cacheService.has(this.cacheKey)) {
      return of(true);
    }
  this.loadingService.show();

    return this.apiService.getItems().pipe(
      tap(items => this.cacheService.set(this.cacheKey, items)),
      map(() => true),
      catchError(() => {
        this.loadingService.hide();
        return of(false);
      }),
      tap(() => this.loadingService.hide())
    );
  }
}
