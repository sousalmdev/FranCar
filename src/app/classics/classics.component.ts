import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-classics',
  templateUrl: './classics.component.html',
})
export class ClassicsComponent implements OnInit {
  displayedCars: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getItems().subscribe((data) => {
      this.displayedCars = data.filter((car: any) => car.ano < 2000);
    });
  }

  navToDetails(id: number): void {
    this.router.navigateByUrl(`home/details/${id}`);
  }
}
