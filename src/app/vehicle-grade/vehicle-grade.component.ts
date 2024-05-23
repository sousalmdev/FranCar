import { Component, OnInit, ViewChild } from '@angular/core';
import vehicleData from 'src/app/vehicle-grade/data.json';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-vehicle-grade',
  templateUrl: './vehicle-grade.component.html',
})
export class VehicleGradeComponent implements OnInit {
  vehicleData: any = vehicleData;
  displayedCars: any[] = [];
  totalCars: number = 0;

  carBrands = [
    {
      name: 'Ford',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png',
      url: 'home/search/ford',
      bg: 'bg-ford',
      desc: 'Os robustos e Econômicos da',
    },
    {
      name: 'Chevrolet',
      logo: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png',
      url: 'home/search/chevrolet',
      bg: 'bg-chevy',
      desc: 'Os ousados e adaptáveis da',
    },
    {
      name: 'Mitsubishi',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mitsubishi-logo.png/1200px-Mitsubishi-logo.png',
      url: 'home/search/mitsubishi',
      bg: 'bg-mitsu',
      desc: 'Os luxuosos e baratos da',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.totalCars = this.vehicleData.carros.length;
    this.displayedCars = this.vehicleData.carros.slice(0, 10);
  }

  search(query: string): void {
    const searchResults = this.vehicleData.carros.filter(
      (car: any) =>
        car.modelo.toLowerCase().includes(query) ||
        car.marca.toLowerCase().includes(query)
    );
    this.router.navigateByUrl(`home/search/${query}`);
    return searchResults;
  }

  navToDetails(id: number): void {
    this.router.navigateByUrl(`home/details/${id}`);
  }

  onPageChange(event: any): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.displayedCars = this.vehicleData.carros.slice(startIndex, endIndex);
  }
}
