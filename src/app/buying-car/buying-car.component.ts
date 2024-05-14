import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyingCarService } from './buying-car.service';
import {
  MatSnackBar,
  MatSnackBarModule,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { style } from '@angular/animations';
@Component({
  selector: 'app-buying-car',
  templateUrl: './buying-car.component.html',
})
export class BuyingCarComponent {
  car: any;
  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public buyService: BuyingCarService
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
      this.snackBar.open('Compra Agendada!', 'Show!', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      event.preventDefault();
      form.reset();
    } else {
      alert("don't works");
    }
  }
}
