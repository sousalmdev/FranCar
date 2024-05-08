import { Component, OnInit } from '@angular/core';
import vehicleData from 'src/app/vehicle-grade/data.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-grade',
  templateUrl: './vehicle-grade.component.html',
})
export class VehicleGradeComponent implements OnInit {
  vehicleData: any = vehicleData; // Atribua todo o objeto vehicleData ao invés de apenas vehicleData.carros
  displayedCars: any[] = [];
  totalCars: number = 0; // Declarar a propriedade totalCars

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.vehicleData); // Teste para verificar se os dados foram carregados corretamente
    this.totalCars = this.vehicleData.carros.length; // Defina o número total de carros
    this.displayedCars = this.vehicleData.carros.slice(0, 10); // Exiba os primeiros 10 carros ao iniciar
  }

  navToDetails(): void {
    this.router.navigateByUrl('details/:id');
  }

  onPageChange(event: any): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.displayedCars = this.vehicleData.carros.slice(startIndex, endIndex);
  }
}
