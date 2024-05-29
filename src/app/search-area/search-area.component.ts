import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSelectChange, MatSelectModule, MatSelectTrigger} from '@angular/material/select';

import {ApiService} from 'src/api/api.service';


@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
})
export class SearchAreaComponent implements OnInit {
  allCars: any;
  displayedCars: any[] = [];
  query: string = '';
  sortCriteria: 'anoAsc' | 'anoDesc' | 'marcaAsc' = 'marcaAsc';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getItems().subscribe(cars => {
      this.allCars = cars;
      this.route.params.subscribe(params => {
        this.query = params['query'];
        this.filterCars();
      });
    });
  }
  filterCars(): void {
    if (this.query) {
      this.displayedCars = this.allCars.filter((car: any) => {
     
        const carName: string = (car.marca || '') + (car.modelo || '');


        return typeof carName === 'string' && carName.toLowerCase().includes(this.query.toLowerCase());
      });
    } else {
      this.displayedCars = [...this.allCars];
    }

    this.sortCars();
  }
  sortCars(): void {
    this.displayedCars.sort((a, b) => {
      if (this.sortCriteria === 'anoDesc') {
        return a.ano - b.ano;
      } else if (this.sortCriteria === 'anoAsc') {
        return b.ano - a.ano;
      } else if (this.sortCriteria === 'marcaAsc') {
        return a.marca.localeCompare(b.marca);
      }
      return 0;
    });
  }



  onSortChange(event: MatSelectChange): void {
    const value = event.value;
    if (value) {
      this.sortCriteria = value as 'anoAsc' | 'anoDesc' | 'marcaAsc'
      this.sortCars();
    }
  }

  navToDetails(_id: string): void {
    this.router.navigateByUrl(`home/details/${_id}`);
  }
}

