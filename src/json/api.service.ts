import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrancarApiService {
  private apiUrl = 'https://francar-api-2.onrender.com';

  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/`);
  }

}
