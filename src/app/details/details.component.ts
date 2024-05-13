import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CarService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  car: any ;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const carId = +params['id'];
      this.car = this.carService.getCarById(carId);
    });
  }
}
