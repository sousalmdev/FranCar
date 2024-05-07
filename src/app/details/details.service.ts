import { Injectable } from '@angular/core';
import * as data from '../details/data.json';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carros: any[] = (data as any).default;

  constructor() { }

  getCarById(id: number): any {
    return this.carros.find(carro =>carro.Id=== id);
  }

  getAllCars(): any[] {
    return this.carros;
  }

}
