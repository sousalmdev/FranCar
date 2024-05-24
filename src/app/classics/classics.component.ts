import { Component } from '@angular/core';
import { Router } from '@angular/router';
import vehicleData from 'src/json/data.json';

@Component({
  selector: 'app-classics',
  templateUrl: './classics.component.html',
})
export class ClassicsComponent {

  displayedCars: any[] = vehicleData.filter((car: any) => car.ano < 2000); ;
  constructor(private router: Router) {}

  navToDetails(id: number): void {
    this.router.navigateByUrl(`home/details/${id}`);
  }

}
