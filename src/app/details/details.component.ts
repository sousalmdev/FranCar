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
      const carId = params['id']; // Já é string
      console.log('Car ID:', carId); // Log para verificar o ID do carro
      this.carService.getItemById(carId).subscribe(
        (data) => {
          console.log('Car data:', data); // Log para verificar os dados do carro
          this.car = data;
        },
        (error) => {
          console.error('Error fetching car data:', error); // Log para erros
        }
      );
    });
  }

  buyCar(id: string) {
    console.log('Navigating to buy car with ID:', id); // Log para verificar a navegação
    this.router.navigateByUrl(`/buying/${id}`);
  }
}
