import { Injectable } from '@angular/core';
import * as data from 'src/json/data.json';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  carros: any[] = (data as any).default;

  constructor() {}

  getCarById(id: number): any {
    return this.carros.find((carro) => carro.id === id);
  }

  getAllCars(): any[] {
    return this.carros;
  }
}
