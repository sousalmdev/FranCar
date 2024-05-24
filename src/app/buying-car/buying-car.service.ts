import { Injectable } from '@angular/core';
import * as data from 'src/json/data.json';

@Injectable({
  providedIn: 'root',
})
export class BuyingCarService {
  carros: any[] = (data as any).default;

  constructor() {}

  getCarById(id: number): any {
    return this.carros.find((carro) => carro.id === id);
  }
}
