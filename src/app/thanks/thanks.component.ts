import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
})
export class ThanksComponent {
  constructor(private router:Router){}
  goHome(): void {
    this.router.navigateByUrl('/home');
  }
}
