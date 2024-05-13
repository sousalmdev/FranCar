import { Component} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CarService } from './details.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  car: any ;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const carId = +params['id'];
      this.car = this.carService.getCarById(carId);
    });
  }
  buyCar(id:number){
    this.router.navigateByUrl(`/buying/${id}`)
  }
}
