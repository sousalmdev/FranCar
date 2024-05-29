import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-buying-car',
  templateUrl: './buying-car.component.html',
})
export class BuyingCarComponent implements OnInit {
  car: any;
  display: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public buyService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const carId = params['id'];
      this.buyService.getItemById(carId).subscribe((car) => {
        this.car = car;
      });
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
