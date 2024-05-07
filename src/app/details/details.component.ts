import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  car: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const carId = +params['id'];
      this.car = this.carService.getCarById(carId);
    });
  }
}
