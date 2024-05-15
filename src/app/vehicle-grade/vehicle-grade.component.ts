import { Component, OnInit } from '@angular/core';
import vehicleData from 'src/app/vehicle-grade/data.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-grade',
  templateUrl: './vehicle-grade.component.html',
})
export class VehicleGradeComponent implements OnInit {
  vehicleData: any = vehicleData;
  displayedCars: any[] = [];
  totalCars: number = 0;
  searchQuery: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.totalCars = this.vehicleData.carros.length;
    this.displayedCars = this.vehicleData.carros.slice(0, 10);
  }

  navToDetails(id: number): void {
    this.router.navigateByUrl(`home/details/${id}`);
  }

  onPageChange(event: any): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    if (this.searchQuery) {
      this.displayedCars = this.searchCars().slice(startIndex, endIndex);
    } else {
      this.displayedCars = this.vehicleData.carros.slice(startIndex, endIndex);
    }
  }

  search(): void {
    if (this.searchQuery.trim() !== '') {
      this.displayedCars = this.searchCars();
      this.totalCars = this.displayedCars.length;
    } else {
      this.totalCars = this.vehicleData.carros.length;
      this.displayedCars = this.vehicleData.carros.slice(0, 10);
    }
  }

  public searchCars(): any[] {
    const query = this.searchQuery.trim().toLowerCase();
    return this.vehicleData.carros.filter((car:any) =>
      car.marca.toLowerCase().includes(query) || car.modelo.toLowerCase().includes(query)
    );
  }
}
