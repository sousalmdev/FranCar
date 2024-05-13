import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
})
export class FirstScreenComponent {
  myImage: string =
    'assets/img/carro-branco-isolado_176382-1602-removebg-preview.png';

  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigateByUrl('/home');
  }
}
