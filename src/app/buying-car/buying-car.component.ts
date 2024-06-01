import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/api/api.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-buying-car',
  templateUrl: './buying-car.component.html',
})
export class BuyingCarComponent implements OnInit {
  car: any;
  display: boolean = false;
  private serviceID = 'service_3z9n8bj';
  private templateID = 'template_prubzbz';
  private userID = 'EK_zMWJ1dJIw0fHEh';

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
    event.preventDefault();
    const form = (document.getElementById('form') as HTMLFormElement) || null;
    if (form) {
      const formData = new FormData(form);
      const nome = formData.get('nome') as string;
      const endereco = formData.get('endereco') as string;
      const email = formData.get('email') as string;
      const carro = formData.get('carro') as string;
      const preco = formData.get('preco') as string;
      const foto = this.car.foto as string;

      const templateParams = {
        to_name: nome,
        car_bought: carro,
        price: preco,
        address: endereco,
        to_email: email,
        car_image_url:foto
      };

      emailjs.send(this.serviceID, this.templateID, templateParams, this.userID)
        .then(() => {
          this.display = true;
          form.reset();

          setTimeout(() => {
            this.closeDialog();
            this.router.navigateByUrl('/thanks');
          }, 2000);
        }).catch((error) => {
          console.error('Failed to send email', error);
        });
    }
  }

  closeDialog(): void {
    this.display = false;
  }
}
