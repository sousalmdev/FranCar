import { Component, OnInit } from '@angular/core';
import vehicleData from 'src/app/vehicle-grade/data.json';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-vehicle-grade',
  templateUrl: './vehicle-grade.component.html',
})
export class VehicleGradeComponent implements OnInit {
  vehicleData: any = vehicleData;
  displayedCars: any[] = [];
  totalCars: number = 0;
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
    this.displayedCars = this.vehicleData.carros.slice(startIndex, endIndex);
  }
}
