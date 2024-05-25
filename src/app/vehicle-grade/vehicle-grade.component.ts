import { Component, OnInit, ViewChild } from '@angular/core';
import vehicleData from 'src/json/data.json';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-vehicle-grade',
  templateUrl: './vehicle-grade.component.html',
})
export class VehicleGradeComponent implements OnInit {
  vehicleData: any[] = vehicleData;
  displayedCars: any;
  totalCars: number = 0;

  carBrands = [
    {
      name: 'Ford',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png',
      url: 'home/search/ford',
      bg: 'bg-ford',
      desc: 'Os robustos e Econômicos da',
      width: 'w-32',
    },
    {
      name: 'Chevrolet',
      logo: 'https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png',
      url: 'home/search/chevrolet',
      bg: 'bg-chevy',
      desc: 'Os ousados e adaptáveis da',
      width: 'w-32',
    },
    {
      name: 'Volkswagen',
      logo: 'https://1000logos.net/wp-content/uploads/2019/12/Volkswagen-Logo-1978.png',
      url: 'home/search/volkswagen',
      bg: 'bg-volks',
      desc: 'Os queridinhos da galera:',
      width: 'w-32',
    },
    {
      name: 'Fiat',
      logo: 'https://i.pinimg.com/originals/27/5f/4b/275f4b05064a3c377cc23679979ef253.png',
      url: 'home/search/fiat',
      bg: 'bg-fiat',
      desc: 'O melhor custo benefício:',
      width: 'w-32',
    },
    {
      name: 'Clássicos',
      logo: 'https://seeklogo.com/images/M/Maserati-logo-B1F381987A-seeklogo.com.png',
      url: 'classics',
      bg: 'bg-classics',
      desc: 'Os veteranos sob rodas, os',
      width: 'w-12',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.totalCars = this.vehicleData.length;
    this.displayedCars = this.vehicleData.slice(0, 10);
  }

  search(query: string): void {
    const searchResults = this.vehicleData.filter((car: any) => {
      const carName: string = car.marca + car.modelo;
      return carName.toLowerCase().includes(query.toLowerCase());
    });

    if (searchResults.length === 1) {
      this.router.navigateByUrl(`home/details/${searchResults[0].id}`);
    } else {
      this.router.navigateByUrl(`home/search/${query}`);
    }
  }

  onSearchKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      const query = (event.target as HTMLInputElement).value
        .trim()
        .toLowerCase();
      if (query) {
        this.search(query);
      } else {
      }
    }
  }
  navToDetails(id: number): void {
    this.router.navigateByUrl(`home/details/${id}`);
  }

  onPageChange(event: any): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.displayedCars = this.vehicleData.slice(startIndex, endIndex);
  }
}
