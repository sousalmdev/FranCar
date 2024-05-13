import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatMenu } from '@angular/material/menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  showSearchInput: boolean = false;

  toggleSearchInput() {
    this.showSearchInput = !this.showSearchInput;
  }
}
