import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyingCarService } from './buying-car.service';


@Component({
  selector: 'app-buying-car',
  templateUrl: './buying-car.component.html',
})
export class BuyingCarComponent {

  car: any;
  display:boolean = false;

  constructor(
    private route: ActivatedRoute,
    public buyService: BuyingCarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const carId = +params['id'];
      this.car = this.buyService.getCarById(carId);
    });
  }

  onSubmit(event: Event): void {
    const form = (document.getElementById('form') as HTMLFormElement) || null;
    if (form) {
      this.display = true;
      event.preventDefault();
      form.reset();

      setTimeout(() => {
        this.closeDialog();
      }, 2000);


      setTimeout(() => {
        this.router.navigateByUrl('/thanks');
      }, 2000);
    }
  }

  closeDialog(): void {
    this.display = false;
  }


}
