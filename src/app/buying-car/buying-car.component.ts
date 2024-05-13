import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyingCarService } from './buying-car.service';

@Component({
  selector: 'app-buying-car',
  templateUrl: './buying-car.component.html',

})
export class BuyingCarComponent {

  car: any ;

  constructor(
    private route: ActivatedRoute,
    public buyService:BuyingCarService){}

      ngOnInit(): void {
      this.route.params.subscribe(params => {
        const carId = +params['id'];
        this.car = this.buyService.getCarById(carId);
      });
    }
}

