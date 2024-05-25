import { Component,ViewChild} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  open():void {
    this.trigger.openMenu();
  }
  close(): void{
    this.trigger.closeMenu();
  }

}
