import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/loading-screen/loading.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://francar-api-2.onrender.com';

  constructor(private http: HttpClient, private loadingService: LoadingService) {}

  getItems(): Observable<any[]> {
    this.loadingService.show();
    return this.http.get<any[]>(`${this.apiUrl}/`).pipe(
      finalize(() => this.loadingService.hide())
    );
  }

  getItemById(id: string): Observable<any> {  
    this.loadingService.show();
    return this.http.get<any>(`${this.apiUrl}/item/${id}`).pipe(
      finalize(() => this.loadingService.hide())
    );
  }
}