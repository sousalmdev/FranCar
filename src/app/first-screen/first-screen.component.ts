import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
})
export class FirstScreenComponent {
  myImage: string =
    'assets/img/1967-Chevrolet-Impala-PNG-Clipart.png';

  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigateByUrl('/home');
  }
}
