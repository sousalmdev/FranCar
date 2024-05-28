import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  car: any;

  constructor(
    private route: ActivatedRoute,
    private carService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const carId = params['id'];  
      this.carService.getItemById(carId).subscribe((data) => {
        this.car = data;
      });
    });
  }

  buyCar(id: number) {
    this.router.navigateByUrl(`/buying/${id}`);
  }
}