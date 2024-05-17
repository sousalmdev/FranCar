import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as data from '../buying-car/data.json'
@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
})
export class SearchAreaComponent implements OnInit {
  displayedCars: any[] = (data as any).default;
  query: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = params['query'];
      if (this.query) {
        this.displayedCars = this.displayedCars.filter((car:any) =>
          car.modelo.toLowerCase().includes(this.query.toLowerCase()) ||
          car.marca.toLowerCase().includes(this.query.toLowerCase())
        );
      }
    });
  }

  navToDetails(id: number): void {
    this.router.navigateByUrl(`home/details/${id}`);
  }
}
